import { useEffect, useRef, useState } from 'react';

type ColorBendsProps = {
  className?: string;
  style?: React.CSSProperties;
  rotation?: number;
  speed?: number;
  colors?: string[];
  transparent?: boolean;
  autoRotate?: number;
  scale?: number;
  frequency?: number;
  warpStrength?: number;
  mouseInfluence?: number;
  parallax?: number;
  noise?: number;
};

const frag = `
precision highp float;
uniform float uTime;
uniform float uSpeed;
uniform vec2 uCanvas;
uniform vec3 uColor1;
uniform vec3 uColor2;
uniform vec3 uColor3;
uniform vec3 uColor4;
uniform float uNoise;
varying vec2 vUv;

void main() {
  float t = uTime * uSpeed;
  vec2 uv = vUv;
  float aspect = uCanvas.x / uCanvas.y;
  vec2 p = (uv - 0.5) * vec2(aspect, 1.0);

  // Layered flowing waves
  float n1 = sin(p.x * 4.0 + sin(p.y * 3.0 + t) * 2.0 + t);
  float n2 = sin(p.y * 3.5 - cos(p.x * 2.5 - t * 0.8) * 1.5 - t * 0.7);
  float n3 = sin((p.x + p.y) * 3.0 + sin(t * 0.5) * 2.0);
  float n4 = sin((p.x - p.y) * 2.5 + cos(t * 0.6) * 1.5);

  // Smooth blend weights
  float w1 = smoothstep(-0.5, 0.8, n1);
  float w2 = smoothstep(-0.5, 0.8, n2);
  float w3 = smoothstep(-0.3, 0.9, n3);
  float w4 = smoothstep(-0.3, 0.9, n4);

  vec3 col = uColor1 * w1 + uColor2 * w2 + uColor3 * w3 + uColor4 * w4;
  col = col / (w1 + w2 + w3 + w4 + 0.001);

  // Add subtle noise
  if (uNoise > 0.001) {
    float grain = fract(sin(dot(gl_FragCoord.xy, vec2(12.9898, 78.233))) * 43758.5453);
    col += (grain - 0.5) * uNoise;
  }

  gl_FragColor = vec4(col, 1.0);
}
`;

const vert = `
varying vec2 vUv;
void main() {
  vUv = uv;
  gl_Position = vec4(position, 1.0);
}
`;

