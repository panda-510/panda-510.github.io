import { motion } from 'framer-motion'
import { Cpu } from 'lucide-react'
import { data } from '../data'

const coreGroups = [
  ['Languages', 'languages'],
  ['Frontend & Mobile', 'frontend'],
  ['Backend & APIs', 'backend'],
  ['Databases & Vector Stores', 'databases'],
]

export default function Skills() {
  return (
    <section id="skills" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <div className="section-header">
          <p className="section-kicker">Developer Tooling &amp; Stack</p>
          <h2 className="section-title">Technical capabilities across the full stack.</h2>
        </div>

        {/* Featured: Generative AI & Machine Learning */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="surface-card p-6 sm:p-7 mb-6 relative overflow-hidden"
        >
          <div className="flex items-center gap-2 mb-3">
            <span className="location-icon-wrap" style={{ width: '1.6rem', height: '1.6rem' }}>
              <Cpu size={14} />
            </span>
            <p className="section-kicker !mb-0">Generative AI &amp; Machine Learning</p>
          </div>
          <div className="flex flex-wrap gap-2 mt-4">
            {data.skills.genai.map((skill) => (
              <span key={skill} className="tag-chip skill-chip font-medium">
                {skill}
              </span>
            ))}
          </div>
        </motion.div>

        {/* 4-Col Grid for Core Stack */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {coreGroups.map(([title, key], index) => (
            <motion.div
              key={key}
              initial={{ opacity: 0, y: 18 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.45, delay: index * 0.06 }}
              className="surface-card p-5 flex flex-col"
            >
              <p className="section-kicker text-xs">{title}</p>
              <div className="flex flex-wrap gap-2 mt-4">
                {data.skills[key].map((skill) => (
                  <span key={skill} className="tag-chip skill-chip text-xs">
                    {skill}
                  </span>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Practices + Soft Skills */}
        <div className="grid sm:grid-cols-2 gap-5 mt-5">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.18 }}
            className="surface-card p-5"
          >
            <p className="section-kicker text-xs">Tools &amp; Practices</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {data.skills.tools.map((tool) => (
                <span key={tool} className="tag-chip text-xs">{tool}</span>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.45, delay: 0.22 }}
            className="surface-card p-5"
          >
            <p className="section-kicker text-xs">Collaboration &amp; Leadership</p>
            <div className="flex flex-wrap gap-2 mt-4">
              {data.skills.softSkills.map((skill) => (
                <span key={skill} className="tag-chip text-xs">{skill}</span>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
