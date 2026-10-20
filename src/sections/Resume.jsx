import { motion } from 'framer-motion'
import {
  CheckCircle2,
  Download,
  ExternalLink,
  FileText,
} from 'lucide-react'
import { data } from '../data'

const highlights = [
  'Software Engineer at NTT DATA Payment Services (Nov 2024 – Present)',
  'B.E. in Cyber Security from Mumbai University (CGPA 8.5/10)',
  'Best Rookie Award (2024) at NTT DATA Payment Services',
  'Built 3 payment SDKs (Node.js, Flutter, Go) and 3 GenAI/internal platforms',
]

export default function Resume() {
  return (
    <section id="resume" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="surface-card p-6 sm:p-9 lg:p-10 relative overflow-hidden"
        >
          <div className="grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">
            {/* Left Column: Summary & Key Highlights */}
            <div className="lg:col-span-7">
              <span className="section-kicker">
                <span className="section-kicker-dot" />
                RESUME
              </span>
              <h2 className="section-title text-2xl sm:text-3xl lg:text-4xl">
                Curriculum Vitae
              </h2>
              <p className="body-copy mt-3 text-sm sm:text-base leading-relaxed">
                Download my resume for an overview of my experience, projects, and technical stack at NTT DATA Payment Services.
              </p>

              <div className="mt-6 space-y-3">
                {highlights.map((item) => (
                  <div key={item} className="flex items-start gap-3">
                    <span className="w-5 h-5 rounded-full bg-[rgba(99,102,241,0.1)] flex items-center justify-center shrink-0 mt-0.5">
                      <CheckCircle2 size={13} className="text-[#6366F1]" />
                    </span>
                    <span className="text-xs sm:text-sm text-[var(--text)] font-medium leading-relaxed">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: PDF Card */}
            <div className="lg:col-span-5">
              <div className="doc-preview-card p-6 bg-[var(--bg-soft)] border border-[var(--surface-border)] shadow-sm">
                <div className="flex items-center gap-3">
                  <div className="w-11 h-11 rounded-xl bg-red-500/10 border border-red-500/20 text-red-500 flex items-center justify-center shrink-0">
                    <FileText size={22} />
                  </div>
                  <div>
                    <p className="text-sm sm:text-base font-bold text-[var(--text)] leading-tight">
                      Aditya_Panda_Resume.pdf
                    </p>
                    <p className="text-xs text-[var(--muted)] font-mono mt-0.5">
                      PDF Document &bull; Updated
                    </p>
                  </div>
                </div>

                <div className="grid sm:grid-cols-2 gap-3 mt-6">
                  <a
                    href={data.personal.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="button-outline text-xs sm:text-sm !py-2.5 !px-4 justify-center"
                  >
                    <ExternalLink size={14} />
                    Preview
                  </a>
                  <a
                    href={data.personal.resume}
                    download="Aditya_Panda_Resume.pdf"
                    className="button-primary text-xs sm:text-sm !py-2.5 !px-4 justify-center"
                  >
                    <Download size={14} />
                    Download
                  </a>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
