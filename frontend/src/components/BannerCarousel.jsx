import React, { useEffect, useRef, useState, useCallback } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

/**
 * Simple auto-sliding banner carousel with dots and arrow controls.
 * - Auto-advances every `interval` ms
 * - Pauses on hover / touch
 * - Swipeable on touch devices
 */
const BannerCarousel = ({ banners = [], interval = 4000, aspectClass = 'h-40 sm:h-52 md:h-72 lg:h-80' }) => {
  const [index, setIndex] = useState(0);
  const [paused, setPaused] = useState(false);
  const touchStartX = useRef(null);
  const timerRef = useRef(null);
  const count = banners.length;

  const goTo = useCallback((i) => setIndex((i + count) % count), [count]);
  const next = useCallback(() => setIndex(i => (i + 1) % count), [count]);
  const prev = useCallback(() => setIndex(i => (i - 1 + count) % count), [count]);

  useEffect(() => {
    if (paused || count <= 1) return;
    timerRef.current = setInterval(() => setIndex(i => (i + 1) % count), interval);
    return () => clearInterval(timerRef.current);
  }, [paused, interval, count]);

  const onTouchStart = (e) => { touchStartX.current = e.touches[0].clientX; };
  const onTouchEnd = (e) => {
    if (touchStartX.current == null) return;
    const dx = e.changedTouches[0].clientX - touchStartX.current;
    if (Math.abs(dx) > 40) (dx < 0 ? next : prev)();
    touchStartX.current = null;
  };

  if (!count) return null;

  return (
    <div
      className="relative w-full overflow-hidden rounded-md md:rounded-xl group"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
      onTouchStart={onTouchStart}
      onTouchEnd={onTouchEnd}
    >
      <div
        className="flex transition-transform duration-300 ease-out"
        style={{ transform: `translateX(-${index * 100}%)` }}
      >
        {banners.map((b, i) => (
          <div key={i} className={`w-full flex-shrink-0 ${aspectClass}`}>
            <img src={b} alt={`Promo ${i + 1}`} className="w-full h-full object-cover" loading={i === 0 ? 'eager' : 'lazy'} />
          </div>
        ))}
      </div>

      {count > 1 && (
        <>
          {/* Arrows (desktop) */}
          <button
            onClick={prev}
            aria-label="Previous"
            className="hidden md:flex absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronLeft size={20} className="text-gray-800" />
          </button>
          <button
            onClick={next}
            aria-label="Next"
            className="hidden md:flex absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white rounded-full p-2 shadow opacity-0 group-hover:opacity-100 transition-opacity"
          >
            <ChevronRight size={20} className="text-gray-800" />
          </button>

          {/* Dots */}
          <div className="absolute bottom-2 md:bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            {banners.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                aria-label={`Go to slide ${i + 1}`}
                className={`h-1.5 rounded-full transition-all ${i === index ? 'w-6 bg-[#f43397]' : 'w-1.5 bg-white/70 hover:bg-white'}`}
              />
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BannerCarousel;
