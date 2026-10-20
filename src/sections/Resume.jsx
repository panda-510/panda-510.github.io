import { motion } from 'framer-motion'
import { Download, ExternalLink, FileText } from 'lucide-react'
import { data } from '../data'

export default function Resume() {
  return (
    <section id="resume" className="section-shell">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="surface-card resume-panel p-6 sm:p-9"
        >
          <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between gap-6">
            <div className="max-w-2xl">
              <p className="section-kicker">Curriculum Vitae</p>
              <h2 className="section-title">Verified credentials and engineering track record.</h2>
              <p className="body-copy mt-4 text-[1rem]">
                Detailed breakdown of payment gateway SDK development, Generative AI application engineering, and enterprise client impact.
              </p>
            </div>

            <div className="surface-subcard resume-download-card p-5 sm:p-6 shadow-sm">
              <div className="resume-file-row">
                <div className="resume-file-icon">
                  <FileText size={20} />
                </div>
                <div>
                  <p className="font-bold text-sm sm:text-base text-[var(--text)]">Aditya_Panda_Resume.pdf</p>
                  <p className="muted-text text-xs font-mono mt-0.5">Software Engineer &bull; Verified</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mt-5">
                <a
                  href={data.personal.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="button-outline text-sm"
                >
                  <ExternalLink size={14} />
                  Preview
                </a>
                <a
                  href={data.personal.resume}
                  download="Aditya_Panda_Resume.pdf"
                  className="button-primary text-sm"
                >
                  <Download size={14} />
                  Download PDF
                </a>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  )
}
