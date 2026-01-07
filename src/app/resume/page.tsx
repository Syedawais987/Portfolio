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
            Full-Stack Developer
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
            Full-Stack Developer with 3+ years of experience specializing in Shopify App Development (Public & Private) and MERN Stack.
            Built production-ready applications including section marketplaces, quote management systems, conversion tools, and real-time
            speech recognition platforms. Expertise in React, Next.js, Node.js, PostgreSQL, and the complete Shopify ecosystem.
          </p>
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
                <div className="flex flex-wrap gap-2">
                  {category.technologies.map((tech) => (
                    <span key={tech.name} className="text-slate-700 text-sm bg-slate-100 px-3 py-1 rounded-full">
                      {tech.name}
                    </span>
                  ))}
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
                Muscled Sektions - Shopify Public App
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Technologies:</strong> React, Node.js, Shopify API, PostgreSQL, GCS, GitHub Webhooks
              </p>
              <p className="text-slate-700 text-sm">
                Section marketplace with auto-import from GitHub. Features webhook-triggered syncing,
                admin approval workflow, and support for 30+ section categories.
              </p>
            </div>

            <div className="border-l-4 border-accent-400 pl-6">
              <h4 className="font-semibold text-slate-800 mb-1">
                BrightLink Quote Management - Private Shopify App
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Technologies:</strong> Remix.js, TypeScript, PostgreSQL, Prisma, Shopify Polaris, Puppeteer
              </p>
              <p className="text-slate-700 text-sm">
                Complete quote workflow system with customer management, PDF generation,
                email integration, and multi-tier payment processing.
              </p>
            </div>

            <div className="border-l-4 border-accent-400 pl-6">
              <h4 className="font-semibold text-slate-800 mb-1">
                VoiceForge - Speech Recognition Platform
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Technologies:</strong> Python, FastAPI, WebSocket, PostgreSQL, OpenAI Whisper
              </p>
              <p className="text-slate-700 text-sm">
                Real-time speech-to-text platform with sub-500ms latency, speaker diarization
                for 10+ speakers, and language auto-detection.
              </p>
            </div>

            <div className="border-l-4 border-accent-400 pl-6">
              <h4 className="font-semibold text-slate-800 mb-1">
                11Pay - Team Finance Mobile App (Backend)
              </h4>
              <p className="text-sm text-slate-600 mb-2">
                <strong>Technologies:</strong> Supabase, PostgreSQL, TypeScript, React Native/Expo
              </p>
              <p className="text-slate-700 text-sm">
                Backend for sports team finance app with smart auto-payment allocation,
                RLS policies, and real-time sync. Available on iOS App Store.
              </p>
            </div>
          </div>
        </section>

        {/* Education & Additional Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <section>
            <h3 className="text-xl font-semibold text-primary-700 mb-3 border-b border-slate-300 pb-2">
              Education
            </h3>
            <ul className="space-y-2 text-slate-700">
              <li>• <strong>Bachelor&apos;s in Computer Science</strong></li>
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