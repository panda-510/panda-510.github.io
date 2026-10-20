import { motion } from 'framer-motion'
import { ArrowUpRight } from 'lucide-react'
import { data } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="section-header">
          <p className="section-kicker">Product Architecture</p>
          <h2 className="section-title">Engineered for production scale and automation.</h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {data.projects.map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="surface-card p-6 sm:p-7 flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div>
                    <span className="section-kicker text-xs">{project.category}</span>
                    <h3 className="text-2xl font-bold mt-1 text-[var(--text)] tracking-tight">
                      {project.name}
                    </h3>
                    <p className="text-xs font-mono text-[var(--muted-light)] mt-1">
                      {project.organization} &bull; {project.period}
                    </p>
                  </div>
                  {project.status && (
                    <span className="info-chip">{project.status}</span>
                  )}
                </div>

                <p className="body-copy mt-4 text-[0.98rem] leading-relaxed">
                  {project.description}
                </p>

                <div className="flex flex-wrap gap-1.5 mt-5">
                  {project.stack.map((tech) => (
                    <span key={tech} className="tag-chip text-xs">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="grid gap-2 mt-6 pt-5 border-t border-[var(--surface-border)]">
                {(project.bullets || project.impact || []).map((bullet) => (
                  <div key={bullet} className="list-card compact">
                    <span className="list-dot" />
                    <p className="body-copy text-sm leading-normal">{bullet}</p>
                  </div>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
