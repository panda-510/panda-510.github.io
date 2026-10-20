import { motion } from 'framer-motion'
import { Award, Calendar, MapPin } from 'lucide-react'
import { data } from '../data'

export default function Experience() {
  return (
    <section id="experience" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="section-header">
          <p className="section-kicker">Career &amp; Engineering</p>
          <h2 className="section-title">Measurable outcomes in production engineering.</h2>
        </div>

        <div className="grid gap-6">
          {data.experience.map((item, index) => (
            <motion.article
              key={`${item.company}-${item.role}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.08 }}
              className="surface-card p-6 sm:p-8"
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 pb-5 border-b border-[var(--surface-border)]">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="section-kicker text-xs">{item.company}</span>
                    {item.badge && (
                      <span className="info-chip inline-flex items-center gap-1">
                        <Award size={12} />
                        {item.badge}
                      </span>
                    )}
                  </div>
                  <h3 className="text-2xl sm:text-3xl font-bold mt-1 text-[var(--text)] tracking-tight">
                    {item.role}
                  </h3>
                </div>

                <div className="flex flex-wrap md:flex-col md:items-end gap-2 md:gap-1 text-xs font-mono text-[var(--muted-light)]">
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <Calendar size={13} className="text-[var(--accent)]" />
                    {item.period}
                  </span>
                  <span className="inline-flex items-center gap-1.5 font-medium">
                    <MapPin size={13} className="text-[var(--accent)]" />
                    {item.location} &bull; {item.type}
                  </span>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 gap-3 mt-5">
                {item.highlights.map((highlight) => (
                  <div key={highlight} className="list-card">
                    <span className="list-dot" />
                    <p className="body-copy text-sm leading-relaxed">{highlight}</p>
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
