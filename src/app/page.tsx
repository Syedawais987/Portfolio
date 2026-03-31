'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Hero from '@/components/sections/Hero'
import ProjectCard from '@/components/ui/ProjectCard'
import SkillsMatrix from '@/components/ui/SkillsMatrix'
import { projects } from '@/data/projects'
import { ArrowRightIcon } from '@heroicons/react/24/outline'

export default function Home() {
  const featuredProjects = projects.slice(0, 3)

  return (
    <main className="min-h-screen">
      <Navigation />
      <Hero />
      
      {/* About Section */}
      <section id="about" className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              About <span className="text-gradient">Me</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto mb-8">
              Full-Stack Developer with 3+ years of experience building Shopify apps and web applications.
              From public app marketplaces to real-time speech recognition platforms, I deliver
              production-ready solutions using React, Node.js, and modern cloud technologies.
            </p>
            <Link 
              href="/about" 
              className="btn-primary inline-flex items-center gap-2"
            >
              Learn More About Me
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Featured Projects */}
      <section id="projects" className="section-padding bg-slate-50">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Featured <span className="text-gradient">Projects</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              Real projects I&apos;ve built - from Shopify public apps to speech recognition platforms.
              Each project represents a real business problem solved with modern technologies.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
            {featuredProjects.map((project, index) => (
              <ProjectCard key={project.id} project={project} index={index} />
            ))}
          </div>

          <div className="text-center">
            <Link 
              href="/projects" 
              className="btn-primary inline-flex items-center gap-2"
            >
              View All Projects
              <ArrowRightIcon className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="skills" className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
              Technical <span className="text-gradient">Skills</span>
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              From Shopify&apos;s ecosystem to backend APIs and cloud infrastructure -
              the technologies I use daily to build production applications.
            </p>
          </motion.div>

          <SkillsMatrix />
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let&apos;s Build Something Amazing Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              Looking for a developer for your Shopify app, web application, or backend system?
              Let&apos;s discuss how I can help bring your ideas to production.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}