export function ColorBends({
  className,
  style,
  rotation = 45,
  speed = 0.2,
  colors = [],
  transparent = true,
  autoRotate = 0,
  scale = 1,
  frequency = 1,
  warpStrength = 1,
  mouseInfluence = 1,
  parallax = 0.5,
  noise = 0.1
}: ColorBendsProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [mounted, setMounted] = useState(false);
  const stateRef = useRef({
    renderer: null as any,
    material: null as any,
    raf: null as number | null,
    resizeObserver: null as ResizeObserver | null,
    rotation,
    autoRotate,
    pointerTarget: { x: 0, y: 0 },
    pointerCurrent: { x: 0, y: 0 },
  });

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || typeof window === 'undefined') return;

    let cancelled = false;

    const init = async () => {
      const THREE = await import('three');
      if (cancelled || !containerRef.current) return;

      const container = containerRef.current;
      const scene = new THREE.Scene();
      const camera = new THREE.OrthographicCamera(-1, 1, 1, -1, 0, 1);
      const geometry = new THREE.PlaneGeometry(2, 2);

      // Parse colors
      const toVec3 = (hex: string) => {
        const h = hex.replace('#', '').trim();
        const v = h.length === 3
          ? [parseInt(h[0] + h[0], 16), parseInt(h[1] + h[1], 16), parseInt(h[2] + h[2], 16)]
          : [parseInt(h.slice(0, 2), 16), parseInt(h.slice(2, 4), 16), parseInt(h.slice(4, 6), 16)];
        return new THREE.Vector3(v[0] / 255, v[1] / 255, v[2] / 255);
      };

      const colorArr = (colors || []).filter(Boolean).slice(0, 4);
      const c1 = colorArr[0] ? toVec3(colorArr[0]) : new THREE.Vector3(0.2, 0.3, 0.5);
      const c2 = colorArr[1] ? toVec3(colorArr[1]) : new THREE.Vector3(0.3, 0.4, 0.6);
      const c3 = colorArr[2] ? toVec3(colorArr[2]) : new THREE.Vector3(0.4, 0.5, 0.7);
      const c4 = colorArr[3] ? toVec3(colorArr[3]) : new THREE.Vector3(0.2, 0.25, 0.4);

      const material = new THREE.ShaderMaterial({
        vertexShader: vert,
        fragmentShader: frag,
        uniforms: {
          uCanvas: { value: new THREE.Vector2(1, 1) },
          uTime: { value: 0 },
          uSpeed: { value: speed },
          uRot: { value: new THREE.Vector2(1, 0) },
          uColor1: { value: c1 },
          uColor2: { value: c2 },
          uColor3: { value: c3 },
          uColor4: { value: c4 },
          uScale: { value: scale },
          uFrequency: { value: frequency },
          uWarpStrength: { value: warpStrength },
          uPointer: { value: new THREE.Vector2(0, 0) },
          uMouseInfluence: { value: mouseInfluence },
          uParallax: { value: parallax },
          uNoise: { value: noise }
        },
        transparent: true
      });
      stateRef.current.material = material;

      const mesh = new THREE.Mesh(geometry, material);
      scene.add(mesh);

      const renderer = new THREE.WebGLRenderer({
        antialias: false,
        powerPreference: 'high-performance',
        alpha: true
      });
      stateRef.current.renderer = renderer;
      renderer.outputColorSpace = THREE.SRGBColorSpace;
      renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
      renderer.setClearColor(0x000000, transparent ? 0 : 1);
      renderer.domElement.style.width = '100%';
      renderer.domElement.style.height = '100%';
      renderer.domElement.style.display = 'block';
      container.appendChild(renderer.domElement);

      const clock = new THREE.Clock();

      const handleResize = () => {
        const w = container.clientWidth || 1;
        const h = container.clientHeight || 1;
        renderer.setSize(w, h, false);
        (material.uniforms.uCanvas.value as any).set(w, h);
      };
      handleResize();

      if ('ResizeObserver' in window) {
        const ro = new ResizeObserver(handleResize);
        ro.observe(container);
        stateRef.current.resizeObserver = ro;
      } else {
        window.addEventListener('resize', handleResize);
      }

      const handlePointerMove = (e: PointerEvent) => {
        const rect = container.getBoundingClientRect();
        const x = ((e.clientX - rect.left) / (rect.width || 1)) * 2 - 1;
        const y = -(((e.clientY - rect.top) / (rect.height || 1)) * 2 - 1);
        stateRef.current.pointerTarget = { x, y };
      };
      container.addEventListener('pointermove', handlePointerMove);

      const loop = () => {
        if (cancelled) return;
        const dt = clock.getDelta();
        const elapsed = clock.elapsedTime;
        material.uniforms.uTime.value = elapsed;

        const deg = (stateRef.current.rotation % 360) + stateRef.current.autoRotate * elapsed;
        const rad = (deg * Math.PI) / 180;
        (material.uniforms.uRot.value as any).set(Math.cos(rad), Math.sin(rad));

        const cur = stateRef.current.pointerCurrent;
        const tgt = stateRef.current.pointerTarget;
        const amt = Math.min(1, dt * 8);
        cur.x += (tgt.x - cur.x) * amt;
        cur.y += (tgt.y - cur.y) * amt;
        (material.uniforms.uPointer.value as any).set(cur.x, cur.y);

        renderer.render(scene, camera);
        stateRef.current.raf = requestAnimationFrame(loop);
      };
      stateRef.current.raf = requestAnimationFrame(loop);

      return () => {
        cancelled = true;
        if (stateRef.current.raf !== null) cancelAnimationFrame(stateRef.current.raf);
        if (stateRef.current.resizeObserver) stateRef.current.resizeObserver.disconnect();
        else window.removeEventListener('resize', handleResize);
        container.removeEventListener('pointermove', handlePointerMove);
        geometry.dispose();
        material.dispose();
        renderer.dispose();
        if (renderer.domElement?.parentElement === container) {
          container.removeChild(renderer.domElement);
        }
      };
    };

    let cleanup: (() => void) | undefined;
    init().then(c => { cleanup = c; });

    return () => {
      cancelled = true;
      cleanup?.();
    };
  }, [mounted]);

  useEffect(() => {
    const material = stateRef.current.material;
    if (!material) return;

    stateRef.current.rotation = rotation;
    stateRef.current.autoRotate = autoRotate;
    material.uniforms.uSpeed.value = speed;
    material.uniforms.uScale.value = scale;
    material.uniforms.uFrequency.value = frequency;
    material.uniforms.uWarpStrength.value = warpStrength;
    material.uniforms.uMouseInfluence.value = mouseInfluence;
    material.uniforms.uParallax.value = parallax;
    material.uniforms.uNoise.value = noise;
  }, [rotation, autoRotate, speed, scale, frequency, warpStrength, mouseInfluence, parallax, noise]);

  return <div ref={containerRef} className={`w-full h-full relative overflow-hidden ${className ?? ''}`} style={style} />;
}
