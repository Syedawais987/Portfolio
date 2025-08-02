'use client'

import { motion } from 'framer-motion'
import Link from 'next/link'
import Image from 'next/image'
import { ArrowUpRightIcon, CodeBracketIcon } from '@heroicons/react/24/outline'
import { Project } from '@/data/projects'

interface ProjectCardProps {
  project: Project
  index: number
}

const ProjectCard = ({ project, index }: ProjectCardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      whileHover={{ y: -10 }}
      className="card group overflow-hidden"
    >
      {/* Project Image */}
      <div className="relative h-48 bg-gradient-to-br from-slate-100 to-slate-200 overflow-hidden">
        {/* Placeholder since no actual images */}
        <div className="w-full h-full flex items-center justify-center bg-gradient-to-br from-primary-50 to-accent-50">
          <div className="text-center">
            <CodeBracketIcon className="w-16 h-16 text-primary-400 mx-auto mb-2" />
            <span className="text-primary-600 font-medium">{project.title}</span>
          </div>
        </div>
        
        {/* Uncomment when you have project images */}
        {/* <Image
          src={project.image}
          alt={project.title}
          fill
          className="object-cover group-hover:scale-110 transition-transform duration-500"
        /> */}
        
        {/* Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
        
        {/* Category Badge */}
        <div className="absolute top-4 left-4">
          <span className={`px-3 py-1 text-xs font-medium rounded-full ${
            project.category === 'web' ? 'bg-blue-100 text-blue-800' :
            project.category === 'shopify' ? 'bg-green-100 text-green-800' :
            project.category === 'saas' ? 'bg-purple-100 text-purple-800' :
            'bg-gray-100 text-gray-800'
          }`}>
            {project.category.toUpperCase()}
          </span>
        </div>

        {/* Quick Action Buttons - Only show if there are links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="absolute top-4 right-4 flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            {project.githubUrl && (
              <a
                href={project.githubUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 rounded-full text-slate-700 hover:bg-white transition-colors"
                aria-label="View GitHub repository"
              >
                <CodeBracketIcon className="w-4 h-4" />
              </a>
            )}
            {project.liveUrl && (
              <a
                href={project.liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-white/90 rounded-full text-slate-700 hover:bg-white transition-colors"
                aria-label="View live demo"
              >
                <ArrowUpRightIcon className="w-4 h-4" />
              </a>
            )}
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-6">
        <div className="flex items-start justify-between mb-3">
          <h3 className="text-xl font-semibold text-slate-900 group-hover:text-primary-600 transition-colors">
            {project.title}
          </h3>
          <span className="text-sm text-slate-500 ml-2">
            {project.company}
          </span>
        </div>

        <p className="text-slate-600 mb-4 line-clamp-3 leading-relaxed">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="flex flex-wrap gap-2 mb-6">
          {project.technologies.slice(0, 4).map((tech) => (
            <span key={tech} className="skill-tag text-xs">
              {tech}
            </span>
          ))}
          {project.technologies.length > 4 && (
            <span className="text-xs text-slate-500 px-2 py-1">
              +{project.technologies.length - 4} more
            </span>
          )}
        </div>

        {/* Action Links - Only show if there are external links */}
        {(project.githubUrl || project.liveUrl) && (
          <div className="flex justify-end">
            <div className="flex gap-3">
              {project.githubUrl && (
                <a
                  href={project.githubUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-700 transition-colors"
                  aria-label="GitHub"
                >
                  <CodeBracketIcon className="w-5 h-5" />
                </a>
              )}
              {project.liveUrl && (
                <a
                  href={project.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-500 hover:text-slate-700 transition-colors"
                  aria-label="Live Demo"
                >
                  <ArrowUpRightIcon className="w-5 h-5" />
                </a>
              )}
            </div>
          </div>
        )}

        {/* Progress Indicator */}
        <div className="mt-4 pt-4 border-t border-slate-100">
          <div className="flex items-center justify-between text-xs text-slate-500">
            <span>{project.startDate} - {project.endDate}</span>
            <div className="flex items-center gap-1">
              <div className="w-2 h-2 bg-green-400 rounded-full"></div>
              <span>Completed</span>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  )
}

export default ProjectCard