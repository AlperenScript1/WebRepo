import {
  Package, Building2, Zap, Shield, Palette, Truck, Printer, type LucideIcon,
} from 'lucide-react'
import { Badge } from '@/components/ui/Badge'
import { Button } from '@/components/ui/Button'
import { WhatsAppButton } from '@/components/ui/WhatsAppButton'

const features: { icon: LucideIcon; label: string }[] = [
  { icon: Package,   label: 'Toplu Sipariş' },
  { icon: Building2, label: 'Firma Logolu Üretim' },
  { icon: Zap,       label: 'Hızlı Teslimat' },
  { icon: Shield,    label: 'Dayanıklı Kumaş' },
  { icon: Printer,   label: 'DTF Baskı' },
  { icon: Palette,   label: 'Özel Baskı Seçenekleri' },
  { icon: Truck,     label: 'Türkiye Geneli Gönderim' },
]

export function HeroSection() {
  return (
    <section
      className="min-h-screen flex flex-col items-center justify-center bg-brand-white hero-pattern px-4 sm:px-6 lg:px-8 pt-24 pb-16"
    >
      <div className="max-w-4xl mx-auto text-center flex flex-col items-center gap-6">
        <Badge variant="red">📍 Ankara · Türkiye Geneli Gönderim</Badge>
        <h1 className="font-display font-800 uppercase tracking-tight leading-none">
          <span className="block text-5xl sm:text-6xl md:text-8xl text-brand-black">PROFESYONEL</span>
          <span className="block text-5xl sm:text-6xl md:text-8xl text-brand-red">TEKSTİL BASKI</span>
          <span className="block text-5xl sm:text-6xl md:text-8xl text-brand-black">HİZMETLERİ</span>
        </h1>
        <p className="text-brand-muted font-body text-lg md:text-xl max-w-2xl leading-relaxed">
          Doğuş Tekstil olarak Ankara&apos;dan Türkiye&apos;nin dört bir yanına DTF, reflektör,
          flex-flok ve serigrafi baskı çözümleri sunuyoruz. Firma logolu toplu üretimden kişiye
          özel tasarımlara kadar tüm ihtiyaçlarınız için yanınızdayız.
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <WhatsAppButton label="Hemen Teklif Al" size="lg" />
          <Button variant="outline" size="lg" href="#urunler">Ürünlerimizi Gör</Button>
        </div>
        <div className="flex flex-wrap gap-3 mt-8 justify-center">
          {features.map(({ icon: Icon, label }) => (
            <div key={label} className="bg-brand-gray border border-brand-smoke rounded-xl px-4 py-2 flex items-center gap-2 text-sm shadow-sm">
              <Icon size={18} className="text-brand-red shrink-0" />
              <span className="text-brand-light font-body">{label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
