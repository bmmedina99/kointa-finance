import type { Metadata } from 'next'
import '@/styles/globals.css'

export const metadata: Metadata = {
  title: 'Next.js Template',
  description:
    'Plantilla base de Next.js App Router con TailwindCSS y TypeScript preconfigurados',
  alternates: {
    canonical: 'http://localhost:4000',
  },
  openGraph: {
    type: 'website',
    url: 'http://localhost:4000',
    title: 'Next.js Template',
    description:
      'Plantilla base de Next.js App Router con TailwindCSS y TypeScript preconfigurados',
    siteName: 'Next.js',
    images: [
      {
        url: 'http://localhost:4000/open-graph.webp', // Debe ser una URL absoluta
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Next.js Template',
    description: 'The React Framework for the Web',
    siteId: '1467726470533754880',
    creator: '@bmmedina99',
    creatorId: '1467726470533754880',
    images: ['http://localhost:4000/twitter-card.webp'], // Debe ser una URL absoluta
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang='es'>
      <body className='antialiased bg-rich-black'>{children}</body>
    </html>
  )
}
