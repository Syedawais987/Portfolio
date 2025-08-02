'use client'

import { useEffect } from 'react'
import { experience, skills } from '@/data/projects'

export default function ResumePage() {
  useEffect(() => {
    // Set document title for printing
    document.title = 'Syed Awais Hussain - Resume'
  }, [])

  const handlePrint = () => {
    window.print()
  }

  return (
    <div className="min-h-screen bg-white">
      {/* Print Button - hidden in print */}
      <div className="print:hidden fixed top-4 right-4 z-50">
        <button
          onClick={handlePrint}
          className="bg-primary-600 text-white px-4 py-2 rounded-lg shadow-lg hover:bg-primary-700 transition-colors"
        >
          Print / Save as PDF
        </button>
      </div>

      {/* Resume Content */}
      <div className="max-w-4xl mx-auto p-8 print:p-6">
        {/* Header */}
        <header className="text-center mb-8 pb-6 border-b-2 border-primary-600">
          <h1 className="text-4xl font-bold text-slate-900 mb-2">
            Syed Awais Hussain
          </h1>
          <h2 className="text-xl text-slate-600 mb-4">
            Senior Full-Stack Developer
          </h2>
          <div className="flex flex-wrap justify-center gap-4 text-sm text-slate-600">
            <span>📧 syedawaishussain987@gmail.com</span>
            <span>📱 +92 310 6723901</span>
            <span>💼 LinkedIn: syed-awais-hussain-7a957b250</span>
            <span>💻 GitHub: Syedawais987</span>
            <span>🎮 Discord: syedawais0337</span>
          </div>
        </header>

        {/* Professional Summary */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-700 mb-4 border-b border-slate-300 pb-2">
            Professional Summary
          </h3>
          <p className="text-slate-700 leading-relaxed">
            Passionate Full-Stack Developer with 3+ years of experience specializing in MEAN & MERN Stack technologies. 
            Expert in building scalable web applications, SaaS platforms, and AI-powered solutions. Proven track record 
            of delivering high-quality projects for e-commerce, inventory management, and customer service platforms.
          </p>
        </section>

        {/* Technical Skills */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-700 mb-4 border-b border-slate-300 pb-2">
            Technical Skills
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {skills.map((category) => (
              <div key={category.category}>
                <h4 className="font-semibold text-slate-800 mb-3">
                  {category.category}
                </h4>
                <div className="space-y-1">
                  {category.technologies.map((tech) => (
                    <div key={tech.name} className="flex justify-between items-center">
                      <span className="text-slate-700">{tech.name}</span>
                      <div className="flex items-center gap-2">
                        <span className="text-xs text-slate-500">{tech.experience}</span>
                        <span className="text-sm font-medium text-primary-600">
                          {tech.proficiency}%
                        </span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Professional Experience */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-700 mb-4 border-b border-slate-300 pb-2">
            Professional Experience
          </h3>
          <div className="space-y-6">
            {experience.map((exp) => (
              <div key={`${exp.company}-${exp.startDate}`} className="border-l-4 border-accent-400 pl-6">
                <div className="mb-2">
                  <h4 className="text-lg font-semibold text-slate-800">
                    {exp.position}
                  </h4>
                  <div className="text-primary-600 font-medium">
                    {exp.company} • {exp.location}
                  </div>
                  <div className="text-slate-500 text-sm">
                    {exp.startDate} - {exp.endDate}
                  </div>
                </div>
                <p className="text-slate-700 mb-3 leading-relaxed">
                  {exp.description}
                </p>
                <ul className="list-disc list-inside space-y-1 text-slate-700">
                  {exp.achievements.map((achievement, index) => (
                    <li key={index} className="text-sm">
                      {achievement}
                    </li>
                  ))}
                </ul>
                <div className="mt-3">
                  <span className="text-xs font-medium text-slate-600">Technologies: </span>
                  <span className="text-xs text-slate-600">
                    {exp.technologies.join(', ')}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Key Projects */}
        <section className="mb-8">
          <h3 className="text-2xl font-semibold text-primary-700 mb-4 border-b border-slate-300 pb-2">
            Key Projects
          </h3>
          <div className="space-y-4">
            <div className="border-l-4 border-accent-400 pl-6">
              <h4 className="font-semibold text-slate-800 mb-1">
                E-commerce SaaS Platform
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Technologies:</strong> React, Node.js, MongoDB, Mongoose, Redis, Socket.io, AWS
              </p>
              <p className="text-slate-700 text-sm">
                Full-featured SaaS platform for multi-vendor e-commerce with real-time analytics, 
                AI-powered recommendations, and automated inventory management. Serves 500+ businesses.
              </p>
            </div>

            <div className="border-l-4 border-accent-400 pl-6">
              <h4 className="font-semibold text-slate-800 mb-1">
                Smart Inventory Management System
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Technologies:</strong> Angular, Node.js, MongoDB, Mongoose, TensorFlow.js
              </p>
              <p className="text-slate-700 text-sm">
                AI-powered inventory system with predictive analytics, automated reordering, 
                and real-time tracking. Features machine learning for demand forecasting.
              </p>
            </div>

            <div className="border-l-4 border-accent-400 pl-6">
              <h4 className="font-semibold text-slate-800 mb-1">
                Advanced Shopify App Suite
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Technologies:</strong> React, Node.js, Shopify API, GraphQL, MongoDB
              </p>
              <p className="text-slate-700 text-sm">
                Comprehensive Shopify app ecosystem with theme customization, analytics, 
                marketing automation. Over 10,000+ installations.
              </p>
            </div>

            <div className="border-l-4 border-accent-400 pl-6">
              <h4 className="font-semibold text-slate-800 mb-1">
                AI-Powered Customer Service Platform
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Technologies:</strong> React, Node.js, MongoDB, OpenAI API, Socket.io
              </p>
              <p className="text-slate-700 text-sm">
                Intelligent customer service platform with AI chatbots, ticket management, 
                and real-time support. Reduced support costs by 40%.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <h3 className="text-xl font-semibold text-primary-700 mb-3 border-b border-slate-300 pb-2">
              Education & Certifications
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>Bachelor&apos;s in Computer Science</strong></li>
              <li>• <strong>AWS Certified Developer</strong></li>
              <li>• <strong>MongoDB Certified Developer</strong></li>
              <li>• <strong>Shopify Partner Certification</strong></li>
            </ul>
          </section>

          <section>
            <h3 className="text-xl font-semibold text-primary-700 mb-3 border-b border-slate-300 pb-2">
              Languages
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>English:</strong> Fluent</li>
              <li>• <strong>Urdu:</strong> Native</li>
            </ul>
          </section>
        </div>
      </div>

      {/* Print Styles */}
      <style jsx global>{`
        @media print {
          body {
            margin: 0;
            padding: 0;
            background: white !important;
          }
          
          .print\\:hidden {
            display: none !important;
          }
          
          .print\\:p-6 {
            padding: 1.5rem !important;
          }
          
          * {
            -webkit-print-color-adjust: exact !important;
            color-adjust: exact !important;
          }
          
          h1 {
            font-size: 2rem !important;
          }
          
          h2 {
            font-size: 1.25rem !important;
          }
          
          h3 {
            font-size: 1.125rem !important;
            page-break-after: avoid;
          }
          
          .border-l-4 {
            page-break-inside: avoid;
          }
          
          @page {
            margin: 0.5in;
          }
        }
      `}</style>
    </div>
  )
}