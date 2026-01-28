import { HeadContent, Scripts, createRootRoute } from '@tanstack/react-router'

import appCss from '../styles.css?url'

export const Route = createRootRoute({
  head: () => ({
    meta: [
      {
        charSet: 'utf-8',
      },
      {
        name: 'viewport',
        content: 'width=device-width, initial-scale=1',
      },
      {
        title: 'Juan F. De Luca - Software Engineer',
      },
      {
        name: 'description',
        content: 'Software Engineer specializing in scalable systems, React, and TypeScript. Building high-performance web applications.',
      },
      {
        name: 'author',
        content: 'Juan F. De Luca',
      },
      {
        name: 'robots',
        content: 'index, follow',
      },
      {
        name: 'theme-color',
        content: '#000000',
      },
      {
        property: 'og:title',
        content: 'Juan F. De Luca - Software Engineer',
      },
      {
        property: 'og:description',
        content: 'Software Engineer specializing in scalable systems, React, and TypeScript. Building high-performance web applications.',
      },
      {
        property: 'og:image',
        content: 'https://juandl.com/og-image.png',
      },
      {
        property: 'og:url',
        content: 'https://juandl.com',
      },
      {
        property: 'og:site_name',
        content: 'Juan F. De Luca',
      },
      {
        property: 'og:type',
        content: 'website',
      },
      {
        name: 'twitter:card',
        content: 'summary_large_image',
      },
      {
        name: 'twitter:title',
        content: 'Juan F. De Luca - Software Engineer',
      },
      {
        name: 'twitter:description',
        content: 'Software Engineer specializing in scalable systems, React, and TypeScript. Building high-performance web applications.',
      },
      {
        name: 'twitter:image',
        content: 'https://juandl.com/og-image.png',
      },
    ],
    links: [
      {
        rel: 'stylesheet',
        href: appCss,
      },
      {
        rel: 'canonical',
        href: 'https://juandl.com',
      },
      {
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
      },
      {
        rel: 'apple-touch-icon',
        href: '/apple-touch-icon.png',
      },
    ],
    scripts: [
      {
        type: 'application/ld+json',
        children: JSON.stringify({
          '@context': 'https://schema.org',
          '@type': 'Person',
          name: 'Juan F. De Luca',
          url: 'https://juandl.com',
          jobTitle: 'Software Engineer',
          knowsAbout: ['React', 'TypeScript', 'Scalable Systems', 'Web Development'],
        }),
      },
    ],
  }),

  shellComponent: RootDocument,
})

function RootDocument({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <head>
        <HeadContent />
      </head>
      <body className="bg-black">
        {children}
        <Scripts />
      </body>
    </html>
  )
}
