'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Navigation from '@/components/layout/Navigation'
import Footer from '@/components/layout/Footer'
import Timeline from '@/components/ui/Timeline'
import SkillsMatrix from '@/components/ui/SkillsMatrix'
import { ArrowDownTrayIcon, MapPinIcon, CalendarIcon } from '@heroicons/react/24/outline'

export default function AboutPage() {
  const stats = [
    { label: 'Years of Experience', value: '3+', icon: '💼' },
    { label: 'Projects Completed', value: '15+', icon: '🚀' },
    { label: 'Technologies Mastered', value: '20+', icon: '⚡' },
    { label: 'Happy Clients', value: '10+', icon: '😊' }
  ]

  return (
    <main className="min-h-screen bg-slate-50">
      <Navigation />
      
      {/* Hero Section */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-slate-50 to-primary-50">
        <div className="container-max px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-4xl mx-auto"
          >
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6">
              About <span className="text-gradient">Me</span>
            </h1>
            <p className="text-xl text-slate-600 mb-8">
              Passionate Full-Stack Developer with expertise in MEAN & MERN Stack technologies 
              and a track record of delivering scalable solutions.
            </p>
            
            {/* Quick Info */}
            <div className="flex flex-wrap justify-center gap-6 text-slate-600 mb-8">
              <div className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5 text-primary-500" />
                <span>Remote • Pakistan</span>
              </div>
              <div className="flex items-center gap-2">
                <CalendarIcon className="w-5 h-5 text-primary-500" />
                <span>Available for new projects</span>
              </div>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <Link
                href="/resume"
                className="btn-primary inline-flex items-center gap-2"
              >
                <ArrowDownTrayIcon className="w-5 h-5" />
                View Resume
              </Link>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center card p-6"
              >
                <div className="text-4xl mb-3">{stat.icon}</div>
                <div className="text-3xl font-bold text-primary-600 mb-2">
                  {stat.value}
                </div>
                <div className="text-sm text-slate-600">
                  {stat.label}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* About Content */}
      <section className="section-padding">
        <div className="container-max">
          <div className="grid lg:grid-cols-2 gap-12 items-start">
            {/* Personal Story */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl font-bold text-slate-900 mb-6">
                My Journey
              </h2>
              <div className="prose prose-slate max-w-none">
                <p className="text-lg text-slate-600 mb-6">
                  I&apos;m a passionate Full-Stack Developer with over 3 years of experience 
                  building robust web applications and innovative solutions. My journey 
                  began with a curiosity for how things work on the web, which led me 
                  to dive deep into modern technologies.
                </p>
                
                <p className="text-slate-600 mb-6">
                  Currently working at <strong>MUSCLED Inc</strong>, I specialize in the 
                  MEAN stack and have extensive experience with Shopify development. 
                  I&apos;ve had the privilege of working with companies like PinkSurfing and 
                  Syntecx Solution, where I&apos;ve contributed to building scalable applications 
                  that serve thousands of users.
                </p>

                <p className="text-slate-600 mb-6">
                  What drives me is the challenge of solving complex problems with elegant 
                  solutions. Whether it&apos;s integrating payment systems, optimizing database 
                  queries, or creating intuitive user interfaces, I approach each project 
                  with attention to detail and a focus on quality.
                </p>

                <p className="text-slate-600">
                  When I&apos;m not coding, you&apos;ll find me exploring new technologies, 
                  contributing to open-source projects, or sharing knowledge with the 
                  developer community. I believe in continuous learning and staying 
                  updated with the latest industry trends.
                </p>
              </div>
            </motion.div>

            {/* Image/Visual Element */}
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{ once: true }}
              className="relative"
            >
              <div className="card p-8 text-center">
                <div className="w-48 h-48 mx-auto mb-6 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full flex items-center justify-center">
                  <span className="text-8xl">👨‍💻</span>
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-4">
                  &ldquo;Code is like humor. When you have to explain it, it&apos;s bad.&rdquo;
                </h3>
                <p className="text-slate-600">
                  This quote perfectly captures my philosophy of writing clean, 
                  self-documenting code that speaks for itself.
                </p>
              </div>

              {/* Floating Tech Icons */}
              <div className="absolute -top-4 -left-4 w-16 h-16 bg-gradient-to-br from-blue-400 to-blue-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
                JS
              </div>
              <div className="absolute -top-4 -right-4 w-16 h-16 bg-gradient-to-br from-green-400 to-green-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
                Node
              </div>
              <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-red-400 to-red-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
                NG
              </div>
              <div className="absolute -bottom-4 -right-4 w-16 h-16 bg-gradient-to-br from-purple-400 to-purple-600 rounded-lg shadow-lg flex items-center justify-center text-white font-bold">
                TS
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section className="section-padding bg-white">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Technical Skills
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              A comprehensive overview of my technical expertise across different domains. 
              Each skill reflects real-world experience and continuous learning.
            </p>
          </motion.div>

          <SkillsMatrix />
        </div>
      </section>

      {/* Experience Timeline */}
      <section className="section-padding">
        <div className="container-max">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl font-bold text-slate-900 mb-4">
              Professional Experience
            </h2>
            <p className="text-lg text-slate-600 max-w-3xl mx-auto">
              My professional journey through different companies and roles, 
              showcasing growth and diverse project experiences.
            </p>
          </motion.div>

          <Timeline />
        </div>
      </section>

      {/* Call to Action */}
      <section className="section-padding bg-gradient-to-br from-primary-600 to-accent-600 text-white">
        <div className="container-max text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl font-bold mb-6">
              Let&apos;s Work Together
            </h2>
            <p className="text-xl mb-8 max-w-2xl mx-auto opacity-90">
              I&apos;m always interested in new opportunities and exciting projects. 
              Let&apos;s discuss how we can bring your ideas to life.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/contact"
                className="bg-white text-primary-600 px-8 py-3 rounded-lg font-medium hover:bg-slate-50 transition-colors"
              >
                Get In Touch
              </a>
              <Link
                href="/projects"
                className="border border-white/30 text-white px-8 py-3 rounded-lg font-medium hover:bg-white/10 transition-colors"
              >
                View My Work
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      <Footer />
    </main>
  )
}