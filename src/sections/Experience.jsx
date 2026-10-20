import { motion } from 'framer-motion'
import { Award, Calendar, MapPin } from 'lucide-react'
import { data } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        {/* Section Header */}
        <div className="section-header">
          <span className="section-kicker">
            <span className="section-kicker-dot" />
            EXPERIENCE
          </span>
          <h2 className="section-title">My professional journey</h2>
        </div>

        {/* Timeline Layout matching Reference Mockup */}
        <div className="space-y-8 mt-10">
          {data.experience.map((item, index) => (
            <motion.div
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.1 }}
              className="timeline-track"
            >
              <div className="timeline-line" />
              <div className="timeline-node" />

              <div className="surface-card p-6 sm:p-8">
                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-5 border-b border-[var(--surface-border)]">
                  <div>
                    <div className="flex items-center gap-2">
                      <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight">
                        {item.company}
                      </h3>
                      {item.badge && (
                        <span className="info-chip inline-flex items-center gap-1">
                          <Award size={12} />
                          {item.badge}
                        </span>
                      )}
                    </div>
                    <p className="text-base font-semibold text-[#6366F1] mt-1">
                      {item.role}
                    </p>
                  </div>

                  <div className="flex flex-wrap md:flex-col md:items-end gap-2 md:gap-1 text-xs font-mono text-[var(--muted-light)]">
                    <span className="inline-flex items-center gap-1.5 font-medium text-slate-600 dark:text-slate-300">
                      <Calendar size={13} className="text-[#6366F1]" />
                      {item.period}
                    </span>
                    <span className="inline-flex items-center gap-1.5 font-medium text-slate-500 dark:text-slate-400">
                      <MapPin size={13} className="text-[#6366F1]" />
                      {item.location} &bull; {item.type}
                    </span>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mt-5">
                  {item.highlights.map((highlight) => (
                    <div key={highlight} className="list-card">
                      <span className="list-dot !bg-[#6366F1]" />
                      <p className="body-copy text-sm leading-relaxed">{highlight}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
