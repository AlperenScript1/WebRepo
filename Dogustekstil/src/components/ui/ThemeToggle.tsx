'use client'

import { Sun, Moon } from 'lucide-react'
import { useTheme } from '@/components/ui/ThemeProvider'

export function ThemeToggle() {
  const { theme, setTheme } = useTheme()

  return (
    <div
      className="flex items-center rounded-xl border border-brand-smoke bg-brand-gray-m p-0.5 shrink-0"
      role="group"
      aria-label="Tema seçimi"
    >
      <button
        type="button"
        onClick={() => setTheme('light')}
        aria-pressed={theme === 'light'}
        aria-label="Beyaz tema"
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-body font-600 transition-all duration-200 ${
          theme === 'light'
            ? 'bg-brand-gray text-brand-black shadow-sm'
            : 'text-brand-muted hover:text-brand-black'
        }`}
      >
        <Sun size={14} />
        <span className="hidden sm:inline">Beyaz</span>
      </button>
      <button
        type="button"
        onClick={() => setTheme('dark')}
        aria-pressed={theme === 'dark'}
        aria-label="Siyah tema"
        className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg text-xs font-body font-600 transition-all duration-200 ${
          theme === 'dark'
            ? 'bg-brand-gray text-brand-black shadow-sm'
            : 'text-brand-muted hover:text-brand-black'
        }`}
      >
        <Moon size={14} />
        <span className="hidden sm:inline">Siyah</span>
      </button>
    </div>
  )
}
