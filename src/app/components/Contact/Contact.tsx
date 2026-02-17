import { Github, Mail, MapPin, ExternalLink } from 'lucide-react'

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-16">
      <span className="font-mono text-[11px] text-accent tracking-[0.1em]">{num}</span>
      <span className="font-mono text-[11px] text-ink-3 tracking-[0.12em] uppercase">
        <span className="text-line mr-2">——</span>
        {label}
      </span>
    </div>
  )
}

const CONTACT_ITEMS = [
  {
    label: 'Email',
    value: 'jakestarkey@gmail.com',
    href: 'mailto:jakestarkey@gmail.com',
    Icon: Mail,
    external: false,
  },
  {
    label: 'GitHub',
    value: 'github.com/datstarkey',
    href: 'https://github.com/datstarkey',
    Icon: Github,
    external: true,
  },
  {
    label: 'Location',
    value: 'North West, UK',
    href: null,
    Icon: MapPin,
    external: false,
  },
]

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-32 pb-40"
      style={{ borderTop: '1px solid #131420' }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionLabel num="03" label="Contact" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Left: copy + primary CTA */}
          <div>
            <h2
              className="font-display font-bold text-ink leading-[1.1] mb-6"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Let&apos;s build
              <br />
              <em className="not-italic text-accent font-normal">something great.</em>
            </h2>

            <p className="font-sans font-light text-ink-2 leading-[1.85] mb-10">
              Open to platform engineering and full stack development roles, freelance projects,
              and interesting conversations. Reach out below, or head straight to GitHub to
              see what I&apos;ve been shipping.
            </p>

            {/* Primary GitHub CTA */}
            <a
              href="https://github.com/datstarkey"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-3 font-mono text-[11px] uppercase tracking-[0.1em] text-bg bg-accent px-6 py-3 transition-opacity duration-200 hover:opacity-85"
            >
              <Github size={14} />
              View all work on GitHub
              <ExternalLink size={11} />
            </a>
          </div>

          {/* Right: contact details */}
          <div style={{ border: '1px solid #1c1d2a' }}>
            {CONTACT_ITEMS.map(({ label, value, href, Icon, external }, i) => (
              <div
                key={label}
                className="flex items-center justify-between px-6 py-5"
                style={
                  i < CONTACT_ITEMS.length - 1 ? { borderBottom: '1px solid #131420' } : {}
                }
              >
                <div className="flex items-center gap-2.5">
                  <Icon size={12} className="text-accent shrink-0" />
                  <span className="font-mono text-[11px] text-ink-3 uppercase tracking-[0.1em]">
                    {label}
                  </span>
                </div>

                {href ? (
                  <a
                    href={href}
                    target={external ? '_blank' : undefined}
                    rel={external ? 'noopener noreferrer' : undefined}
                    className="font-mono text-[0.8125rem] text-ink-2 hover:text-accent transition-colors duration-150"
                  >
                    {value}
                  </a>
                ) : (
                  <span className="font-mono text-[0.8125rem] text-ink-2">{value}</span>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
