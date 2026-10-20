import { data } from '../data'

export default function Footer() {
  return (
    <footer className="max-w-6xl mx-auto px-5 sm:px-6 py-10">
      <div className="surface-card px-6 py-5 flex flex-col sm:flex-row items-center justify-between gap-3 text-xs text-[var(--muted)]">
        <p className="font-semibold text-slate-700 dark:text-slate-300">
          &copy; {new Date().getFullYear()} {data.personal.name} &bull; Full-Stack Software Engineer
        </p>
        <div className="flex items-center gap-4 font-semibold">
          <a
            href={data.personal.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6366F1] transition-colors"
          >
            LinkedIn
          </a>
          <span className="text-slate-300 dark:text-slate-700">&bull;</span>
          <a
            href={data.personal.github}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:text-[#6366F1] transition-colors"
          >
            GitHub
          </a>
          <span className="text-slate-300 dark:text-slate-700">&bull;</span>
          <a
            href={`mailto:${data.personal.email}`}
            className="hover:text-[#6366F1] transition-colors"
          >
            Email
          </a>
        </div>
      </div>
    </footer>
  )
}
