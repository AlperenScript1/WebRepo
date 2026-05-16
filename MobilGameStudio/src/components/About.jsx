const stats = [
  { value: '10M+', label: 'İndirme', detail: 'Dünya genelinde' },
  { value: '4.7+', label: 'Ortalama Puan', detail: 'Mağaza yorumları' },
  { value: '5+', label: 'Yayınlanan Oyun', detail: 'Ve yeni projeler' },
];

const values = [
  {
    title: 'Oyuncu Odaklı',
    description:
      'Her güncelleme, beta testi ve özellik kararı oyuncu geri bildirimleriyle şekillenir.',
    Icon: IconHeart,
  },
  {
    title: 'Bağımsız Ruh',
    description:
      "Yayıncı baskısı olmadan, kendi vizyonumuzla App Store ve Google Play'de özgürce üretiyoruz.",
    Icon: IconBolt,
  },
  {
    title: 'Kalite Standartı',
    description:
      'Küçük ekip, büyük beklenti: performans, erişilebilirlik ve görsel tutarlılık her projede zorunlu.',
    Icon: IconStarOutline,
  },
];

export default function About() {
  return (
    <section id="about" className="section-padding overflow-hidden bg-white dark:bg-studio-night">
      <div className="container-narrow">
        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16 lg:items-center">
          <div>
            <span className="inline-flex items-center rounded-full bg-studio-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-studio-accent">
              Hakkımızda
            </span>
            <h2 className="mt-4 text-3xl font-bold tracking-tight text-studio-ink sm:text-4xl dark:text-white">
              Biz Kimiz?
            </h2>
            <p className="mt-6 text-lg leading-relaxed text-gray-600 dark:text-gray-400">
              X Games Studio, kod, tasarım ve oyuncu deneyimini bir araya getiren
              tutkulu bir mobil oyun ekibidir. 2019&apos;dan bu yana İstanbul merkezli
              bağımsız bir stüdyo olarak çalışıyor; her pikselde ve her satır kodda
              kaliteyi hedefliyoruz.
            </p>
            <p className="mt-4 leading-relaxed text-gray-600 dark:text-gray-400">
              Hyper-casual&apos;dan derin stratejiye uzanan portföyümüzle hem günlük
              oyunculara hem de sadık topluluklara hitap ediyoruz. Canlı operasyonlar,
              düzenli etkinlikler ve şeffaf iletişim — oyuncularımızın sesi yol
              haritamızı belirliyor.
            </p>

            <div className="mt-8 flex flex-wrap gap-3">
              {['Unity', 'Unreal', 'LiveOps', 'ASO', 'Cross-Platform'].map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-gray-200 bg-studio-muted px-4 py-1.5 text-xs font-medium text-gray-600 dark:border-gray-700 dark:bg-studio-card dark:text-gray-300"
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="absolute -inset-4 rounded-3xl bg-gradient-to-br from-studio-accent/20 via-violet-500/10 to-transparent blur-2xl" />
            <div className="relative grid gap-4 sm:grid-cols-1">
              {values.map((item) => (
                <ValueCard key={item.title} {...item} />
              ))}
            </div>
          </div>
        </div>

        <div className="mt-20 grid gap-6 sm:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="group relative overflow-hidden rounded-2xl border border-gray-100 bg-gradient-to-br from-studio-muted to-white px-8 py-10 text-center shadow-sm transition-all duration-300 hover:border-studio-accent/40 hover:shadow-lg dark:border-gray-700/50 dark:from-studio-card/80 dark:to-studio-card/40 dark:hover:border-studio-accent/50"
            >
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full bg-studio-accent/5 transition-transform duration-300 group-hover:scale-150" />
              <p className="relative text-4xl font-extrabold tracking-tight text-studio-accent sm:text-5xl">
                {stat.value}
              </p>
              <p className="relative mt-2 text-sm font-semibold uppercase tracking-wider text-studio-ink dark:text-white">
                {stat.label}
              </p>
              <p className="relative mt-1 text-xs text-gray-500 dark:text-gray-500">
                {stat.detail}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function ValueCard({ title, description, Icon }) {
  return (
    <div className="about-value-card group flex gap-4 rounded-2xl border border-gray-100 bg-studio-muted/80 p-5 backdrop-blur-sm transition-all duration-300 hover:border-studio-accent/30 hover:shadow-md dark:border-gray-700/50 dark:bg-studio-card/60 dark:hover:border-studio-accent/40">
      <span className="relative flex h-12 w-12 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-studio-accent/10">
        <span
          className="absolute inset-0 origin-bottom scale-y-0 bg-studio-accent transition-transform duration-500 ease-out group-hover:scale-y-100"
          aria-hidden="true"
        />
        <Icon className="relative z-10 h-6 w-6 text-studio-accent transition-colors duration-300 group-hover:text-white" />
      </span>
      <div>
        <h3 className="font-semibold text-studio-ink transition-colors duration-300 group-hover:text-studio-accent dark:text-white dark:group-hover:text-studio-accent">
          {title}
        </h3>
        <p className="mt-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {description}
        </p>
      </div>
    </div>
  );
}

function IconHeart({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        className="about-icon-fill"
        fill="currentColor"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
      />
    </svg>
  );
}

function IconBolt({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        className="about-icon-fill"
        fill="currentColor"
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M13 2L3 14h7l-1 8 10-12h-7l1-8z"
      />
    </svg>
  );
}

function IconStarOutline({ className }) {
  return (
    <svg className={className} viewBox="0 0 24 24" aria-hidden="true">
      <path
        className="about-icon-fill"
        fill="currentColor"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
      <path
        fill="none"
        stroke="currentColor"
        strokeWidth="1.75"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"
      />
    </svg>
  );
}
