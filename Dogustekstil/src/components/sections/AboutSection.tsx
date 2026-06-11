import { SectionHeader } from '@/components/ui/SectionHeader'

const stats = [
  { value: '10+',  label: 'Yıllık Deneyim' },
  { value: '500+', label: 'Mutlu Müşteri' },
  { value: '6',    label: 'Baskı Teknolojisi' },
  { value: '7/24', label: 'Destek Hattı' },
]

export function AboutSection() {
  return (
    <section id="hakkimizda" className="py-20 px-4 sm:px-6 lg:px-8 bg-brand-dark">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex flex-col gap-6">
          <SectionHeader
            eyebrow="Hakkımızda"
            title="Ankara'nın Baskı Uzmanı"
            subtitle="Kalite, Hız ve Güven — 3 Temel İlkemiz"
          />
          <p className="text-brand-muted font-body text-base leading-relaxed">
            Doğuş Tekstil olarak Ankara&apos;da kurumsal tekstil baskı sektöründe profesyonel
            hizmet sunuyoruz. DTF, fason DTF, reflektör, flex-flok ve serigrafi baskı
            teknolojilerini bir arada sunarak her ölçekteki işletmenin giyim ihtiyacını karşılıyoruz.
          </p>
          <p className="text-brand-muted font-body text-base leading-relaxed">
            Küçük butik siparişlerden binlerce adetlik toplu üretimlere kadar her projeyi aynı
            özenle teslim ediyoruz. Firmaya özel tasarım, hızlı üretim süreci ve Türkiye
            geneline teslimat imkânıyla sektörde güvenilir çözüm ortağınızız.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="card-base text-center">
              <p className="font-display font-800 text-4xl text-brand-red">{stat.value}</p>
              <p className="text-brand-muted text-sm font-body mt-2">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
