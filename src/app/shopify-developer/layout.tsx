import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Hire a Shopify App Developer | Syed Awais Hussain',
  description:
    'Custom Shopify app development that automates your workflows, eliminates manual tasks, and scales your business. Public apps, private apps, SaaS, and API integrations.',
  keywords: [
    'Shopify App Developer',
    'Custom Shopify Apps',
    'Shopify Private App',
    'Shopify Public App',
    'Shopify SaaS Development',
    'Shopify API Integration',
    'Remix.js Shopify',
    'Hire Shopify Developer',
  ],
  openGraph: {
    title: 'Hire a Shopify App Developer | Syed Awais Hussain',
    description:
      'Custom Shopify app development that automates your workflows, eliminates manual tasks, and scales your business.',
    type: 'website',
  },
}

export default function ShopifyLandingLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return children
}
