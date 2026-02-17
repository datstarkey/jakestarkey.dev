import { ArrowDown } from 'lucide-react'

export default function Hero() {
  return (
    <section id="hero" className="relative min-h-screen flex items-center overflow-hidden">
      {/* Dot-grid background */}
      <div
        className="absolute inset-0 grid-bg mask-radial pointer-events-none"
        style={{ opacity: 0.35 }}
        aria-hidden="true"
      />

      {/* Radial accent glow */}
      <div
        className="absolute top-1/3 left-1/4 w-[700px] h-[700px] rounded-full pointer-events-none"
        style={{
          background: 'radial-gradient(circle, rgba(226,253,92,0.035) 0%, transparent 65%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 max-w-[1200px] mx-auto px-8 pt-32 pb-20 w-full">
        {/* Status */}
        <div className="flex items-center gap-2 mb-8">
          <span
            className="w-[6px] h-[6px] rounded-full bg-teal animate-status-pulse shrink-0"
            style={{ boxShadow: '0 0 8px #00c9a7' }}
          />
          <span className="font-mono text-[11px] text-ink-3 tracking-[0.12em] uppercase">
            online · north west, uk
          </span>
        </div>

        {/* Giant name — solid + ghost outline */}
        <h1 className="flex flex-col mb-6" style={{ lineHeight: '0.88' }}>
          <span
            className="font-display font-black text-ink tracking-tighter select-none"
            style={{ fontSize: 'clamp(4.5rem, 13vw, 10.5rem)' }}
          >
            JAKE
          </span>
          <span
            className="font-display font-black text-stroke-hero tracking-tighter select-none"
            style={{ fontSize: 'clamp(4.5rem, 13vw, 10.5rem)' }}
          >
            STARKEY
          </span>
        </h1>

        {/* Title + company */}
        <div className="mb-10">
          <p
            className="font-sans font-light text-ink-2 tracking-wide"
            style={{ fontSize: 'clamp(0.875rem, 1.5vw, 1.125rem)' }}
          >
            Systems Architect{' '}
            <span className="text-accent mx-1.5">·</span>
            High-Performance Systems{' '}
            <span className="text-accent mx-1.5">·</span>
            DevOps &amp; Cloud
          </p>
          <p className="font-mono text-[11px] text-ink-3 tracking-[0.1em] mt-2 uppercase">
            CEO &amp; Founder{' '}
            <span className="text-accent">@</span>{' '}
            Starkey Digital
          </p>
        </div>

        {/* kubectl terminal */}
        <div className="mb-12">
          <div className="flex items-center gap-3 mb-1.5">
            <span className="font-mono text-[0.8125rem] text-accent font-medium">$</span>
            <span className="font-mono text-[0.8125rem] text-ink-3">
              kubectl describe developer jake-starkey
            </span>
          </div>
          <div
            className="font-mono text-[11px] px-4 py-3 bg-surface max-w-[640px] overflow-x-auto"
            style={{ border: '1px solid #1c1d2a', borderLeft: '2px solid #e2fd5c' }}
          >
            <div
              className="grid text-ink-3 uppercase tracking-[0.08em] text-[10px] mb-2"
              style={{ gridTemplateColumns: '160px 110px 200px 80px' }}
            >
              <span>NAME</span>
              <span>STATUS</span>
              <span>COMPANY</span>
              <span>YOE</span>
            </div>
            <div
              className="grid text-ink"
              style={{ gridTemplateColumns: '160px 110px 200px 80px' }}
            >
              <span>jake-starkey</span>
              <span className="text-teal">Running</span>
              <span>Starkey Digital</span>
              <span>10+</span>
            </div>
          </div>
        </div>

        {/* CTAs */}
        <div className="flex gap-2 flex-wrap">
          {['About', 'Skills', 'Contact'].map((label) => (
            <a
              key={label}
              href={`#${label.toLowerCase()}`}
              className="font-mono text-[11px] uppercase tracking-[0.1em] text-ink-3 border border-line px-5 py-2 transition-all duration-200 hover:bg-accent hover:text-bg hover:border-accent"
            >
              {label}
            </a>
          ))}
          <a
            href="https://github.com/datstarkey"
            target="_blank"
            rel="noopener noreferrer"
            className="font-mono text-[11px] uppercase tracking-[0.1em] text-accent border border-accent px-5 py-2 transition-all duration-200 hover:bg-accent hover:text-bg"
          >
            GitHub ↗
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <a
        href="#about"
        className="absolute bottom-8 left-1/2 text-ink-3 hover:text-accent transition-colors duration-200 animate-scroll-bounce"
        aria-label="Scroll to about"
      >
        <ArrowDown size={16} />
      </a>
    </section>
  )
}
