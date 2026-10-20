import { motion } from 'framer-motion'
import {
  Code2,
  Database,
  Server,
  Smartphone,
  Sparkles,
  Users,
  Wrench,
} from 'lucide-react'
import { data } from '../data'

const coreCategories = [
  {
    title: 'Languages',
    key: 'languages',
    icon: Code2,
  },
  {
    title: 'Frontend & Mobile',
    key: 'frontend',
    icon: Smartphone,
  },
  {
    title: 'Backend & APIs',
    key: 'backend',
    icon: Server,
  },
  {
    title: 'Databases & Storage',
    key: 'databases',
    icon: Database,
  },
]

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="section-header">
          <span className="section-kicker">
            <span className="section-kicker-dot" />
            SKILLS &amp; STACK
          </span>
          <h2 className="section-title">Technical capabilities</h2>
          <p className="body-copy mt-3 max-w-2xl text-[0.98rem]">
            Languages, frameworks, and tools from my production experience.
          </p>
        </div>

        {/* Featured: Generative AI & Machine Learning */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="surface-card p-6 sm:p-8 mt-8 relative overflow-hidden"
        >
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pb-5 border-b border-[var(--surface-border)]">
            <div className="flex items-center gap-3">
              <span className="card-icon-badge">
                <Sparkles size={18} />
              </span>
              <div>
                <span className="section-kicker text-xs !mb-0 text-[#6366F1]">
                  CORE SPECIALIZATION
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-[var(--text)] tracking-tight mt-0.5">
                  Generative AI &amp; Machine Learning
                </h3>
              </div>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--bg-soft)] border border-[var(--surface-border)] text-xs font-semibold text-[var(--text)] self-start sm:self-auto">
              <span className="w-2 h-2 rounded-full bg-[#6366F1]" />
              LLMs &amp; RAG Pipelines
            </div>
          </div>

          <div className="flex flex-wrap gap-2.5 mt-6">
            {data.skills.genai.map((skill) => (
              <span key={skill} className="skill-pill skill-pill-featured">
                <span className="skill-pill-dot" />
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 4-Column Grid: Core Tech Stack */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 mt-6">
          {coreCategories.map(({ title, key, icon: Icon }, index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="surface-card p-5 sm:p-6 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="card-icon-badge" style={{ width: '2rem', height: '2rem' }}>
                    <Icon size={14} />
                  </span>
                  <h4 className="text-sm font-bold text-[var(--text)] leading-tight">{title}</h4>
                </div>

                <div className="flex flex-wrap gap-2 mt-4">
                  {data.skills[key].map((skill) => (
                    <span key={skill} className="skill-pill">
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* 2-Column Grid: Tools & Soft Skills */}
        <div className="grid sm:grid-cols-2 gap-5 mt-6">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="surface-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="card-icon-badge" style={{ width: '2rem', height: '2rem' }}>
                <Wrench size={15} />
              </span>
              <h4 className="text-base font-bold text-[var(--text)]">Tools &amp; Practices</h4>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {data.skills.tools.map((tool) => (
                <span key={tool} className="skill-pill">
                  {tool}
                </span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="surface-card p-6"
          >
            <div className="flex items-center gap-3 mb-4">
              <span className="card-icon-badge" style={{ width: '2rem', height: '2rem' }}>
                <Users size={15} />
              </span>
              <h4 className="text-base font-bold text-[var(--text)]">Soft Skills</h4>
            </div>

            <div className="flex flex-wrap gap-2 mt-4">
              {data.skills.softSkills.map((skill) => (
                <span key={skill} className="skill-pill">
                  {skill}
                </span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
