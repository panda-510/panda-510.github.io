import { motion } from 'framer-motion'
import { Award, GraduationCap } from 'lucide-react'
import { data } from '../data'

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="section-header">
          <p className="section-kicker">Education &amp; Recognition</p>
          <h2 className="section-title">Academic background with a cyber security focus.</h2>
        </div>

        <div className="grid lg:grid-cols-[1.1fr_0.9fr] gap-6">
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="surface-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="location-icon-wrap" style={{ width: '1.6rem', height: '1.6rem' }}>
                  <GraduationCap size={13} />
                </span>
                <p className="section-kicker text-xs !mb-0">{data.education.university}</p>
              </div>

              <h3 className="text-2xl font-bold mt-2 text-[var(--text)] tracking-tight">
                {data.education.degree}
              </h3>
            </div>

            <div className="grid sm:grid-cols-2 gap-3 mt-6">
              <div className="meta-card">
                <p className="muted-text text-xs uppercase tracking-wider font-mono">Graduation</p>
                <p className="text-base font-semibold mt-1 text-[var(--text)]">{data.education.year}</p>
              </div>
              <div className="meta-card">
                <p className="muted-text text-xs uppercase tracking-wider font-mono">CGPA</p>
                <p className="text-base font-semibold mt-1 text-[var(--accent)]">{data.education.cgpa}</p>
              </div>
            </div>
          </motion.article>

          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="surface-card p-6 sm:p-7 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-2">
                <span className="location-icon-wrap" style={{ width: '1.6rem', height: '1.6rem' }}>
                  <Award size={13} />
                </span>
                <p className="section-kicker text-xs !mb-0">Achievement</p>
              </div>

              <h3 className="text-2xl font-bold mt-2 text-[var(--text)] tracking-tight">
                {data.achievements[0].title}
              </h3>
              <p className="accent-text text-sm font-semibold mt-1">{data.achievements[0].org}</p>
              <p className="body-copy text-sm mt-3 leading-relaxed">
                {data.achievements[0].description}
              </p>
            </div>

            <div className="meta-card mt-6">
              <p className="muted-text text-xs uppercase tracking-wider font-mono">Conferred</p>
              <p className="text-base font-semibold mt-1 text-[var(--text)]">{data.achievements[0].year}</p>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
