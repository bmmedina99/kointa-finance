import type { Metadata } from 'next'
import { configSite } from '@/site.config'
import '@/styles/global.css'

const { title, description, url, author } = configSite

export const baseMetadata: Metadata = {
  metadataBase: new URL(url),
  title: {
    default: title,
    template: `%s | ${title}`,
  },
  description: description,
  authors: [{ name: author }],
  robots: 'index, follow',
  icons: {
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
  },
  openGraph: {
    title: title,
    description: description,
    url: url,
    siteName: title,
    images: [
      {
        url: `${url}/images/open-graph.webp`,
        width: 1200,
        height: 630,
        alt: title,
      },
    ],
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: title,
    description: description,
    site: '@twitter-site',
    creator: '@twitter-author',
    images: [`${url}/images/twitter-card.webp`],
  },
  other: {
    themeColor: '#030014',
    sitemap: '/sitemap-index.xml',
  },
  alternates: {
    canonical: url,
  },
}
