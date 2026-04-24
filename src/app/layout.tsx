import { Poppins } from 'next/font/google'
import Footer from '@/components/layout/Footer'
import Header from '@/components/layout/Header'
import { baseMetadata } from '@/components/metadata.config'
import { configSite } from '@/site.config'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '600', '700'],
  display: 'swap',
})

export const metadata = baseMetadata

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang={configSite.lang}
      className={poppins.className}
    >
      <body>
        <Header />
        {children}
        <Footer />
      </body>
    </html>
  )
}
