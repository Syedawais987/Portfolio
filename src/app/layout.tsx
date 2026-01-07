import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: {
    default: 'Syed Awais Hussain - Full-Stack Developer',
    template: '%s | Syed Awais Hussain'
  },
  description: 'Full-Stack Developer specializing in MERN Stack, Shopify App Development (Public & Private), and cloud solutions. Expert in Node.js, React, Next.js, Express, PostgreSQL, Supabase, and TypeScript.',
  keywords: ['Full-Stack Developer', 'MERN Stack', 'Shopify App Developer', 'Shopify Public Apps', 'Shopify Private Apps', 'Node.js', 'React', 'Next.js', 'Express.js', 'PostgreSQL', 'Supabase', 'TypeScript', 'GCP'],
  authors: [{ name: 'Syed Awais Hussain' }],
  creator: 'Syed Awais Hussain',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://awaishussain.dev',
    title: 'Syed Awais Hussain - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in MERN Stack, Shopify App Development (Public & Private), and cloud solutions.',
    siteName: 'Syed Awais Hussain Portfolio',
    images: [
      {
        url: '/images/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Syed Awais Hussain - Full-Stack Developer'
      }
    ]
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Syed Awais Hussain - Full-Stack Developer',
    description: 'Full-Stack Developer specializing in MERN Stack, Shopify App Development (Public & Private), and cloud solutions.',
    images: ['/images/og-image.jpg']
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1
    }
  }
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased`}>
        {children}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Person",
              "name": "Syed Awais Hussain",
              "jobTitle": "Full-Stack Developer",
              "description": "Full-Stack Developer specializing in MERN Stack, Shopify App Development (Public & Private), and cloud solutions",
              "url": "https://awaishussain.dev",
              "sameAs": [
                "https://www.linkedin.com/in/syed-awais-hussain-7a957b250/",
                "https://github.com/Syedawais987"
              ],
              "worksFor": {
                "@type": "Organization",
                "name": "MUSCLED Inc"
              },
              "knowsAbout": [
                "Node.js", "Express.js", "React", "Next.js", "PostgreSQL",
                "Supabase", "Shopify App Development", "TypeScript", "GCP"
              ]
            })
          }}
        />
      </body>
    </html>
  )
}