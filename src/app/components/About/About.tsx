const PROFILE = [
  { key: 'apiVersion', val: 'v1' },
  { key: 'kind', val: 'SystemsArchitect' },
  { key: '---', val: '' },
  { key: 'name', val: 'jake-starkey' },
  { key: 'company', val: 'Starkey Digital — CEO' },
  { key: 'location', val: 'north-west-uk' },
  { key: '---', val: '' },
  { key: 'experience', val: '10+ years' },
  { key: 'primary', val: 'Systems Architecture' },
  { key: 'preferred-stack', val: 'Svelte · SvelteKit · ASP.NET Core' },
  { key: 'also-strong', val: 'Next.js · React · Node.js' },
  { key: 'infra', val: 'k8s · GitOps · Terraform' },
  { key: 'github', val: 'datstarkey' },
  { key: 'status', val: 'Available' },
]

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

export default function About() {
  return (
    <section
      id="about"
      className="py-32"
      style={{ borderTop: '1px solid #131420' }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionLabel num="01" label="About" />

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          {/* Bio */}
          <div>
            <h2
              className="font-display font-bold text-ink leading-[1.1] mb-8"
              style={{ fontSize: 'clamp(2rem, 4vw, 3rem)' }}
            >
              Architecting systems
              <br />
              <em className="not-italic text-accent font-normal">built to scale.</em>
            </h2>

            <p className="font-sans font-light text-ink-2 leading-[1.85] mb-5">
              Systems architect with 10+ years of experience building and scaling
              high-performance systems, based in the North West, UK. CEO &amp; founder of{' '}
              <span className="text-ink font-medium">Starkey Digital</span>. I care deeply
              about the full picture — from architecture decisions down to the deployment pipeline.
            </p>

            <p className="font-sans font-light text-ink-2 leading-[1.85] mb-5">
              My preferred stack is{' '}
              <span className="text-ink font-medium">Svelte &amp; SvelteKit</span> on the
              frontend and{' '}
              <span className="text-ink font-medium">ASP.NET Core</span> on the backend —
              lean, fast, and production-ready. I also carry deep familiarity with{' '}
              Next.js, React, and the wider Node.js ecosystem, and pick the right tool for the
              job rather than the fashionable one.
            </p>

            <p className="font-sans font-light text-ink-2 leading-[1.85]">
              On the infrastructure side: Kubernetes, GitOps, Terraform, and cloud-native
              tooling across AWS and Azure. Everything connected by CI/CD pipelines that
              make shipping boring in the best possible way.
            </p>
          </div>

          {/* YAML profile card */}
          <div
            className="overflow-hidden lg:sticky lg:top-24"
            style={{ border: '1px solid #1c1d2a' }}
          >
            {/* Faux window chrome */}
            <div
              className="flex items-center gap-1.5 px-4 py-3"
              style={{ background: '#13141f', borderBottom: '1px solid #1c1d2a' }}
            >
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ff5f56' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#ffbd2e' }} />
              <span className="w-2.5 h-2.5 rounded-full" style={{ background: '#27c93f' }} />
              <span className="font-mono text-[11px] text-ink-3 ml-2 tracking-wide">
                profile.yaml
              </span>
            </div>

            <div className="p-5 space-y-0.5">
              {PROFILE.map(({ key, val }, i) =>
                key === '---' ? (
                  <div key={i} className="font-mono text-[12px] py-0.5" style={{ color: '#1c1d2a' }}>
                    ---
                  </div>
                ) : (
                  <div key={i} className="font-mono text-[12px] flex gap-2">
                    <span className="text-teal shrink-0">{key}:</span>
                    <span className="text-ink-2">{val}</span>
                  </div>
                ),
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
