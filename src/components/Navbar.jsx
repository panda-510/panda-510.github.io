import { useEffect, useState } from 'react'
import { ArrowRight, Menu, Moon, Sun, X } from 'lucide-react'
import { AnimatePresence, motion } from 'framer-motion'
import { data } from '../data'

export default function Navbar({ theme, onToggleTheme }) {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const scrollTo = (section) => {
    const element = document.getElementById(section.toLowerCase())
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' })
      setMenuOpen(false)
    }
  }

  return (
    <>
      <motion.nav
        initial={{ y: -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.45 }}
        className={`navbar-shell ${scrolled ? 'navbar-solid' : ''}`}
      >
        <div className="max-w-6xl mx-auto px-5 sm:px-6 h-16 flex items-center justify-between">
          {/* Brand Mark */}
          <button onClick={() => scrollTo('about')} className="brand-mark group" aria-label="Go to top">
            <span className="brand-badge group-hover:scale-105 transition-transform">AP</span>
            <span className="brand-name text-xs sm:text-sm font-extrabold tracking-[0.16em] uppercase">
              Aditya Panda
            </span>
          </button>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-1 lg:gap-2">
            {data.nav.map((item) => (
              <button
                key={item}
                onClick={() => scrollTo(item)}
                className="nav-link"
              >
                {item}
              </button>
            ))}
          </div>

          {/* Right Actions: Theme Toggle + Let's Connect Button */}
          <div className="flex items-center gap-2.5">
            <button
              onClick={onToggleTheme}
              className="icon-button rounded-full"
              aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
              title={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
            >
              {theme === 'light' ? <Sun size={15} /> : <Moon size={15} />}
            </button>

            <a
              href={`mailto:${data.personal.email}`}
              className="button-dark hidden sm:inline-flex group items-center gap-2"
            >
              <span>Let's Connect</span>
              <ArrowRight size={14} className="transition-transform group-hover:translate-x-1" />
            </a>

            <button
              onClick={() => setMenuOpen((open) => !open)}
              className="icon-button md:hidden rounded-full"
              aria-label="Toggle navigation"
            >
              {menuOpen ? <X size={17} /> : <Menu size={17} />}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="mobile-panel md:hidden"
          >
            <div className="px-5 py-4 flex flex-col gap-1">
              {data.nav.map((item) => (
                <button
                  key={item}
                  onClick={() => scrollTo(item)}
                  className="mobile-nav-link"
                >
                  {item}
                </button>
              ))}
              <div className="pt-2 mt-2 border-t border-[var(--surface-border)]">
                <a
                  href={`mailto:${data.personal.email}`}
                  className="button-dark w-full justify-center gap-2"
                >
                  <span>Let's Connect</span>
                  <ArrowRight size={14} />
                </a>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  )
}
