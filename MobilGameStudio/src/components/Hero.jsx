import { AppStoreButton, GooglePlayButton } from './StoreButtons';

const HERO_BG = '/images/hero-bg.jpg';

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
        <div className="absolute left-1/2 top-3 z-10 h-5 w-24 -translate-x-1/2 rounded-full bg-gray-800 dark:bg-gray-700" />
        <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-gradient-to-br from-indigo-950 via-purple-900 to-studio-night">
          <div className="absolute inset-0 opacity-40">
            <div className="absolute left-4 top-8 h-2 w-16 rounded-full bg-cyan-400/60" />
            <div className="absolute right-6 top-12 h-3 w-3 rounded-full bg-pink-400 shadow-[0_0_12px_#f472b6]" />
            <div className="absolute left-8 top-24 h-2 w-10 rounded-full bg-violet-400/50" />
            <div className="absolute bottom-32 left-1/2 h-16 w-16 -translate-x-1/2 rounded-lg border border-cyan-400/40 bg-cyan-500/10 backdrop-blur-sm" />
            <div className="absolute bottom-20 left-4 right-4 flex justify-between gap-2">
              {[...Array(4)].map((_, i) => (
                <div
                  key={i}
                  className="h-10 flex-1 rounded-lg border border-white/10 bg-white/5"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
          <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/80 to-transparent p-6 pt-16">
            <p className="text-xs font-medium uppercase tracking-widest text-cyan-300">
              Now Playing
            </p>
            <p className="mt-1 text-lg font-bold text-white">Shadow Run</p>
            <div className="mt-3 h-1 overflow-hidden rounded-full bg-white/20">
              <div className="h-full w-2/3 rounded-full bg-gradient-to-r from-studio-accent to-cyan-400" />
            </div>
          </div>
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_30%_20%,rgba(99,102,241,0.4),transparent_50%)]" />
        </div>
      </div>
    </div>
  );
}
