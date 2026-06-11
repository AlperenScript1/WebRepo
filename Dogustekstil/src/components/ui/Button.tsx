interface ButtonProps {
  children: React.ReactNode
  variant?: 'primary' | 'outline' | 'ghost'
  size?: 'sm' | 'md' | 'lg'
  href?: string
  onClick?: () => void
  className?: string
  target?: '_blank' | '_self'
  rel?: string
}

export function Button({
  children, variant = 'primary', size = 'md',
  href, onClick, className = '', target, rel,
}: ButtonProps) {
  const base = 'inline-flex items-center gap-2 font-display font-700 uppercase tracking-wider rounded-xl transition-all duration-200 cursor-pointer'
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' }
  const variants = {
    primary: 'bg-brand-red text-white hover:bg-brand-red-h shadow-lg shadow-[rgba(176,30,75,0.25)] hover:shadow-[rgba(176,30,75,0.35)]',
    outline: 'border-2 border-brand-red text-brand-red hover:bg-brand-red hover:text-white',
    ghost:   'text-brand-muted hover:text-brand-black hover:bg-brand-gray-m',
  }
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`
  if (href) return <a href={href} className={cls} target={target} rel={rel} onClick={onClick}>{children}</a>
  return <button type="button" onClick={onClick} className={cls}>{children}</button>
}
