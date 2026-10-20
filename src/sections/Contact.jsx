import { useState } from 'react'
import { motion } from 'framer-motion'
import { Check, Copy, ExternalLink, Github, Linkedin, Mail, Phone } from 'lucide-react'
import { data } from '../data'

const links = [
  {
    label: 'Email',
    value: data.personal.email,
    display: data.personal.email,
    href: `mailto:${data.personal.email}`,
    icon: Mail,
  },
  {
    label: 'LinkedIn',
    value: data.personal.linkedin,
    display: data.personal.linkedinDisplay,
    href: data.personal.linkedin,
    icon: Linkedin,
  },
  {
    label: 'GitHub',
    value: data.personal.github,
    display: data.personal.githubDisplay,
    href: data.personal.github,
    icon: Github,
  },
  {
    label: 'Phone',
    value: data.personal.phone,
    display: data.personal.phone,
    href: `tel:${data.personal.phone.replace(/[^+\d]/g, '')}`,
    icon: Phone,
  },
]

export default function Contact() {
  const [copied, setCopied] = useState('')

  const handleCopy = async (label, value) => {
    try {
      await navigator.clipboard.writeText(value)
      setCopied(label)
      window.setTimeout(() => setCopied(''), 1800)
    } catch {
      setCopied('')
    }
  }

  return (
    <section id="contact" className="section-shell pb-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.45 }}
          className="surface-card p-6 sm:p-9"
        >
          <span className="section-kicker">
            <span className="section-kicker-dot" />
            GET IN TOUCH
          </span>
          <h2 className="section-title max-w-2xl">
            Let's build something impactful together.
          </h2>
          <p className="body-copy mt-4 max-w-2xl text-[1rem]">
            Feel free to reach out for opportunities, collaborations, or questions. Based in {data.personal.location}.
          </p>

          <div className="grid sm:grid-cols-2 xl:grid-cols-4 gap-4 mt-8">
            {links.map((link, index) => {
              const Icon = link.icon
              const copiedThis = copied === link.label

              return (
                <motion.div
                  key={link.label}
                  initial={{ opacity: 0, y: 16 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: index * 0.05 }}
                  className="surface-subcard p-4 hover:-translate-y-1 transition-all duration-200"
                >
                  <div className="flex flex-col">
                    <div className="flex items-center justify-between">
                      <div className="contact-icon">
                        <Icon size={16} />
                      </div>
                      <button
                        type="button"
                        onClick={() => handleCopy(link.label, link.href.startsWith('http') ? link.href : link.value)}
                        className="copy-mini-button"
                        aria-label={`Copy ${link.label}`}
                        title={`Copy ${link.label}`}
                      >
                        {copiedThis ? <Check size={13} className="text-[#6366F1]" /> : <Copy size={13} />}
                      </button>
                    </div>

                    <a
                      href={link.href}
                      target={link.href.startsWith('http') ? '_blank' : undefined}
                      rel={link.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="min-w-0 block mt-4 group"
                    >
                      <div className="flex items-center justify-between">
                        <p className="muted-text text-xs uppercase tracking-wider font-mono font-semibold">{link.label}</p>
                        {link.href.startsWith('http') && (
                          <ExternalLink size={12} className="text-[var(--muted-light)] group-hover:text-[#6366F1] transition-colors" />
                        )}
                      </div>
                      <p
                        className="text-xs sm:text-[0.82rem] font-semibold mt-1 text-[var(--text)] group-hover:text-[#6366F1] transition-colors truncate"
                        title={link.display}
                      >
                        {link.display}
                      </p>
                    </a>
                  </div>
                </motion.div>
              )
            })}
          </div>
        </motion.div>
      </div>
    </section>
  )
}
