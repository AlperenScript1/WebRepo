interface SectionHeaderProps {
  eyebrow: string
  title: string
  subtitle?: string
  centered?: boolean
}

export function SectionHeader({ eyebrow, title, subtitle, centered = false }: SectionHeaderProps) {
  const align = centered ? 'items-center text-center' : 'items-start'
  return (
    <div className={`flex flex-col gap-4 ${align}`}>
      <span className="font-display font-600 text-brand-red uppercase tracking-widest text-sm">
        {eyebrow}
      </span>
      <div className="accent-line" />
      <h2 className="section-title">{title}</h2>
      {subtitle && (
        <p className="text-brand-muted font-body text-lg max-w-2xl leading-relaxed">
          {subtitle}
        </p>
      )}
    </div>
  )
}
