import { motion } from 'framer-motion'
import { ArrowUpRight, CheckCircle2 } from 'lucide-react'
import { data } from '../data'

export default function Projects() {
  return (
    <section id="projects" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">
            <span className="section-kicker-dot" />
            FEATURED WORK
          </span>
          <h2 className="section-title">
            Projects &amp; <span className="hero-accent-text">Platforms</span>
          </h2>
          <p className="body-copy mt-3 max-w-2xl text-[0.98rem]">
            Production applications, payment SDKs, and internal platforms built at NTT DATA and through freelance engineering.
          </p>
        </div>

        {/* 3 Featured Projects */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8">
          {data.projects.slice(0, 3).map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="surface-card p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--surface-border)]">
                  <span className="section-kicker text-xs !mb-0">{project.category}</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--bg-soft)] border border-[var(--surface-border)] text-[var(--text)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.status}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[var(--text)] tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)] font-mono mt-1">
                    {project.organization} &bull; {project.period}
                  </p>
                  <p className="body-copy text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.bullets && project.bullets.length > 0 && (
                  <div className="mt-4 p-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--surface-border)] text-xs text-[var(--muted)] leading-relaxed flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#6366F1] shrink-0 mt-0.5" />
                    <span>{project.bullets[project.bullets.length - 1]}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-[var(--surface-border)]">
                {project.stack.map((tech) => (
                  <span key={tech} className="skill-pill !text-xs !py-1 !px-2.5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>

        {/* 2 Additional Projects */}
        <div className="grid md:grid-cols-2 gap-6 mt-6">
          {data.projects.slice(3).map((project, index) => (
            <motion.article
              key={project.name}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: 0.2 + index * 0.08 }}
              className="surface-card p-6 sm:p-7 flex flex-col justify-between hover:-translate-y-1 transition-all duration-200"
            >
              <div>
                <div className="flex items-center justify-between pb-3 border-b border-[var(--surface-border)]">
                  <span className="section-kicker text-xs !mb-0">{project.category}</span>
                  <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[var(--bg-soft)] border border-[var(--surface-border)] text-[var(--text)]">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
                    {project.status}
                  </span>
                </div>

                <div className="mt-4">
                  <h3 className="text-xl font-bold text-[var(--text)] tracking-tight">
                    {project.name}
                  </h3>
                  <p className="text-xs text-[var(--muted)] font-mono mt-1">
                    {project.organization} &bull; {project.period}
                  </p>
                  <p className="body-copy text-sm mt-3 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {project.bullets && project.bullets.length > 0 && (
                  <div className="mt-4 p-3 rounded-xl bg-[var(--bg-soft)] border border-[var(--surface-border)] text-xs text-[var(--muted)] leading-relaxed flex items-start gap-2">
                    <CheckCircle2 size={15} className="text-[#6366F1] shrink-0 mt-0.5" />
                    <span>{project.bullets[project.bullets.length - 1]}</span>
                  </div>
                )}
              </div>

              <div className="flex flex-wrap gap-1.5 mt-6 pt-4 border-t border-[var(--surface-border)]">
                {project.stack.map((tech) => (
                  <span key={tech} className="skill-pill !text-xs !py-1 !px-2.5">
                    {tech}
                  </span>
                ))}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  )
}
