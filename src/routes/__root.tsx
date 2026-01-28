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
        title: 'Portfolio - Juan F. De Luca',
      },
      {
        name: 'description',
        content: 'Software Engineer specializing in scalable systems, React, and TypeScript',
      },
      {
        property: 'og:title',
        content: 'Juan F. De Luca - Software Engineer',
      },
      {
        property: 'og:description',
        content: 'Software Engineer specializing in scalable systems, React, and TypeScript',
      },
      {
        property: 'og:image',
        content: 'https://juandl.com/og-image.png',
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
        rel: 'icon',
        type: 'image/svg+xml',
        href: '/favicon.svg',
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
