'use client'

import { motion } from 'framer-motion'
import { experience } from '@/data/projects'

const Timeline = () => {
  return (
    <div className="relative">
      {/* Timeline Line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-0.5 bg-gradient-to-b from-primary-400 to-accent-400 transform md:-translate-x-1/2"></div>

      <div className="space-y-12">
        {experience.map((exp, index) => (
          <motion.div
            key={`${exp.company}-${exp.startDate}`}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            viewport={{ once: true }}
            className={`relative flex items-center ${
              index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
            } flex-col md:gap-8`}
          >
            {/* Timeline Node */}
            <div className="absolute left-4 md:left-1/2 w-4 h-4 bg-gradient-to-r from-primary-500 to-accent-500 rounded-full transform -translate-x-1/2 md:translate-x-0 z-10 shadow-lg">
              <div className="absolute inset-1 bg-white rounded-full"></div>
            </div>

            {/* Content Card */}
            <div className={`w-full md:w-5/12 ml-12 md:ml-0 ${
              index % 2 === 0 ? 'md:text-right' : 'md:text-left'
            }`}>
              <motion.div
                whileHover={{ scale: 1.02 }}
                className="card p-6 relative"
              >
                {/* Arrow for desktop */}
                <div className={`hidden md:block absolute top-6 ${
                  index % 2 === 0 
                    ? 'right-0 translate-x-3' 
                    : 'left-0 -translate-x-3'
                } w-0 h-0 border-t-8 border-b-8 border-t-transparent border-b-transparent ${
                  index % 2 === 0 
                    ? 'border-l-8 border-l-white' 
                    : 'border-r-8 border-r-white'
                }`}></div>

                {/* Date Badge */}
                <div className={`inline-flex items-center px-3 py-1 rounded-full text-sm font-medium mb-4 ${
                  exp.endDate === 'Present' 
                    ? 'bg-green-100 text-green-800' 
                    : 'bg-blue-100 text-blue-800'
                }`}>
                  {exp.startDate} - {exp.endDate}
                  {exp.endDate === 'Present' && (
                    <span className="ml-2 w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                  )}
                </div>

                {/* Company & Position */}
                <h3 className="text-xl font-bold text-slate-900 mb-2">
                  {exp.position}
                </h3>
                <h4 className="text-lg font-semibold text-primary-600 mb-2">
                  {exp.company}
                </h4>
                <p className="text-sm text-slate-500 mb-4">
                  {exp.location}
                </p>

                {/* Description */}
                <p className="text-slate-600 mb-4 leading-relaxed">
                  {exp.description}
                </p>

                {/* Achievements */}
                <div className="mb-4">
                  <h5 className="font-semibold text-slate-900 mb-2">Key Achievements:</h5>
                  <ul className="space-y-2">
                    {exp.achievements.map((achievement, i) => (
                      <li key={i} className="flex items-start gap-2 text-sm text-slate-600">
                        <span className="text-primary-500 mt-1">•</span>
                        <span>{achievement}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Technologies */}
                <div>
                  <h5 className="font-semibold text-slate-900 mb-2">Technologies:</h5>
                  <div className="flex flex-wrap gap-2">
                    {exp.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-1 bg-slate-100 text-slate-700 text-xs rounded-md font-medium"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            </div>

            {/* Spacer for opposite side */}
            <div className="hidden md:block w-5/12"></div>
          </motion.div>
        ))}
      </div>
    </div>
  )
}

export default Timeline