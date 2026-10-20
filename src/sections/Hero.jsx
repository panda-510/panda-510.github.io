import { motion } from 'framer-motion'
import { ArrowRight, BarChart3, Box, Download, Users, Zap } from 'lucide-react'
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
      <div className="max-w-6xl mx-auto px-5 sm:px-6 pt-20 sm:pt-28 pb-14 sm:pb-20">
        <div className="grid lg:grid-cols-[1.22fr_0.78fr] gap-10 lg:gap-14 items-center">
          {/* Left Column: Headline, Bio & CTAs */}
          <div>
            <motion.div {...fadeUp(0.04)} className="mb-6">
              <span className="hero-badge-pill">
                <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm animate-pulse" />
                <span>{data.experience[0].role} &bull; {data.experience[0].company}</span>
              </span>
            </motion.div>

            <motion.h1
              {...fadeUp(0.1)}
              className="hero-title max-w-2xl"
            >
              {data.personal.headlineLead}{' '}
              <span className="hero-gradient-text">
                {data.personal.headlineAccent}
              </span>
            </motion.h1>

            <motion.p
              {...fadeUp(0.18)}
              className="body-copy mt-6 max-w-xl text-[1.08rem] leading-[1.7]"
            >
              {data.personal.heroBio}
            </motion.p>

            <motion.div {...fadeUp(0.26)} className="flex flex-wrap items-center gap-3.5 mt-8">
              <button
                onClick={() => scrollTo('projects')}
                className="button-primary group"
              >
                <span>Explore Projects</span>
                <ArrowRight size={15} className="stripe-arrow" />
              </button>

              <a
                href={data.personal.resume}
                download="Aditya_Panda_Resume.pdf"
                className="button-outline"
              >
                <span>Download Resume</span>
                <Download size={14} />
              </a>
            </motion.div>
          </div>

          {/* Right Column: Stripe Dashboard & Live Metric Showcase */}
          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.15 }}
            className="stripe-dashboard-card"
          >
            {/* Terminal Tab Bar */}
            <div className="stripe-terminal-bar">
              <div className="stripe-dots">
                <span className="stripe-dot bg-rose-400" />
                <span className="stripe-dot bg-amber-400" />
                <span className="stripe-dot bg-emerald-400" />
              </div>
              <span>api.nttdata.payments/live</span>
              <span className="text-emerald-500 font-semibold font-mono text-[0.7rem] uppercase">HTTP 200 OK</span>
            </div>

            <div className="p-6 sm:p-7">
              {/* Stat Rows */}
              <div className="space-y-4">
                {data.stats.map((stat) => {
                  const IconComponent = statIcons[stat.icon] || Zap
                  return (
                    <div key={stat.label} className="stat-row flex items-center gap-4 p-2 rounded-xl hover:bg-[var(--bg-soft)] transition-colors">
                      <div className="stat-icon-badge">
                        <IconComponent size={16} />
                      </div>
                      <div>
                        <p className="stat-value">{stat.value}</p>
                        <p className="stat-label">{stat.label}</p>
                      </div>
                    </div>
                  )
                })}
              </div>

              {/* Status Section */}
              <div className="pt-5 mt-5 border-t border-[var(--surface-border)]">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 shadow-sm animate-pulse" />
                    <span className="text-xs font-semibold text-[var(--muted)]">Status: Active</span>
                  </div>
                  <span className="info-chip">Production</span>
                </div>
                <h3 className="text-base font-bold text-[var(--text)] mt-2 tracking-tight">
                  {data.experience[0].role}
                </h3>
                <p className="text-sm text-[var(--muted)] mt-0.5">
                  {data.experience[0].company}
                </p>
                <p className="text-xs font-mono text-[var(--muted-light)] mt-1">
                  {data.experience[0].period} &bull; Mumbai, India
                </p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
