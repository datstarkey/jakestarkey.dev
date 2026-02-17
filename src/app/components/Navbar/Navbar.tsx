'use client'

import { useEffect, useState } from 'react'

const NAV_ITEMS = [
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Contact', href: '#contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [active, setActive] = useState('')
  const [menuOpen, setMenuOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setActive(e.target.id)
        })
      },
      { rootMargin: '-40% 0px -40% 0px' },
    )
    document.querySelectorAll('section[id]').forEach((s) => observer.observe(s))
    return () => observer.disconnect()
  }, [])

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={
        scrolled
          ? {
              background: 'rgba(7,8,13,0.9)',
              backdropFilter: 'blur(16px)',
              WebkitBackdropFilter: 'blur(16px)',
              borderBottom: '1px solid #1c1d2a',
              padding: '1rem 0',
            }
          : { padding: '1.5rem 0' }
      }
    >
      <div className="max-w-[1200px] mx-auto px-8 flex items-center justify-between">
        <a href="#hero" className="flex items-center gap-3" onClick={() => setMenuOpen(false)}>
          <span className="font-display font-black text-sm w-8 h-8 flex items-center justify-center bg-accent text-bg shrink-0">
            JS
          </span>
          <span className="font-display font-semibold text-[0.8125rem] text-ink tracking-[0.1em] uppercase hidden sm:block">
            Jake Starkey
          </span>
        </a>

        <nav className="hidden sm:flex items-center gap-10">
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className={`font-mono text-[0.6875rem] uppercase tracking-[0.1em] transition-colors duration-200 relative
                after:absolute after:bottom-[-3px] after:left-0 after:h-px after:bg-accent after:transition-[width] after:duration-200
                ${active === href.slice(1) ? 'text-accent after:w-full' : 'text-ink-3 hover:text-ink after:w-0 hover:after:w-full'}`}
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/datstarkey"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[0.6875rem] uppercase tracking-[0.1em] text-ink-3 px-4 py-1.5 transition-all duration-200 hover:text-accent"
            style={{ border: '1px solid #1c1d2a' }}
            onMouseEnter={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = '#e2fd5c')
            }
            onMouseLeave={(e) =>
              ((e.currentTarget as HTMLElement).style.borderColor = '#1c1d2a')
            }
          >
            GitHub ↗
          </a>
        </nav>

        {/* Mobile burger */}
        <button
          className="sm:hidden flex flex-col justify-center gap-[5px] p-1 z-[101] bg-transparent border-0 cursor-pointer"
          onClick={() => setMenuOpen((o) => !o)}
          aria-label="Toggle menu"
        >
          {[0, 1, 2].map((i) => (
            <span
              key={i}
              className="block w-[22px] h-px bg-ink-2 transition-all duration-200 origin-center"
              style={
                menuOpen
                  ? i === 0
                    ? { transform: 'translateY(6px) rotate(45deg)' }
                    : i === 1
                    ? { opacity: 0, transform: 'scaleX(0)' }
                    : { transform: 'translateY(-6px) rotate(-45deg)' }
                  : {}
              }
            />
          ))}
        </button>

        {/* Mobile overlay */}
        <div
          className="sm:hidden fixed inset-0 bg-bg flex flex-col items-center justify-center gap-12 transition-opacity duration-200"
          style={{ opacity: menuOpen ? 1 : 0, pointerEvents: menuOpen ? 'all' : 'none' }}
        >
          {NAV_ITEMS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              className="font-mono text-xl uppercase tracking-[0.15em] text-ink-2 hover:text-accent transition-colors"
              onClick={() => setMenuOpen(false)}
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/datstarkey"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-xl uppercase tracking-[0.15em] text-accent"
            onClick={() => setMenuOpen(false)}
          >
            GitHub ↗
          </a>
        </div>
      </div>
    </header>
  )
}
