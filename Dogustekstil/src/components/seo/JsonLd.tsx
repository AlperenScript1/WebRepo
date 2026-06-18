import { siteConfig, getSiteUrl } from '@/lib/site'

export function JsonLd() {
  const { address } = siteConfig

  const localBusiness = {
    '@context': 'https://schema.org',
    '@type': 'LocalBusiness',
    '@id': getSiteUrl('/#business'),
    name: siteConfig.name,
    alternateName: ['dogusbaski', 'dogustekstil', 'Doğuş Tekstil Ankara', 'Doğuş Tekstil Baskı'],
    description: siteConfig.description,
    url: getSiteUrl(),
    telephone: siteConfig.phone,
    image: getSiteUrl(siteConfig.ogImage),
    logo: getSiteUrl(siteConfig.ogImage),
    address: {
      '@type': 'PostalAddress',
      streetAddress: address.street,
      addressLocality: address.city,
      addressRegion: address.region,
      postalCode: address.postalCode,
      addressCountry: address.country,
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 39.9665,
      longitude: 32.7435,
    },
    areaServed: {
      '@type': 'Country',
      name: 'Türkiye',
    },
    sameAs: [siteConfig.instagram],
    priceRange: '$$',
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
        opens: '08:00',
        closes: '19:00',
      },
    ],
  }

  const webSite = {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': getSiteUrl('/#website'),
    name: siteConfig.name,
    alternateName: siteConfig.shortName,
    url: getSiteUrl(),
    description: siteConfig.description,
    inLanguage: 'tr-TR',
    publisher: {
      '@id': getSiteUrl('/#business'),
    },
  }

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(localBusiness) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webSite) }}
      />
    </>
  )
}
