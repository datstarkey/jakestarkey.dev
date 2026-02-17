import { Github, Mail } from 'lucide-react'

export default function Footer() {
  return (
    <footer
      className="py-8"
      style={{ borderTop: '1px solid #1c1d2a' }}
    >
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
        <span className="font-mono text-[11px] text-ink-3 tracking-[0.06em]">
          © {new Date().getFullYear()} Jake Starkey
        </span>

        <div className="flex items-center gap-5">
          <a
            href="https://github.com/datstarkey"
            target="_blank"
            rel="noopener noreferrer"
            className="text-ink-3 hover:text-accent transition-colors duration-150 flex items-center"
            aria-label="GitHub"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:jakestarkey@gmail.com"
            className="text-ink-3 hover:text-accent transition-colors duration-150 flex items-center"
            aria-label="Email"
          >
            <Mail size={16} />
          </a>
        </div>
      </div>
    </footer>
  )
}
