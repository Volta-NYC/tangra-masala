"use client";

import { useEffect, useMemo, useRef } from "react";

type GalleryImage = {
  alt: string;
  src: string;
};

export function SpinGallery({ images }: { images: GalleryImage[] }) {
  const trackRef = useRef<HTMLDivElement>(null);
  const wrapRef = useRef<HTMLDivElement>(null);
  const previousRef = useRef<HTMLButtonElement>(null);
  const nextRef = useRef<HTMLButtonElement>(null);
  const doubledImages = useMemo(() => [...images, ...images], [images]);

  useEffect(() => {
    const track = trackRef.current;
    const wrap = wrapRef.current;
    const previous = previousRef.current;
    const next = nextRef.current;

    if (!track || !wrap || !previous || !next || images.length === 0) {
      return;
    }

    const reducedMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    let cardDistance = 440;
    let loopWidth = cardDistance * images.length;
    let currentX = 0;
    let targetX = 0;
    let animationId = 0;
    let isHovering = false;
    let isTouching = false;
    let pauseUntil = 0;
    let touchStartX = 0;
    let touchStartY = 0;
    let touchStartTarget = 0;
    let isHorizontalSwipe = false;

    const measure = () => {
      const firstCard = track.querySelector<HTMLElement>(".spin-gallery-card");
      if (!firstCard) {
        return;
      }

      const styles = window.getComputedStyle(firstCard);
      const marginRight = parseFloat(styles.marginRight || "0");
      cardDistance = firstCard.offsetWidth + marginRight;
      loopWidth = cardDistance * images.length;
    };

    const normalize = () => {
      if (loopWidth <= 0) {
        return;
      }

      while (targetX >= loopWidth) targetX -= loopWidth;
      while (targetX < 0) targetX += loopWidth;
      while (currentX >= loopWidth) currentX -= loopWidth;
      while (currentX < 0) currentX += loopWidth;
    };

    const nudge = (amount: number) => {
      targetX += amount;
      pauseUntil = performance.now() + 900;
      normalize();
    };

    const animate = () => {
      if (!reducedMotion && !isHovering && !isTouching && performance.now() > pauseUntil) {
        targetX += 0.36;
      }

      normalize();
      currentX += (targetX - currentX) * 0.08;
      track.style.transform = `translate3d(${-currentX}px, 0, 0)`;
      animationId = requestAnimationFrame(animate);
    };

    const onWheel = (event: WheelEvent) => {
      event.preventDefault();
      nudge(event.deltaY || event.deltaX);
    };

    const onPointerEnter = () => {
      isHovering = true;
    };

    const onPointerLeave = () => {
      isHovering = false;
    };

    const onTouchStart = (event: TouchEvent) => {
      isTouching = true;
      touchStartX = event.touches[0]?.clientX ?? 0;
      touchStartY = event.touches[0]?.clientY ?? 0;
      touchStartTarget = targetX;
      isHorizontalSwipe = false;
    };

    const onTouchMove = (event: TouchEvent) => {
      const currentTouchX = event.touches[0]?.clientX ?? touchStartX;
      const currentTouchY = event.touches[0]?.clientY ?? touchStartY;
      const deltaX = touchStartX - currentTouchX;
      const deltaY = touchStartY - currentTouchY;

      if (!isHorizontalSwipe && Math.abs(deltaY) > Math.abs(deltaX)) {
        return;
      }

      isHorizontalSwipe = true;
      targetX = touchStartTarget + deltaX;
      normalize();
    };

    const onTouchEnd = () => {
      isTouching = false;
      pauseUntil = performance.now() + 900;
    };

    const onPrevious = () => nudge(-cardDistance);
    const onNext = () => nudge(cardDistance);

    measure();
    window.addEventListener("resize", measure);
    wrap.addEventListener("wheel", onWheel, { passive: false });
    wrap.addEventListener("pointerenter", onPointerEnter);
    wrap.addEventListener("pointerleave", onPointerLeave);
    wrap.addEventListener("touchstart", onTouchStart, { passive: true });
    wrap.addEventListener("touchmove", onTouchMove, { passive: true });
    wrap.addEventListener("touchend", onTouchEnd);
    previous.addEventListener("click", onPrevious);
    next.addEventListener("click", onNext);
    animationId = requestAnimationFrame(animate);

    return () => {
      cancelAnimationFrame(animationId);
      window.removeEventListener("resize", measure);
      wrap.removeEventListener("wheel", onWheel);
      wrap.removeEventListener("pointerenter", onPointerEnter);
      wrap.removeEventListener("pointerleave", onPointerLeave);
      wrap.removeEventListener("touchstart", onTouchStart);
      wrap.removeEventListener("touchmove", onTouchMove);
      wrap.removeEventListener("touchend", onTouchEnd);
      previous.removeEventListener("click", onPrevious);
      next.removeEventListener("click", onNext);
    };
  }, [images.length]);

  return (
    <section className="spin-gallery-section" aria-labelledby="gallery-title">
      <div className="spin-gallery-sticky">
        <div className="spin-gallery-header scroll-reveal reveal-up">
          <p className="eyebrow text-gold">From Grand Avenue</p>
          <h2 className="spin-gallery-title" id="gallery-title">
            Plates in motion
          </h2>
          <div className="spin-gallery-controls" aria-label="Gallery controls">
            <button
              aria-label="Previous gallery image"
              className="spin-gallery-control"
              ref={previousRef}
              type="button"
            >
              &larr;
            </button>
            <button
              aria-label="Next gallery image"
              className="spin-gallery-control"
              ref={nextRef}
              type="button"
            >
              &rarr;
            </button>
          </div>
        </div>

        <div className="spin-gallery-track-wrap" ref={wrapRef}>
          <div className="spin-gallery-track" ref={trackRef}>
            {doubledImages.map((image, index) => (
              <figure
                aria-hidden={index >= images.length}
                className="spin-gallery-card"
                key={`${image.src}-${index}`}
              >
                <img alt={index < images.length ? image.alt : ""} src={image.src} />
              </figure>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
