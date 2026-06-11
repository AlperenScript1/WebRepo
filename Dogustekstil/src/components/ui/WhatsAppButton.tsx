import { MessageCircle } from 'lucide-react'

const PHONE = '905411982004'
const MESSAGE = encodeURIComponent('Merhaba, ürünleriniz hakkında bilgi almak istiyorum.')
const WA_URL = `https://wa.me/${PHONE}?text=${MESSAGE}`

interface WhatsAppButtonProps {
  label?: string
  size?: 'sm' | 'md' | 'lg'
  className?: string
}

export function WhatsAppButton({ label = 'WhatsApp\'tan Yaz', size = 'md', className = '' }: WhatsAppButtonProps) {
  const sizes = { sm: 'px-4 py-2 text-sm', md: 'px-6 py-3 text-base', lg: 'px-8 py-4 text-lg' }
  return (
    <a
      href={WA_URL}
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center gap-2 bg-[#25D366] hover:bg-[#1ebe5d] text-white
        font-display font-700 uppercase tracking-wider rounded-xl transition-all duration-200
        shadow-lg shadow-green-900/20 ${sizes[size]} ${className}`}
    >
      <MessageCircle size={20} />
      {label}
    </a>
  )
}
