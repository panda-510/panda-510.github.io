import { motion } from 'framer-motion'
import { Award, Calendar, GraduationCap } from 'lucide-react'
import { data } from '../data'

export default function Education() {
  return (
    <section id="education" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="section-header">
          <span className="section-kicker">
            <span className="section-kicker-dot" />
            EDUCATION &amp; AWARDS
          </span>
          <h2 className="section-title">Education &amp; Recognition</h2>
          <p className="body-copy mt-3 max-w-2xl text-[0.98rem]">
            Academic background and professional recognition.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 mt-8">
          {/* Card 1: Academic Degree */}
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45 }}
            className="surface-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--surface-border)]">
                <div className="flex items-center gap-3">
                  <span className="card-icon-badge">
                    <GraduationCap size={18} />
                  </span>
                  <div>
                    <span className="section-kicker text-xs !mb-0">{data.education.university}</span>
                    <p className="text-xs text-[var(--muted)] font-mono mt-0.5">Degree</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-soft)] border border-[var(--surface-border)] text-xs font-semibold text-[var(--text)]">
                  {data.education.year}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight">
                  {data.education.degree}
                </h3>
                <p className="body-copy text-sm mt-3">
                  {data.education.university} &bull; Graduated in {data.education.year}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-5 border-t border-[var(--surface-border)]">
              <div className="meta-stat-box">
                <span className="text-[0.7rem] uppercase tracking-wider font-mono text-[var(--muted)]">
                  Graduation
                </span>
                <div className="flex items-center gap-1.5 mt-1">
                  <Calendar size={14} className="text-[var(--muted)]" />
                  <span className="text-base font-bold text-[var(--text)]">{data.education.year}</span>
                </div>
              </div>
              <div className="meta-stat-box">
                <span className="text-[0.7rem] uppercase tracking-wider font-mono text-[var(--muted)]">
                  CGPA
                </span>
                <p className="text-base font-bold mt-1 text-[#6366F1]">{data.education.cgpa}</p>
              </div>
            </div>
          </motion.article>

          {/* Card 2: Enterprise Achievement */}
          <motion.article
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.08 }}
            className="surface-card p-6 sm:p-8 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center justify-between pb-4 border-b border-[var(--surface-border)]">
                <div className="flex items-center gap-3">
                  <span className="card-icon-badge">
                    <Award size={18} />
                  </span>
                  <div>
                    <span className="section-kicker text-xs !mb-0">ACHIEVEMENT</span>
                    <p className="text-xs text-[var(--muted)] font-mono mt-0.5">Award</p>
                  </div>
                </div>
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-[var(--bg-soft)] border border-[var(--surface-border)] text-xs font-semibold text-[#6366F1]">
                  {data.achievements[0].year}
                </span>
              </div>

              <div className="mt-6">
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight">
                  {data.achievements[0].title}
                </h3>
                <p className="text-sm font-semibold text-[#6366F1] mt-1">
                  {data.achievements[0].org}
                </p>
                <p className="body-copy text-sm mt-3 leading-relaxed">
                  {data.achievements[0].description}
                </p>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 mt-8 pt-5 border-t border-[var(--surface-border)]">
              <div className="meta-stat-box">
                <span className="text-[0.7rem] uppercase tracking-wider font-mono text-[var(--muted)]">
                  Organization
                </span>
                <p className="text-sm sm:text-base font-bold mt-1 text-[var(--text)] truncate">
                  NTT DATA
                </p>
              </div>
              <div className="meta-stat-box">
                <span className="text-[0.7rem] uppercase tracking-wider font-mono text-[var(--muted)]">
                  Year
                </span>
                <p className="text-base font-bold mt-1 text-[var(--text)]">{data.achievements[0].year}</p>
              </div>
            </div>
          </motion.article>
        </div>
      </div>
    </section>
  )
}
