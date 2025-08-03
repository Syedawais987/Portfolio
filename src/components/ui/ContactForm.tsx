'use client'

import { useState } from 'react'
import { motion } from 'framer-motion'
import { PaperAirplaneIcon, CheckCircleIcon, ExclamationCircleIcon } from '@heroicons/react/24/outline'

interface FormData {
  name: string
  email: string
  subject: string
  message: string
}

interface FormErrors {
  name?: string
  email?: string
  subject?: string
  message?: string
}

const ContactForm = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: ''
  })
  
  const [errors, setErrors] = useState<FormErrors>({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle')

  const validateForm = (): boolean => {
    const newErrors: FormErrors = {}

    // Name validation
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required'
    } else if (formData.name.trim().length < 2) {
      newErrors.name = 'Name must be at least 2 characters'
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required'
    } else if (!emailRegex.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address'
    }

    // Subject validation
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required'
    } else if (formData.subject.trim().length < 5) {
      newErrors.subject = 'Subject must be at least 5 characters'
    }

    // Message validation
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required'
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters'
    }

    setErrors(newErrors)
    return Object.keys(newErrors).length === 0
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData(prev => ({ ...prev, [name]: value }))
    
    // Clear error when user starts typing
    if (errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }))
    }
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault()
    
    if (!validateForm()) {
      return
    }

    setIsSubmitting(true)
    setSubmitStatus('idle')

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      const data = await response.json()

      if (response.ok) {
        setSubmitStatus('success')
        setFormData({ name: '', email: '', subject: '', message: '' })
      } else {
        setSubmitStatus('error')
      }
    } catch (error) {
      console.error('Form submission error:', error)
      setSubmitStatus('error')
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitStatus === 'success') {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        className="card p-8 text-center"
      >
        <CheckCircleIcon className="w-16 h-16 text-green-500 mx-auto mb-4" />
        <h3 className="text-2xl font-bold text-slate-900 mb-4">
          Message Sent Successfully!
        </h3>
        <p className="text-slate-600 mb-6">
          Thank you for reaching out. I&apos;ll get back to you within 24 hours.
        </p>
        <button
          onClick={() => setSubmitStatus('idle')}
          className="btn-primary"
        >
          Send Another Message
        </button>
      </motion.div>
    )
  }

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="card"
    >
      <form onSubmit={handleSubmit} className="p-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
          {/* Name Field */}
          <div>
            <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
              Full Name *
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                errors.name ? 'border-red-300 bg-red-50' : 'border-slate-300'
              }`}
              placeholder="Your full name"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.name}
              </p>
            )}
          </div>

          {/* Email Field */}
          <div>
            <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
              Email Address *
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
                errors.email ? 'border-red-300 bg-red-50' : 'border-slate-300'
              }`}
              placeholder="your.email@example.com"
            />
            {errors.email && (
              <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
                <ExclamationCircleIcon className="w-4 h-4" />
                {errors.email}
              </p>
            )}
          </div>
        </div>

        {/* Subject Field */}
        <div className="mb-6">
          <label htmlFor="subject" className="block text-sm font-medium text-slate-700 mb-2">
            Subject *
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            value={formData.subject}
            onChange={handleChange}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors ${
              errors.subject ? 'border-red-300 bg-red-50' : 'border-slate-300'
            }`}
            placeholder="Project inquiry, collaboration, etc."
          />
          {errors.subject && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <ExclamationCircleIcon className="w-4 h-4" />
              {errors.subject}
            </p>
          )}
        </div>

        {/* Message Field */}
        <div className="mb-6">
          <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
            Message *
          </label>
          <textarea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            rows={5}
            className={`w-full px-4 py-3 border rounded-lg focus:ring-2 focus:ring-primary-500 focus:border-primary-500 transition-colors resize-vertical ${
              errors.message ? 'border-red-300 bg-red-50' : 'border-slate-300'
            }`}
            placeholder="Tell me about your project, requirements, timeline, etc."
          />
          {errors.message && (
            <p className="mt-1 text-sm text-red-600 flex items-center gap-1">
              <ExclamationCircleIcon className="w-4 h-4" />
              {errors.message}
            </p>
          )}
          <p className="mt-2 text-sm text-slate-500">
            {formData.message.length}/500 characters
          </p>
        </div>

        {/* Submit Button */}
        <motion.button
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: isSubmitting ? 1 : 1.02 }}
          whileTap={{ scale: isSubmitting ? 1 : 0.98 }}
          className={`w-full flex items-center justify-center gap-2 px-8 py-4 rounded-lg font-medium transition-all duration-200 ${
            isSubmitting
              ? 'bg-slate-400 text-white cursor-not-allowed'
              : 'bg-primary-600 text-white hover:bg-primary-700 hover:shadow-lg'
          }`}
        >
          {isSubmitting ? (
            <>
              <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
              Sending Message...
            </>
          ) : (
            <>
              <PaperAirplaneIcon className="w-5 h-5" />
              Send Message
            </>
          )}
        </motion.button>

        {submitStatus === 'error' && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            className="mt-4 p-4 bg-red-50 border border-red-200 rounded-lg"
          >
            <div className="flex items-center gap-2 text-red-700">
              <ExclamationCircleIcon className="w-5 h-5" />
              <span className="font-medium">Failed to send message</span>
            </div>
            <p className="mt-1 text-sm text-red-600">
              Please try again or contact me directly at syedawaishussain987@gmail.com
            </p>
          </motion.div>
        )}

        {/* Privacy Note */}
        <p className="mt-4 text-xs text-slate-500 text-center">
          Your information is safe with me. I&apos;ll only use it to respond to your inquiry.
        </p>
      </form>
    </motion.div>
  )
}

export default ContactForm