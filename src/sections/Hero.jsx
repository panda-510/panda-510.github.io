import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Box, Download, ExternalLink, Users, Zap } from 'lucide-react'
import { data } from '../data'

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 16 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true },
  transition: { duration: 0.5, delay },
})

const statIcons = {
  zap: Zap,
  users: Users,
  chart: BarChart3,
  box: Box,
}

export default function Hero() {
  const scrollTo = (id) => {
    const el = document.getElementById(id)
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="about" className="hero-section">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-16 sm:pt-24 pb-14 sm:pb-20">
        <div className="grid lg:grid-cols-[1.25fr_0.75fr] gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Bio, CTAs & Tech Stack */}
          <div>
            <motion.div {...fadeUp(0.04)} className="mb-6">
              <span className="hero-badge-pill">
                <span className="w-2 h-2 rounded-full bg-[#6366F1]" />
                <span>{data.personal.rolePill}</span>
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="hero-title max-w-2xl whitespace-pre-line"
            >
              {data.personal.headlinePrefix}{' '}
              <span className="hero-accent-text">
                {data.personal.headlineHighlight}
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.18)}
              className="body-copy mt-6 max-w-xl text-[1.05rem] leading-[1.68]"
            >
              {data.personal.heroBio}
            </motion.p>

            <motion.div {...fadeUp(0.26)} className="flex flex-wrap items-center gap-3.5 mt-8">
              <button
                onClick={() => scrollTo('projects')}
                className="button-primary group"
              >
                <span>View my work</span>
                <ArrowRight size={15} className="transition-transform group-hover:translate-x-1" />
              </button>

              <a
                href={data.personal.resume}
                download="Aditya_Panda_Resume.pdf"
                className="button-outline"
              >
                <span>Download resume</span>
                <Download size={14} />
              </a>
            </motion.div>

            {/* Tech Stack Bar */}
            <motion.div {...fadeUp(0.34)} className="mt-12">
              <p className="text-xs font-mono font-bold tracking-widest uppercase text-slate-400 mb-3">
                TECH STACK
              </p>
              <div className="flex flex-wrap items-center gap-2">
                {data.heroTechStack.map((tech) => (
                  <span key={tech.name} className="tech-pill">
                    {tech.name}
                  </span>
                ))}
                <span className="tech-pill text-slate-500 font-medium">
                  + more
                </span>
              </div>
            </motion.div>
          </div>

          {/* Right Column: Floating Showcase Card */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="showcase-card"
          >
            {/* Top row: Currently at */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-100 dark:border-slate-800">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-xs text-slate-500 dark:text-slate-400 font-medium">Currently at</span>
              </div>
              <a
                href={data.personal.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-slate-600 dark:hover:text-slate-200 transition-colors"
                aria-label="Current company link"
              >
                <ExternalLink size={14} />
              </a>
            </div>
            <p className="font-bold text-sm text-[var(--text)] mt-2">
              NTT DATA Payment Services
            </p>

            {/* 2x2 Impact Stats Grid */}
            <div className="grid grid-cols-2 gap-x-5 gap-y-6 mt-6">
              {data.stats.map((stat) => {
                const IconComponent = statIcons[stat.icon] || Zap
                return (
                  <div key={stat.label} className="flex items-start gap-3">
                    <div className="stat-icon-badge mt-0.5">
                      <IconComponent size={15} />
                    </div>
                    <div>
                      <p className="stat-value">{stat.value}</p>
                      <p className="stat-label mt-0.5">{stat.label}</p>
                    </div>
                  </div>
                )
              })}
            </div>

            {/* Bottom row: Open to opportunities */}
            <div className="pt-4 mt-6 border-t border-slate-100 dark:border-slate-800 flex items-center justify-between">
              <div>
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  <span className="text-xs font-semibold text-slate-700 dark:text-slate-300">Open to opportunities</span>
                </div>
                <p className="text-xs text-slate-400 mt-1 font-medium">
                  Software Engineering &bull; AI Engineering &bull; Full Stack
                </p>
              </div>
              <button
                onClick={() => scrollTo('contact')}
                className="text-slate-400 hover:text-slate-700 dark:hover:text-slate-200 transition-colors"
                aria-label="Go to contact section"
              >
                <ArrowRight size={15} />
              </button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
