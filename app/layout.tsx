import './global.css'
import type { Metadata } from 'next'
import { GeistSans } from 'geist/font/sans'
import { GeistMono } from 'geist/font/mono'
import { Navbar } from './components/nav'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'
import Footer from './components/footer'
import { baseUrl } from './sitemap'

export const metadata: Metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: 'The Townes at Union Village - New Homes in Henderson, NV',
    template: '%s | The Townes at Union Village',
  },
  description: 'New townhomes for sale in Henderson, NV starting from $369,990. Expert guidance from Dr. Jan Duffy, your preferred buyer agent. Century Communities.',
  keywords: 'new homes Henderson NV, townhomes Henderson, Century Communities, Union Village, Dr. Jan Duffy, real estate agent',
  openGraph: {
    title: 'The Townes at Union Village - New Homes in Henderson, NV',
    description: 'New townhomes for sale in Henderson, NV starting from $369,990. Expert guidance from Dr. Jan Duffy, your preferred buyer agent.',
    url: baseUrl,
    siteName: 'The Townes at Union Village',
    locale: 'en_US',
    type: 'website',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'The Townes at Union Village - New Homes in Henderson, NV',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'The Townes at Union Village - New Homes in Henderson, NV',
    description: 'New townhomes for sale in Henderson, NV starting from $369,990.',
    images: ['/og-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
}

const cx = (...classes: any[]) => classes.filter(Boolean).join(' ')

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html
      lang="en"
      className={cx(
        'text-black bg-white dark:text-white dark:bg-black',
        GeistSans.variable,
        GeistMono.variable
      )}
    >
      <body className="antialiased">
        <Navbar />
        {children}
        <Footer />
        <Analytics />
        <SpeedInsights />
      </body>
    </html>
  )
}
