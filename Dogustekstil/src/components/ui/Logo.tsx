import Image from 'next/image'

interface LogoProps {
  className?: string
  size?: 'sm' | 'md' | 'lg'
  priority?: boolean
}

const sizes = {
  sm: { width: 140, height: 48 },
  md: { width: 180, height: 62 },
  lg: { width: 260, height: 90 },
}

export function Logo({ className = '', size = 'md', priority = false }: LogoProps) {
  const { width, height } = sizes[size]
  return (
    <Image
      src="/logo.png"
      alt="Doğuş Tekstil — Ankara profesyonel tekstil baskı"
      width={width}
      height={height}
      className={`object-contain object-left ${className}`}
      priority={priority}
    />
  )
}
