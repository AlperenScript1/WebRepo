import { AppStoreButton, GooglePlayButton } from './StoreButtons';

const HERO_BG = '/images/hero-bg.jpg';

/** Telefon mockup içi — 9:19 dikey görsel önerilir (public/images/phone-screen.jpg) */
const PHONE_SCREEN_IMAGE = '/images/phone-screen.jpg';
const PHONE_SCREEN_ALT = 'X Games Studio — oyun ekranı önizlemesi';

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-studio-light dark:bg-studio-night">
      <HeroBackdrop />

      <div className="container-narrow section-padding relative z-10">
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
          <div className="max-w-xl">
            <p className="mb-4 inline-flex items-center rounded-full border border-studio-accent/20 bg-studio-accent/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-widest text-studio-accent backdrop-blur-sm">
              Indie Mobile Studio
            </p>
            <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-studio-ink sm:text-5xl lg:text-6xl dark:text-white">
              Cebinizdeki{' '}
              <span className="bg-gradient-to-r from-studio-accent to-violet-500 bg-clip-text text-transparent">
                Sihirli Dünyalar.
              </span>
            </h1>
            <p className="mt-6 text-lg leading-relaxed text-gray-700 dark:text-gray-300">
              App Store ve Google Play için bağımsız, yenilikçi ve yüksek kaliteli
              mobil oyunlar üretiyoruz.
            </p>
            <div className="mt-10 flex flex-wrap gap-4">
              <AppStoreButton />
              <GooglePlayButton />
            </div>
          </div>

          <div className="flex justify-center lg:justify-end">
            <PhoneMockup />
          </div>
        </div>
      </div>
    </section>
  );
}

function HeroBackdrop() {
  return (
    <div className="pointer-events-none absolute inset-0" aria-hidden="true">
      <img
        src={HERO_BG}
        alt=""
        className="absolute inset-0 h-full w-full scale-105 object-cover blur-2xl sm:blur-3xl"
      />
      <div className="absolute inset-0 bg-gradient-to-br from-white/90 via-white/78 to-white/60 dark:from-studio-night/95 dark:via-studio-night/88 dark:to-studio-night/75" />
      <div className="absolute inset-0 bg-gradient-to-r from-studio-accent/8 via-transparent to-violet-500/10 dark:from-studio-accent/12 dark:to-violet-500/15" />
    </div>
  );
}

function PhoneMockup() {
  return (
    <div className="relative w-[280px] sm:w-[300px]">
      <div className="absolute -inset-8 rounded-full bg-studio-accent/20 blur-3xl dark:bg-studio-accent/10" />

      <div className="relative rounded-[2.5rem] border-[6px] border-gray-800 bg-gray-900 p-2 shadow-2xl dark:border-gray-600">
        {/* Dynamic Island */}
        <div className="absolute left-1/2 top-3 z-20 h-5 w-24 -translate-x-1/2 rounded-full bg-gray-950/90 shadow-inner dark:bg-black/80" />

        {/* Ekran alanı — görsel buraya object-cover ile oturur */}
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-gray-950">
          <img
            src={PHONE_SCREEN_IMAGE}
            alt={PHONE_SCREEN_ALT}
            className="absolute inset-0 h-full w-full object-cover object-center"
            draggable={false}
          />

          {/* Kenarları yumuşat + hafif cam efekti */}
          <div className="pointer-events-none absolute inset-0 rounded-[2rem] ring-1 ring-inset ring-white/10" />
          <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-black/25 via-transparent to-black/50" />

          {/* Alt bilgi şeridi */}
          <div className="absolute inset-x-0 bottom-0 z-10 bg-gradient-to-t from-black/85 via-black/50 to-transparent px-5 pb-5 pt-14">
            <p className="text-[10px] font-semibold uppercase tracking-widest text-cyan-300/90">
              Now Playing
            </p>
            <p className="mt-0.5 text-base font-bold text-white sm:text-lg">Shadow Run</p>
            <div className="mt-2.5 h-1 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-studio-accent to-cyan-400" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
