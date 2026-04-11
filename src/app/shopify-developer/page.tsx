'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Link from 'next/link'

const fadeIn = {
  initial: { opacity: 0, y: 24 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5 },
}

const stagger = {
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
}

const CTAButtons = ({ variant = 'default' }: { variant?: 'default' | 'dark' | 'inline' }) => {
  const isPrimary = variant === 'default' || variant === 'inline'
  return (
    <div className={`flex flex-col sm:flex-row gap-3 ${variant === 'inline' ? 'justify-center' : ''}`}>
      <a
        href="https://wa.me/923106723901?text=Hi%20Awais%2C%20I%27d%20like%20to%20discuss%20a%20Shopify%20project"
        target="_blank"
        rel="noopener noreferrer"
        className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium transition-all duration-200 hover:-translate-y-0.5 ${
          isPrimary
            ? 'bg-slate-900 text-white hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20'
            : 'bg-white text-slate-900 hover:bg-slate-50 hover:shadow-lg'
        }`}
      >
        Book a Free Call
        <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
        </svg>
      </a>
      <a
        href="#projects"
        className={`inline-flex items-center justify-center gap-2 px-7 py-3.5 rounded-xl font-medium transition-all duration-200 ${
          variant === 'dark'
            ? 'border border-white/20 text-white hover:bg-white/10'
            : 'border border-slate-200 text-slate-600 hover:border-slate-300 hover:bg-slate-50'
        }`}
      >
        See Case Studies
      </a>
    </div>
  )
}

export default function ShopifyLandingPage() {
  const [isScrolled, setIsScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 20)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <main className="min-h-screen bg-white">
      {/* Sticky Nav */}
      <nav
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/80 backdrop-blur-xl shadow-[0_1px_0_0_rgba(0,0,0,0.04)]'
            : 'bg-transparent'
        }`}
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16">
            <a href="#hero" className="text-lg font-semibold text-slate-900 tracking-tight">
              Syed Awais<span className="text-primary-600">.</span>
            </a>
            <div className="hidden md:flex items-center gap-8">
              <a href="#services" className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors font-medium">Services</a>
              <a href="#projects" className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors font-medium">Results</a>
              <a href="#process" className="text-[13px] text-slate-500 hover:text-slate-900 transition-colors font-medium">Process</a>
              <a
                href="https://wa.me/923106723901?text=Hi%20Awais%2C%20I%27d%20like%20to%20discuss%20a%20Shopify%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-slate-900 text-white px-5 py-2 rounded-lg text-[13px] font-medium hover:bg-slate-800 transition-all duration-200"
              >
                Book a Call
              </a>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Sticky CTA */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-white/80 backdrop-blur-xl border-t border-slate-200/50 p-3">
        <a
          href="https://wa.me/923106723901?text=Hi%20Awais%2C%20I%27d%20like%20to%20discuss%20a%20Shopify%20project"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center justify-center gap-2 w-full bg-slate-900 text-white py-3.5 rounded-xl font-medium text-sm"
        >
          Book a Free Call
          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
          </svg>
        </a>
      </div>

      {/* ========== HERO ========== */}
      <section
        id="hero"
        className="min-h-screen flex items-center relative overflow-hidden"
      >
        {/* Dot grid pattern */}
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #000 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-primary-50 to-transparent rounded-full blur-3xl opacity-60" />

        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 pt-28 pb-20 relative z-10">
          <div className="max-w-3xl">
            <motion.h1
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.08 }}
              className="text-[2.75rem] sm:text-5xl lg:text-6xl xl:text-[4.25rem] font-bold text-slate-900 leading-[1.08] tracking-tight mb-6"
            >
              I turn broken Shopify workflows into{' '}
              <span className="text-gradient">automated revenue</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.16 }}
              className="text-lg text-slate-500 max-w-xl mb-10 leading-relaxed"
            >
              Custom Shopify apps that replace your duct-taped tools, eliminate manual work, and scale with your business.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.24 }}
            >
              <CTAButtons />
            </motion.div>

            {/* Social proof strip */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="flex items-center gap-8 mt-16 pt-8 border-t border-slate-100"
            >
              {[
                { value: '20+', label: 'Apps shipped' },
                { value: '40%', label: 'Avg cost reduction' },
                { value: '12h/wk', label: 'Avg time saved' },
              ].map((stat) => (
                <div key={stat.label} className="flex items-baseline gap-2">
                  <span className="text-2xl font-bold text-slate-900 tracking-tight">{stat.value}</span>
                  <span className="text-xs text-slate-400 font-medium">{stat.label}</span>
                </div>
              ))}
            </motion.div>
          </div>
        </div>
      </section>

      {/* ========== TECH STRIP ========== */}
      <section className="py-10 border-y border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-3">
            <span className="text-xs text-slate-400 font-medium uppercase tracking-wider mr-4">Built with</span>
            {['Shopify / Polaris', 'Remix.js', 'Node.js', 'React', 'PostgreSQL', 'Prisma', 'Stripe', 'GraphQL', 'TypeScript', 'Redis'].map((tech) => (
              <span key={tech} className="text-sm text-slate-400 font-medium">{tech}</span>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROBLEMS ========== */}
      <section id="problems" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-2xl mb-14">
            <p className="text-xs font-semibold text-red-500 uppercase tracking-wider mb-3">The problem</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              Generic apps cost you more than their subscription
            </h2>
            <p className="text-slate-500">
              The real cost is the time your team wastes working around their limitations.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: '$200/mo on 5 apps that don\'t talk to each other',
                description: 'Duct-taped with Zapier. Still breaks every Friday.',
              },
              {
                title: '12+ hours/week on tasks a script could do',
                description: 'Copy-pasting orders, tagging customers, syncing inventory by hand.',
              },
              {
                title: 'Your ERP/warehouse is a data silo',
                description: 'Shopify doesn\'t integrate. Your team is the middleware.',
              },
              {
                title: 'What worked at 100 orders breaks at 1,000',
                description: 'Slow checkout, laggy admin, logic that can\'t keep up.',
              },
            ].map((problem, index) => (
              <motion.div
                key={problem.title}
                {...stagger}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-6 rounded-2xl border border-slate-100 hover:border-red-100 hover:bg-red-50/20 transition-all duration-300"
              >
                <h3 className="text-[15px] font-semibold text-slate-900 mb-1.5">{problem.title}</h3>
                <p className="text-sm text-slate-500">{problem.description}</p>
              </motion.div>
            ))}
          </div>

          {/* Inline CTA after problems */}
          <motion.div {...fadeIn} className="mt-12 flex flex-col sm:flex-row items-center gap-4 p-8 rounded-2xl bg-slate-50 border border-slate-100">
            <div className="flex-1">
              <p className="font-semibold text-slate-900">Not sure what&apos;s costing you the most?</p>
              <p className="text-sm text-slate-500">I&apos;ll audit your Shopify stack for free and show you where the leaks are.</p>
            </div>
            <a
              href="mailto:syedawaishussain987@gmail.com?subject=Free%20Shopify%20Audit"
              className="flex-shrink-0 inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-xl text-sm font-medium hover:bg-slate-800 transition-all duration-200"
            >
              Get a Free Audit
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== SERVICES ========== */}
      <section id="services" className="py-24 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-2xl mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-3">Services</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              One developer. Full stack. Every layer of Shopify.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-5">
            {[
              {
                title: 'Custom Shopify Apps',
                description: 'Public or private apps built with Remix.js, Polaris, and the latest APIs. From App Store submission to production.',
                features: ['App Store ready', 'OAuth & billing', 'Polaris UI'],
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.25 6.75L22.5 12l-5.25 5.25m-10.5 0L1.5 12l5.25-5.25m7.5-3l-4.5 16.5" />
                  </svg>
                ),
              },
              {
                title: 'Workflow Automation',
                description: 'Replace manual processes with code. Inventory sync, order routing, customer segmentation, bulk ops. You own the code.',
                features: ['Zero monthly fees', 'Custom logic', 'Background jobs'],
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
              {
                title: 'API Integrations',
                description: 'Connect Shopify to Stripe, Twilio, ERPs, warehouses, CRMs. Real-time sync through robust middleware.',
                features: ['REST & GraphQL', 'Stripe billing', 'Real-time sync'],
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M7.5 21L3 16.5m0 0L7.5 12M3 16.5h13.5m0-13.5L21 7.5m0 0L16.5 12M21 7.5H7.5" />
                  </svg>
                ),
              },
              {
                title: 'Shopify SaaS Products',
                description: 'Multi-tenant architecture, usage billing, analytics dashboards. Full SaaS products on the Shopify ecosystem.',
                features: ['Multi-tenant', 'Usage billing', 'Scalable infra'],
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125" />
                  </svg>
                ),
              },
            ].map((service, index) => (
              <motion.div
                key={service.title}
                {...stagger}
                transition={{ duration: 0.4, delay: index * 0.08 }}
                className="p-7 rounded-2xl bg-white border border-slate-100 hover:border-slate-200 hover:shadow-lg hover:shadow-slate-100/80 transition-all duration-300 group"
              >
                <div className="w-10 h-10 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center mb-5 group-hover:bg-slate-900 group-hover:text-white transition-colors duration-300">
                  {service.icon}
                </div>
                <h3 className="text-lg font-semibold text-slate-900 mb-2">{service.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed mb-4">{service.description}</p>
                <div className="flex flex-wrap gap-2">
                  {service.features.map((f) => (
                    <span key={f} className="px-2.5 py-1 bg-slate-50 text-slate-500 text-[11px] font-medium rounded-md border border-slate-100">
                      {f}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== CASE STUDIES ========== */}
      <section id="projects" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-2xl mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-3">Case Studies</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              $650/mo saved. 40% fewer shipping costs. Zero oversells.
            </h2>
            <p className="text-slate-500">
              Real outcomes from real Shopify stores.
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-5">
            {[
              {
                tag: 'Public App',
                title: 'Multi-Channel Inventory Sync',
                problem: 'DTC brand manually updating inventory across Shopify, Amazon, and Etsy. 15+ oversell complaints per week.',
                solution: 'Real-time sync via webhooks + unified dashboard across all channels.',
                results: [
                  '0 oversells post-launch',
                  '12 hrs/week saved',
                  '4.8 stars on App Store',
                ],
                tech: ['Remix.js', 'Prisma', 'PostgreSQL', 'Redis'],
              },
              {
                tag: 'Private App',
                title: 'Smart Order Routing',
                problem: 'Multi-warehouse merchant manually assigning orders. $8K/month in excess freight.',
                solution: 'Auto-routes orders by location, stock levels, and carrier rates.',
                results: [
                  '40% shipping cost reduction',
                  '1.5 day faster delivery',
                  'Fully automated',
                ],
                tech: ['Node.js', 'Shopify Admin API', 'GraphQL'],
              },
              {
                tag: 'SaaS Product',
                title: 'Subscription Box Platform',
                problem: '4 apps for billing, customization, shipping, and CRM. $650/mo, nothing integrated.',
                solution: 'One platform: Stripe billing, customer portal, automated fulfillment.',
                results: [
                  'Replaced $650/mo in apps',
                  '35% retention increase',
                  '60% fewer support tickets',
                ],
                tech: ['Remix.js', 'Stripe', 'PostgreSQL', 'Polaris'],
              },
            ].map((project, index) => (
              <motion.div
                key={project.title}
                {...stagger}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="bg-white rounded-2xl border border-slate-100 overflow-hidden hover:shadow-xl hover:shadow-slate-100/80 transition-all duration-300 flex flex-col"
              >
                <div className="p-7 flex-1 flex flex-col">
                  <span className="inline-block self-start px-2.5 py-1 bg-slate-50 text-slate-500 text-[11px] font-semibold rounded-md uppercase tracking-wider mb-5 border border-slate-100">
                    {project.tag}
                  </span>

                  <h3 className="text-lg font-bold text-slate-900 mb-5">{project.title}</h3>

                  <div className="space-y-3 flex-1 text-sm">
                    <div>
                      <p className="text-[11px] font-semibold text-red-400 uppercase tracking-wider mb-0.5">Problem</p>
                      <p className="text-slate-500 leading-relaxed">{project.problem}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-primary-500 uppercase tracking-wider mb-0.5">Solution</p>
                      <p className="text-slate-500 leading-relaxed">{project.solution}</p>
                    </div>
                    <div>
                      <p className="text-[11px] font-semibold text-green-500 uppercase tracking-wider mb-1.5">Impact</p>
                      <ul className="space-y-1">
                        {project.results.map((r) => (
                          <li key={r} className="flex items-center gap-2 text-slate-700 font-medium">
                            <svg className="w-3.5 h-3.5 text-green-500 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M5 13l4 4L19 7" />
                            </svg>
                            {r}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-1.5 mt-5 pt-5 border-t border-slate-50">
                    {project.tech.map((t) => (
                      <span key={t} className="px-2 py-0.5 text-slate-400 text-[11px] font-medium">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Inline CTA after case studies */}
          <motion.div {...fadeIn} className="mt-12 text-center">
            <p className="text-sm text-slate-500 mb-4">Want results like these for your store?</p>
            <a
              href="https://wa.me/923106723901?text=Hi%20Awais%2C%20I%27d%20like%20to%20discuss%20a%20Shopify%20project"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-slate-900 text-white px-7 py-3.5 rounded-xl font-medium text-sm hover:bg-slate-800 transition-all duration-200 hover:-translate-y-0.5 hover:shadow-lg hover:shadow-slate-900/20"
            >
              Let&apos;s Talk About Your Store
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </a>
          </motion.div>
        </div>
      </section>

      {/* ========== WHY ME (compact) ========== */}
      <section className="py-24 bg-slate-50/50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-2xl mx-auto text-center mb-14">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4">
              One developer who owns the whole problem
            </h2>
            <p className="text-slate-500">No handoffs. No miscommunication. Frontend to database to deployment.</p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-5 max-w-4xl mx-auto">
            {[
              {
                title: 'Full-Stack',
                description: 'React, Node, databases, infra. One person handles everything so nothing falls through the cracks.',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M6.429 9.75L2.25 12l4.179 2.25m0-4.5l5.571 3 5.571-3m-11.142 0L2.25 7.5 12 2.25l9.75 5.25-4.179 2.25m0 0L21.75 12l-4.179 2.25m0 0L12 17.25 6.429 14.25m11.142 0l4.179 2.25L12 21.75l-9.75-5.25 4.179-2.25" />
                  </svg>
                ),
              },
              {
                title: 'Shopify-Native',
                description: 'Shipped public apps, built private tools, integrated with Shopify Plus checkout. Not learning on your dime.',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12.75L11.25 15 15 9.75m-3-7.036A11.959 11.959 0 013.598 6 11.99 11.99 0 003 9.749c0 5.592 3.824 10.29 9 11.623 5.176-1.332 9-6.03 9-11.622 0-1.31-.21-2.571-.598-3.751h-.152c-3.196 0-6.1-1.248-8.25-3.285z" />
                  </svg>
                ),
              },
              {
                title: 'Performance-First',
                description: 'Optimized queries, background jobs, caching, monitoring. Fast and reliable from day one.',
                icon: (
                  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3.75 13.5l10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75z" />
                  </svg>
                ),
              },
            ].map((item, index) => (
              <motion.div
                key={item.title}
                {...stagger}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="text-center p-7 rounded-2xl bg-white border border-slate-100"
              >
                <div className="w-10 h-10 mx-auto mb-4 rounded-xl bg-slate-100 text-slate-600 flex items-center justify-center">
                  {item.icon}
                </div>
                <h3 className="text-base font-semibold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-sm text-slate-500 leading-relaxed">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== PROCESS ========== */}
      <section id="process" className="py-24">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div {...fadeIn} className="max-w-2xl mx-auto text-center mb-14">
            <p className="text-xs font-semibold text-primary-600 uppercase tracking-wider mb-3">Process</p>
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight">
              Idea to production. No surprises.
            </h2>
          </motion.div>

          <div className="grid md:grid-cols-4 gap-5 max-w-4xl mx-auto">
            {[
              { step: '01', title: 'Discovery', description: 'Free call. I learn your business and pain points.' },
              { step: '02', title: 'Scope', description: 'Clear architecture, timeline, and cost. Before any code.' },
              { step: '03', title: 'Build', description: '1-2 week sprints. Regular demos. You steer in real time.' },
              { step: '04', title: 'Ship', description: 'Testing, deployment, docs. Support after launch.' },
            ].map((step, index) => (
              <motion.div
                key={step.step}
                {...stagger}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className="relative text-center"
              >
                {index < 3 && (
                  <div className="hidden md:block absolute top-5 left-[calc(50%+1.5rem)] w-[calc(100%-3rem)] border-t border-dashed border-slate-200" />
                )}
                <div className="w-10 h-10 mx-auto mb-4 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-bold relative z-10">
                  {step.step}
                </div>
                <h3 className="text-sm font-semibold text-slate-900 mb-1">{step.title}</h3>
                <p className="text-xs text-slate-500 leading-relaxed">{step.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ========== FINAL CTA ========== */}
      <section
        id="book-call"
        className="py-28 bg-slate-900 text-white relative overflow-hidden"
      >
        <div className="absolute inset-0 opacity-[0.03]" style={{
          backgroundImage: 'radial-gradient(circle, #fff 1px, transparent 1px)',
          backgroundSize: '24px 24px',
        }} />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-primary-600/15 rounded-full blur-3xl" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div {...fadeIn}>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight tracking-tight mb-5">
              Stop paying for apps that don&apos;t fit.{' '}
              <span className="text-primary-400">Build what you actually need.</span>
            </h2>

            <p className="text-slate-400 mb-10 max-w-xl mx-auto">
              Free 30-minute consultation. I&apos;ll show you exactly where custom development saves you time and money.
            </p>

            <CTAButtons variant="dark" />

            <p className="text-xs text-slate-500 mt-8">
              No commitment. If I&apos;m not the right fit, I&apos;ll tell you.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ========== CONTACT STRIP ========== */}
      <section className="py-16 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-8">
            <div>
              <h3 className="text-lg font-semibold text-slate-900 mb-1">Prefer email or WhatsApp?</h3>
              <p className="text-sm text-slate-500">I typically reply within a few hours.</p>
            </div>
            <div className="flex items-center gap-4">
              <a
                href="mailto:syedawaishussain987@gmail.com"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                </svg>
                Email
              </a>
              <a
                href="https://wa.me/923106723901?text=Hi%20Awais%2C%20I%27d%20like%20to%20discuss%20a%20Shopify%20project"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z" />
                </svg>
                WhatsApp
              </a>
              <a
                href="https://www.linkedin.com/in/syed-awais-hussain-7a957b250/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 hover:border-slate-300 hover:bg-slate-50 transition-all duration-200"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 border-t border-slate-100">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs text-slate-400">
              &copy; {new Date().getFullYear()} Syed Awais Hussain
            </p>
            <div className="flex items-center gap-6">
              <Link href="/" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Portfolio</Link>
              <Link href="/projects" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Projects</Link>
              <Link href="/contact" className="text-xs text-slate-400 hover:text-slate-600 transition-colors">Contact</Link>
            </div>
          </div>
        </div>
      </footer>

      {/* Bottom spacer for mobile sticky CTA */}
      <div className="h-16 md:hidden" />
    </main>
  )
}
