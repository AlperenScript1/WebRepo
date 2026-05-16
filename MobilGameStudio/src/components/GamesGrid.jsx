import { useRef, useState, useEffect, useCallback, forwardRef, useMemo } from 'react';
import { games } from '../data/games';
import { IconStar, IconChevronLeft, IconChevronRight } from './icons/Icons';
import { StoreIconButtons } from './StoreButtons';

const CARD_WIDTH = 320;
const LOOP_COPIES = 3;
const AUTO_PLAY_MS = 3000;
const AUTO_PLAY_RESUME_MS = 6000;

function getDepthStyle(distance) {
  if (distance === 0) {
    return { scale: 1, opacity: 1, zIndex: 30, translateY: 0 };
  }
  if (distance === 1) {
    return { scale: 0.9, opacity: 0.8, zIndex: 20, translateY: 16 };
  }
  if (distance === 2) {
    return { scale: 0.82, opacity: 0.6, zIndex: 10, translateY: 28 };
  }
  return { scale: 0.75, opacity: 0.42, zIndex: 5, translateY: 38 };
}

function getScrollToCenter(container, cardEl) {
  const cardCenter = cardEl.offsetLeft + cardEl.offsetWidth / 2;
  return cardCenter - container.clientWidth / 2;
}

export default function GamesGrid() {
  const gamesCount = games.length;
  const loopGames = useMemo(
    () =>
      Array.from({ length: LOOP_COPIES }, (_, copy) =>
        games.map((game) => ({ ...game, loopKey: `${game.id}-copy-${copy}` }))
      ).flat(),
    [gamesCount]
  );

  const scrollRef = useRef(null);
  const cardRefs = useRef([]);
  const isJumpingRef = useRef(false);
  const isPausedRef = useRef(false);
  const resumeTimerRef = useRef(null);
  const [centeredIndex, setCenteredIndex] = useState(gamesCount);
  const [isReady, setIsReady] = useState(false);

  const pauseAutoPlay = useCallback((temporary = true) => {
    isPausedRef.current = true;
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    if (temporary) {
      resumeTimerRef.current = setTimeout(() => {
        isPausedRef.current = false;
      }, AUTO_PLAY_RESUME_MS);
    }
  }, []);

  const resumeAutoPlay = useCallback(() => {
    if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    isPausedRef.current = false;
  }, []);

  const findCenteredIndex = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return gamesCount;

    const containerCenter = container.scrollLeft + container.clientWidth / 2;
    let closest = 0;
    let minDistance = Infinity;

    cardRefs.current.forEach((card, index) => {
      if (!card) return;
      const cardCenter = card.offsetLeft + card.offsetWidth / 2;
      const distance = Math.abs(cardCenter - containerCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closest = index;
      }
    });

    return closest;
  }, []);

  const jumpToIndex = useCallback((index) => {
    const container = scrollRef.current;
    const card = cardRefs.current[index];
    if (!container || !card) return;

    isJumpingRef.current = true;
    container.scrollLeft = getScrollToCenter(container, card);
    setCenteredIndex(index);

    requestAnimationFrame(() => {
      requestAnimationFrame(() => {
        isJumpingRef.current = false;
      });
    });
  }, []);

  /** Scroll pozisyonunu bir set kaydırır — yön korunur (sağa giderken geri, sola giderken ileri sıçramaz) */
  const maintainInfiniteScroll = useCallback(() => {
    if (isJumpingRef.current) return;

    const container = scrollRef.current;
    const cardFirst = cardRefs.current[0];
    const cardMiddle = cardRefs.current[gamesCount];
    const cardThird = cardRefs.current[gamesCount * 2];

    if (!container || !cardFirst || !cardMiddle || !cardThird) return;

    const setWidth = cardMiddle.offsetLeft - cardFirst.offsetLeft;
    if (setWidth <= 0) return;

    const middleStart = getScrollToCenter(container, cardMiddle);
    const thirdStart = getScrollToCenter(container, cardThird);
    const scrollLeft = container.scrollLeft;

    // Sağa kaydırırken 3. kopyaya girildi → bir set geri al (görsel olarak yine sağa akar)
    if (scrollLeft >= thirdStart - 4) {
      isJumpingRef.current = true;
      container.scrollLeft = scrollLeft - setWidth;
      setCenteredIndex(findCenteredIndex());
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isJumpingRef.current = false;
        });
      });
      return;
    }

    // Sola kaydırırken 1. kopyaya girildi → bir set ileri al
    if (scrollLeft <= middleStart - setWidth + 4) {
      isJumpingRef.current = true;
      container.scrollLeft = scrollLeft + setWidth;
      setCenteredIndex(findCenteredIndex());
      requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          isJumpingRef.current = false;
        });
      });
      return;
    }

    setCenteredIndex(findCenteredIndex());
  }, [gamesCount, findCenteredIndex]);

  const handleScroll = useCallback(() => {
    if (isJumpingRef.current) return;
    pauseAutoPlay();
    maintainInfiniteScroll();
  }, [maintainInfiniteScroll, pauseAutoPlay]);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    const init = () => {
      jumpToIndex(gamesCount);
      setIsReady(true);
    };

    requestAnimationFrame(() => {
      requestAnimationFrame(init);
    });
  }, [gamesCount, jumpToIndex]);

  useEffect(() => {
    const el = scrollRef.current;
    if (!el) return;

    el.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll);

    return () => {
      el.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  const resolveMiddleIndex = useCallback(
    (index) => {
      if (index < gamesCount) return index + gamesCount;
      if (index >= gamesCount * 2) return index - gamesCount;
      return index;
    },
    [gamesCount]
  );

  const scrollToCard = useCallback(
    (index, behavior = 'smooth') => {
      const el = scrollRef.current;
      const targetIndex = resolveMiddleIndex(index);
      const card = cardRefs.current[targetIndex];
      if (!el || !card) return;

      if (findCenteredIndex() === targetIndex) return;

      el.scrollTo({
        left: getScrollToCenter(el, card),
        behavior,
      });
    },
    [resolveMiddleIndex, findCenteredIndex]
  );

  const scrollByArrow = useCallback(
    (direction) => {
      pauseAutoPlay();
      const current = findCenteredIndex();
      const next = direction === 'left' ? current - 1 : current + 1;
      scrollToCard(next);
    },
    [findCenteredIndex, scrollToCard, pauseAutoPlay]
  );

  useEffect(() => {
    if (!isReady) return undefined;

    const advance = () => {
      if (isPausedRef.current || isJumpingRef.current) return;
      const current = findCenteredIndex();
      scrollToCard(current + 1);
    };

    const intervalId = setInterval(advance, AUTO_PLAY_MS);

    return () => {
      clearInterval(intervalId);
      if (resumeTimerRef.current) clearTimeout(resumeTimerRef.current);
    };
  }, [isReady, findCenteredIndex, scrollToCard]);

  return (
    <section id="games" className="section-padding bg-studio-muted dark:bg-studio-night/50">
      <div className="container-narrow">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-2xl">
            <h2 className="text-3xl font-bold tracking-tight text-studio-ink sm:text-4xl dark:text-white">
              Oyunlarımız
            </h2>
            <p className="mt-4 text-gray-600 dark:text-gray-400">
              App Store ve Google Play&apos;de milyonlarca oyuncuya ulaşan yapımlarımız.
              Sağa giderken sona gelince baştan, sola giderken başa gelince sondan devam eder.
            </p>
          </div>

          <div className="flex shrink-0 gap-2">
            <CarouselArrow
              direction="left"
              onClick={() => scrollByArrow('left')}
              label="Önceki oyunlar"
            />
            <CarouselArrow
              direction="right"
              onClick={() => scrollByArrow('right')}
              label="Sonraki oyunlar"
            />
          </div>
        </div>

        <div
          className="relative mt-10 -mx-4 sm:mx-0"
          onMouseEnter={() => pauseAutoPlay(false)}
          onMouseLeave={resumeAutoPlay}
        >
          <div
            className="pointer-events-none absolute left-0 top-0 z-20 h-full w-10 bg-gradient-to-r from-studio-muted to-transparent dark:from-studio-night/90 sm:w-16"
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute right-0 top-0 z-20 h-full w-10 bg-gradient-to-l from-studio-muted to-transparent dark:from-studio-night/90 sm:w-16"
            aria-hidden="true"
          />

          <div
            ref={scrollRef}
            className={`games-carousel flex items-end gap-6 overflow-x-auto px-[max(1rem,calc(50%-160px))] pb-10 pt-6 scroll-smooth transition-opacity duration-300 ${isReady ? 'opacity-100' : 'opacity-0'}`}
            style={{ perspective: '1400px' }}
          >
            {loopGames.map((game, index) => (
              <GameCard
                key={game.loopKey}
                ref={(el) => {
                  cardRefs.current[index] = el;
                }}
                game={game}
                index={index}
                centeredIndex={centeredIndex}
                onSelect={() => {
                  pauseAutoPlay();
                  scrollToCard(index);
                }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function CarouselArrow({ direction, onClick, label }) {
  const Icon = direction === 'left' ? IconChevronLeft : IconChevronRight;

  return (
    <button
      type="button"
      onClick={onClick}
      aria-label={label}
      className="flex h-11 w-11 items-center justify-center rounded-full border border-gray-200 bg-white text-studio-ink shadow-sm transition-all duration-300 hover:border-studio-accent hover:bg-studio-accent hover:text-white dark:border-gray-700 dark:bg-studio-card dark:text-white dark:hover:border-studio-accent dark:hover:bg-studio-accent"
    >
      <Icon />
    </button>
  );
}

const GameCard = forwardRef(function GameCard(
  { game, index, centeredIndex, onSelect },
  ref
) {
  const distance = Math.abs(index - centeredIndex);
  const depth = getDepthStyle(distance);
  const isCenter = distance === 0;

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      onSelect();
    }
  };

  return (
    <article
      ref={ref}
      role="button"
      tabIndex={0}
      onClick={onSelect}
      onKeyDown={handleKeyDown}
      aria-label={`${game.title} — öne getir`}
      aria-current={isCenter ? 'true' : undefined}
      className="game-card-depth shrink-0 cursor-pointer rounded-2xl focus:outline-none focus-visible:ring-2 focus-visible:ring-studio-accent focus-visible:ring-offset-2 dark:focus-visible:ring-offset-studio-night"
      style={{
        width: CARD_WIDTH,
        zIndex: depth.zIndex,
        transform: `scale(${depth.scale}) translateY(${depth.translateY}px)`,
        opacity: depth.opacity,
        scrollSnapAlign: 'center',
      }}
    >
      <div
        className={`flex flex-col overflow-hidden rounded-2xl border bg-white shadow-card transition-[box-shadow,border-color] duration-500 dark:bg-studio-card/80 dark:shadow-card-dark ${
          isCenter
            ? 'border-studio-accent/40 shadow-2xl ring-2 ring-studio-accent/25 dark:border-studio-accent/50'
            : 'border-gray-100 dark:border-gray-700/50'
        }`}
      >
        <div className={`relative aspect-[3/4] bg-gradient-to-br ${game.gradient} p-6`}>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.15),transparent_60%)]" />
          <div className="relative flex h-full flex-col justify-between">
            <span className="inline-flex w-fit rounded-full bg-black/30 px-3 py-1 text-xs font-medium text-white backdrop-blur-sm">
              {game.genre}
            </span>
            <h3 className={`text-2xl font-bold text-white ${game.accent}`}>
              {game.title}
            </h3>
          </div>
        </div>

        <div className="flex flex-1 flex-col p-6">
          <div className="flex items-center gap-1.5">
            <IconStar className="w-4 h-4 text-amber-400" />
            <span className="text-sm font-semibold text-studio-ink dark:text-white">
              {game.rating}
            </span>
            <span className="text-sm text-gray-500 dark:text-gray-400">
              App Store
            </span>
          </div>
          <p className="mt-3 flex-1 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {game.review}
          </p>
          <div
            className="mt-6"
            onClick={(e) => e.stopPropagation()}
            onKeyDown={(e) => e.stopPropagation()}
          >
            <StoreIconButtons />
          </div>
        </div>
      </div>
    </article>
  );
});
