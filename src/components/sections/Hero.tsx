'use client'

import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)

  useEffect(() => {
    const roles = [
      'Full-Stack Developer',
      'MEAN Stack Expert',
      'MERN Stack Developer',
      'Shopify Developer',
      'Cloud Solutions Architect'
    ]
    
    const typeSpeed = isDeleting ? 50 : 100
    const currentRole = roles[currentIndex]

    const timer = setTimeout(() => {
      if (!isDeleting && currentCharIndex < currentRole.length) {
        setDisplayText(currentRole.substring(0, currentCharIndex + 1))
        setCurrentCharIndex(currentCharIndex + 1)
      } else if (isDeleting && currentCharIndex > 0) {
        setDisplayText(currentRole.substring(0, currentCharIndex - 1))
        setCurrentCharIndex(currentCharIndex - 1)
      } else if (!isDeleting && currentCharIndex === currentRole.length) {
        setTimeout(() => setIsDeleting(true), 2000)
      } else if (isDeleting && currentCharIndex === 0) {
        setIsDeleting(false)
        setCurrentIndex((currentIndex + 1) % roles.length)
      }
    }, typeSpeed)

    return () => clearTimeout(timer)
  }, [currentCharIndex, isDeleting, currentIndex])

  const technologies = [
    { name: 'Node.js', color: 'from-green-400 to-green-600' },
    { name: 'React', color: 'from-blue-400 to-blue-600' },
    { name: 'Angular', color: 'from-red-400 to-red-600' },
    { name: 'MongoDB', color: 'from-green-500 to-green-700' },
    { name: 'TypeScript', color: 'from-blue-500 to-blue-700' },
    { name: 'AWS', color: 'from-orange-400 to-orange-600' }
  ]

  return (
    <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-slate-50 via-white to-primary-50 relative overflow-hidden">
      {/* Background Decorations */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-gradient-to-br from-primary-100 to-accent-100 rounded-full opacity-70 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-80 h-80 bg-gradient-to-br from-accent-100 to-primary-100 rounded-full opacity-70 blur-3xl"></div>
      </div>

      <div className="container-max section-padding relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mb-6"
            >
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-4">
                Hi, I&apos;m{' '}
                <span className="text-gradient">Syed Awais</span>
              </h1>
              
              <div className="h-16 flex items-center justify-center lg:justify-start">
                <span className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-700">
                  {displayText}
                  <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.8, repeat: Infinity, repeatType: 'reverse' }}
                    className="text-primary-600"
                  >
                    |
                  </motion.span>
                </span>
              </div>
            </motion.div>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.4 }}
              className="text-lg sm:text-xl text-slate-600 mb-8 max-w-2xl mx-auto lg:mx-0"
            >
              Passionate about creating scalable web applications and innovative solutions. 
              Specializing in MEAN Stack, MERN Stack, Shopify development, and cloud technologies with 
              3+ years of experience building robust applications.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-12"
            >
              <Link href="/projects" className="btn-primary text-center">
                View My Projects
              </Link>
              <Link
                href="/resume"
                className="btn-secondary text-center"
              >
                View Resume
              </Link>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.8 }}
              className="text-center lg:text-left"
            >
              <p className="text-sm text-slate-500 mb-4 font-medium">Technologies I work with:</p>
              <div className="flex flex-wrap gap-3 justify-center lg:justify-start">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={tech.name}
                    initial={{ opacity: 0, scale: 0.8 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.5, delay: 1 + index * 0.1 }}
                    whileHover={{ scale: 1.05 }}
                    className={`px-4 py-2 bg-gradient-to-r ${tech.color} text-white text-sm font-medium rounded-full shadow-md hover:shadow-lg transition-all duration-200`}
                  >
                    {tech.name}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </motion.div>

          {/* Profile Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              <motion.div
                animate={{ 
                  y: [0, -10, 0],
                  rotate: [0, 1, -1, 0]
                }}
                transition={{ 
                  duration: 6,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="relative z-10"
              >
                <div className="w-80 h-80 lg:w-96 lg:h-96 relative">
                  <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-500 rounded-full blur-xl opacity-20"></div>
                  <div className="relative w-full h-full bg-gradient-to-br from-primary-100 to-accent-100 rounded-full p-2">
                    <div className="w-full h-full bg-white rounded-full overflow-hidden shadow-2xl">
                      {/* Placeholder for profile image */}
                      <div className="w-full h-full bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
                        <span className="text-6xl text-slate-500">👨‍💻</span>
                      </div>
                      {/* Uncomment when you have a profile image */}
                      {/* <Image
                        src="/images/profile.jpg"
                        alt="Syed Awais Hussain"
                        fill
                        className="object-cover"
                        priority
                      /> */}
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Floating Elements */}
              <motion.div
                animate={{ 
                  x: [0, 10, 0],
                  y: [0, -15, 0]
                }}
                transition={{ 
                  duration: 4,
                  repeat: Infinity,
                  repeatType: 'reverse'
                }}
                className="absolute top-20 -left-10 w-20 h-20 bg-gradient-to-br from-accent-400 to-accent-600 rounded-lg opacity-80 shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-2xl">⚡</span>
              </motion.div>

              <motion.div
                animate={{ 
                  x: [0, -15, 0],
                  y: [0, 10, 0]
                }}
                transition={{ 
                  duration: 5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 1
                }}
                className="absolute bottom-20 -right-10 w-16 h-16 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-80 shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-xl">🚀</span>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.5 }}
          className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="flex flex-col items-center text-slate-400 hover:text-slate-600 transition-colors cursor-pointer"
            onClick={() => {
              const nextSection = document.querySelector('#about')
              nextSection?.scrollIntoView({ behavior: 'smooth' })
            }}
          >
            <span className="text-sm mb-2">Scroll Down</span>
            <ChevronDownIcon className="w-5 h-5" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  )
}

export default Hero