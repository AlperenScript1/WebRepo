interface BadgeProps {
  children: React.ReactNode
  variant?: 'red' | 'dark' | 'smoke'
}

export function Badge({ children, variant = 'dark' }: BadgeProps) {
  const variants = {
    red:   'bg-brand-red/10 text-brand-red border border-brand-red/25',
    dark:  'bg-brand-gray-m border border-brand-smoke text-brand-muted',
    smoke: 'bg-brand-dark border border-brand-smoke text-brand-light',
  }
  return (
    <span className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-body font-500 ${variants[variant]}`}>
      {children}
    </span>
  )
}
