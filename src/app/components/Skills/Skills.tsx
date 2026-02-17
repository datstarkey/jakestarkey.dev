import { skills } from '@/data/skills'

function SectionLabel({ num, label }: { num: string; label: string }) {
  return (
    <div className="flex items-center gap-3 mb-12">
      <span className="font-mono text-[11px] text-accent tracking-[0.1em]">{num}</span>
      <span className="font-mono text-[11px] text-ink-3 tracking-[0.12em] uppercase">
        <span className="text-line mr-2">——</span>
        {label}
      </span>
    </div>
  )
}

export default function Skills() {
  return (
    <section
      id="skills"
      className="py-32"
      style={{ borderTop: '1px solid #131420' }}
    >
      <div className="max-w-[1200px] mx-auto px-8">
        <SectionLabel num="02" label="Skills" />

        {/* Terminal prompt header */}
        <div className="flex items-center gap-3 mb-8">
          <span className="font-mono text-sm text-accent font-medium">$</span>
          <span className="font-mono text-sm text-ink-3">ls skills/ --group-by-category</span>
        </div>

        {/* 3-column mosaic grid with 1px dividers */}
        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3"
          style={{ border: '1px solid #1c1d2a', gap: '1px', background: '#1c1d2a' }}
        >
          {skills.map((category) => (
            <div
              key={category.id}
              className="bg-surface p-8 hover:bg-raised transition-colors duration-200"
            >
              <h3 className="font-mono text-[11px] uppercase tracking-[0.12em] text-ink-3 mb-5">
                <span className="text-accent mr-1">/</span>
                {category.title}
              </h3>

              <div className="flex flex-wrap gap-2">
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="font-mono text-[11px] px-2.5 py-1 text-ink-2 tracking-[0.04em] cursor-default transition-all duration-150 border border-transparent bg-[rgba(226,253,92,0.05)] hover:border-accent hover:text-accent hover:bg-transparent"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
