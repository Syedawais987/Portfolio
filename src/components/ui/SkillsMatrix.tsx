'use client'

import { motion } from 'framer-motion'
import { skills } from '@/data/projects'

const SkillsMatrix = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {skills.map((category, categoryIndex) => (
        <motion.div
          key={category.category}
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
          viewport={{ once: true }}
          className="card p-6"
        >
          <h3 className="text-xl font-bold text-slate-900 mb-6 text-center">
            {category.category}
          </h3>
          
          <div className="space-y-4">
            {category.technologies.map((tech, techIndex) => (
              <motion.div
                key={tech.name}
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: categoryIndex * 0.1 + techIndex * 0.05 }}
                viewport={{ once: true }}
                className="relative"
              >
                <div className="flex justify-between items-center mb-2">
                  <span className="font-medium text-slate-900">{tech.name}</span>
                  <div className="flex items-center gap-2">
                    <span className="text-sm text-slate-600">{tech.experience}</span>
                    <span className="text-sm font-semibold text-primary-600">
                      {tech.proficiency}%
                    </span>
                  </div>
                </div>
                
                {/* Progress Bar */}
                <div className="w-full bg-slate-200 rounded-full h-2.5 overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    whileInView={{ width: `${tech.proficiency}%` }}
                    transition={{ duration: 1, delay: categoryIndex * 0.1 + techIndex * 0.05 + 0.3 }}
                    viewport={{ once: true }}
                    className={`h-full rounded-full bg-gradient-to-r ${
                      tech.proficiency >= 90 ? 'from-green-400 to-green-600' :
                      tech.proficiency >= 80 ? 'from-blue-400 to-blue-600' :
                      tech.proficiency >= 70 ? 'from-yellow-400 to-yellow-600' :
                      'from-red-400 to-red-600'
                    }`}
                  />
                </div>
                
                {/* Proficiency Indicator */}
                <div className="mt-1 text-xs text-slate-500">
                  {tech.proficiency >= 90 ? 'Expert' :
                   tech.proficiency >= 80 ? 'Advanced' :
                   tech.proficiency >= 70 ? 'Intermediate' :
                   'Beginner'}
                </div>
              </motion.div>
            ))}
          </div>

          {/* Category Stats */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: categoryIndex * 0.1 + 0.5 }}
            viewport={{ once: true }}
            className="mt-6 pt-4 border-t border-slate-200"
          >
            <div className="flex justify-between text-sm">
              <span className="text-slate-600">
                Average Proficiency:
              </span>
              <span className="font-semibold text-primary-600">
                {Math.round(
                  category.technologies.reduce((sum, tech) => sum + tech.proficiency, 0) / 
                  category.technologies.length
                )}%
              </span>
            </div>
          </motion.div>
        </motion.div>
      ))}
    </div>
  )
}

export default SkillsMatrix