'use client'

import { useState, useEffect, useRef } from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import Link from 'next/link'
import { ChevronDownIcon } from '@heroicons/react/24/outline'

const Hero = () => {
  const [displayText, setDisplayText] = useState('')
  const [currentIndex, setCurrentIndex] = useState(0)
  const [currentCharIndex, setCurrentCharIndex] = useState(0)
  const [isDeleting, setIsDeleting] = useState(false)
  const [isMuted, setIsMuted] = useState(true)
  const [isPlaying, setIsPlaying] = useState(false)
  const videoRef = useRef<HTMLVideoElement>(null)

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted
      setIsMuted(!isMuted)
    }
  }

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
        videoRef.current.muted = false
        setIsMuted(false)
      }
      setIsPlaying(!isPlaying)
    }
  }

  useEffect(() => {
    const roles = [
      'Full-Stack Developer',
      // 'MEAN Stack Expert',
      'MERN Stack Developer',
      'Shopify APP Developer',
      // 'Cloud Solutions Architect'
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
    { name: 'Next.js', color: 'from-slate-600 to-slate-800' },
    { name: 'Express', color: 'from-gray-500 to-gray-700' },
    { name: 'PostgreSQL', color: 'from-blue-500 to-blue-700' },
    { name: 'Supabase', color: 'from-emerald-400 to-emerald-600' },
    { name: 'TypeScript', color: 'from-blue-600 to-blue-800' },
    { name: 'Shopify', color: 'from-green-500 to-green-700' }
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
              Building scalable web applications and Shopify apps that drive real business results.
              Specializing in MERN Stack, Shopify App Development (Public & Private), and cloud solutions with
              3+ years of experience delivering production-ready applications.
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

          {/* Intro Video */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Video Container - Phone aspect ratio (9:16) */}
              <div className="relative w-64 sm:w-72 lg:w-80">
                {/* Gradient glow behind video */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary-600 to-accent-500 rounded-[2rem] blur-xl opacity-30 scale-105"></div>

                {/* Video wrapper with phone-like frame */}
                <div className="relative bg-gradient-to-br from-slate-800 to-slate-900 rounded-[2rem] p-2 shadow-2xl">
                  <div className="relative aspect-[9/16] rounded-[1.5rem] overflow-hidden bg-slate-900">
                    {/* Video element */}
                    <video
                      ref={videoRef}
                      className="w-full h-full object-cover"
                      muted
                      loop
                      playsInline
                    >
                      <source src="/videos/intro.mp4" type="video/mp4" />
                      Your browser does not support the video tag.
                    </video>

                    {/* Play/Pause overlay button (center) */}
                    <button
                      onClick={togglePlay}
                      className={`absolute inset-0 flex items-center justify-center transition-opacity duration-300 ${isPlaying ? 'opacity-0 hover:opacity-100' : 'opacity-100'}`}
                      aria-label={isPlaying ? 'Pause video' : 'Play video'}
                    >
                      <div className={`w-16 h-16 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-transform duration-200 hover:scale-110 ${isPlaying ? 'bg-black/30' : ''}`}>
                        {isPlaying ? (
                          <svg className="w-6 h-6 text-slate-700" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"/>
                          </svg>
                        ) : (
                          <svg className="w-6 h-6 text-slate-700 ml-1" fill="currentColor" viewBox="0 0 24 24">
                            <path d="M8 5v14l11-7z"/>
                          </svg>
                        )}
                      </div>
                    </button>

                    {/* Sound toggle button (bottom right) */}
                    <button
                      onClick={(e) => { e.stopPropagation(); toggleMute(); }}
                      className="absolute bottom-4 right-4 w-10 h-10 bg-white/90 hover:bg-white rounded-full flex items-center justify-center shadow-lg transition-all duration-200 hover:scale-110 z-10"
                      aria-label={isMuted ? 'Unmute video' : 'Mute video'}
                    >
                      {isMuted ? (
                        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2" />
                        </svg>
                      ) : (
                        <svg className="w-5 h-5 text-slate-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15.536 8.464a5 5 0 010 7.072m2.828-9.9a9 9 0 010 12.728M5.586 15H4a1 1 0 01-1-1v-4a1 1 0 011-1h1.586l4.707-4.707C10.923 3.663 12 4.109 12 5v14c0 .891-1.077 1.337-1.707.707L5.586 15z" />
                        </svg>
                      )}
                    </button>
                  </div>

                  {/* Phone notch decoration */}
                  <div className="absolute top-4 left-1/2 -translate-x-1/2 w-20 h-6 bg-slate-900 rounded-full"></div>
                </div>
              </div>

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
                className="absolute top-10 -left-6 w-14 h-14 bg-gradient-to-br from-accent-400 to-accent-600 rounded-xl opacity-90 shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-xl">⚡</span>
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
                className="absolute bottom-20 -right-6 w-12 h-12 bg-gradient-to-br from-primary-400 to-primary-600 rounded-full opacity-90 shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-lg">🚀</span>
              </motion.div>

              <motion.div
                animate={{
                  x: [0, 8, 0],
                  y: [0, 12, 0]
                }}
                transition={{
                  duration: 4.5,
                  repeat: Infinity,
                  repeatType: 'reverse',
                  delay: 0.5
                }}
                className="absolute top-1/2 -right-8 w-10 h-10 bg-gradient-to-br from-green-400 to-green-600 rounded-lg opacity-90 shadow-lg flex items-center justify-center"
              >
                <span className="text-white text-sm">💻</span>
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