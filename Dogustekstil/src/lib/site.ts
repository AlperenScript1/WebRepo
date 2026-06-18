/** Site-wide SEO and business constants. Set NEXT_PUBLIC_SITE_URL in production. */
export const siteConfig = {
  name: 'Doğuş Tekstil',
  shortName: 'dogusbaski',
  title: 'Doğuş Tekstil — Ankara Profesyonel Tekstil Baskı Hizmetleri',
  description:
    'Doğuş Tekstil (dogusbaski.com) — Ankara\'da DTF, reflektör, flex-flok ve serigrafi baskı. Firma logolu toplu üretim, iş yeleği ve personel giyim. Türkiye geneli gönderim.',
  keywords: [
    'doğuş tekstil',
    'dogusbaski',
    'dogusbaski.com',
    'dogustekstil',
    'doğuş tekstil ankara',
    'dogustekstil ankara',
    'DTF baskı ankara',
    'tekstil baskı ankara',
    'iş yeleği baskı',
    'firma logolu üretim',
    'reflektör baskı',
    'flex flok baskı',
    'serigrafi baskı',
    'fason DTF baskı',
    'kurumsal giyim ankara',
    'personel kıyafeti baskı',
  ],
  url: process.env.NEXT_PUBLIC_SITE_URL ?? 'https://dogusbaski.com',
  locale: 'tr_TR',
  phone: '+905411982004',
  phoneDisplay: '+90 541 198 20 04',
  email: undefined as string | undefined,
  address: {
    street: 'Ağaç İşleri Sanayi Sitesi 21. Cadde 1358. Sokak 1/1',
    city: 'Ankara',
    region: 'Ankara',
    country: 'TR',
    postalCode: '06370',
  },
  instagram: 'https://www.instagram.com/dogustekstil5',
  ogImage: '/logo.png',
} as const

export function getSiteUrl(path = '') {
  const base = siteConfig.url.replace(/\/$/, '')
  return path ? `${base}${path.startsWith('/') ? path : `/${path}`}` : base
}
