"use client";

import React, { useEffect, useRef, useCallback, HTMLAttributes } from "react";

const cn = (...classes: (string | undefined | null | false)[]) =>
  classes.filter(Boolean).join(" ");

export interface GalleryItem {
  common: string;
  binomial: string;
  photo: {
    url: string;
    text: string;
    pos?: string;
    by: string;
  };
}

interface CircularGalleryProps extends HTMLAttributes<HTMLDivElement> {
  items: GalleryItem[];
  radius?: number;
  autoRotateSpeed?: number;
}

const CircularGallery = React.forwardRef<HTMLDivElement, CircularGalleryProps>(
  ({ items, className, radius = 600, autoRotateSpeed = 0.02, ...props }, ref) => {
    const rotationRef = useRef(0);
    const isScrollingRef = useRef(false);
    const scrollTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
    const animationFrameRef = useRef<number | null>(null);
    const carouselRef = useRef<HTMLDivElement>(null);
    const itemRefs = useRef<(HTMLDivElement | null)[]>([]);

    const anglePerItem = 360 / Math.max(items.length, 1);

    const updateCarousel = useCallback(() => {
      if (!carouselRef.current) return;
      carouselRef.current.style.transform = `rotateY(${rotationRef.current}deg)`;

      items.forEach((_, i) => {
        const el = itemRefs.current[i];
        if (!el) return;
        const itemAngle = i * anglePerItem;
        const totalRotation = ((rotationRef.current % 360) + 360) % 360;
        const relativeAngle = (itemAngle + totalRotation + 360) % 360;
        const normalizedAngle = Math.abs(relativeAngle > 180 ? 360 - relativeAngle : relativeAngle);
        el.style.opacity = String(Math.max(0.25, 1 - normalizedAngle / 180));
      });
    }, [items, anglePerItem]);

    useEffect(() => {
      const handleScroll = () => {
        isScrollingRef.current = true;
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);

        const scrollableHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollProgress = scrollableHeight > 0 ? window.scrollY / scrollableHeight : 0;
        rotationRef.current = scrollProgress * 360;

        scrollTimeoutRef.current = setTimeout(() => {
          isScrollingRef.current = false;
        }, 150);
      };

      window.addEventListener("scroll", handleScroll, { passive: true });
      return () => {
        window.removeEventListener("scroll", handleScroll);
        if (scrollTimeoutRef.current) clearTimeout(scrollTimeoutRef.current);
      };
    }, []);

    useEffect(() => {
      const loop = () => {
        if (!isScrollingRef.current) {
          rotationRef.current += autoRotateSpeed;
        }
        updateCarousel();
        animationFrameRef.current = requestAnimationFrame(loop);
      };

      animationFrameRef.current = requestAnimationFrame(loop);
      return () => {
        if (animationFrameRef.current) cancelAnimationFrame(animationFrameRef.current);
      };
    }, [autoRotateSpeed, updateCarousel]);

    return (
      <div
        ref={ref}
        role="region"
        aria-label="Circular 3D Gallery"
        className={cn("relative w-full h-full flex items-center justify-center", className)}
        style={{ perspective: "2000px" }}
        {...props}
      >
        <div
          ref={carouselRef}
          className="relative w-full h-full"
          style={{
            transform: `rotateY(0deg)`,
            transformStyle: "preserve-3d",
            willChange: "transform",
          }}
        >
          {items.map((item, i) => {
            const itemAngle = i * anglePerItem;

            return (
              <div
                key={`${item.common}-${item.photo.url}-${i}`}
                ref={(el) => { itemRefs.current[i] = el; }}
                role="group"
                aria-label={item.common}
                className="absolute w-[500px] h-[360px] md:w-[620px] md:h-[440px]"
                style={{
                  transform: `rotateY(${itemAngle}deg) translateZ(${radius}px)`,
                  left: "50%",
                  top: "50%",
                  marginLeft: "-310px",
                  marginTop: "-220px",
                  opacity: 0.25,
                }}
              >
                <div className="relative w-full h-full rounded-lg shadow-2xl overflow-hidden border border-border bg-card/70 dark:bg-card/30">
                  <img
                    src={item.photo.url}
                    alt={item.photo.text}
                    className="absolute inset-0 w-full h-full object-cover"
                    style={{ objectPosition: item.photo.pos || "center" }}
                  />
                  <div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/90 via-black/60 to-transparent text-white">
                    <h2 className="text-xl font-bold drop-shadow">{item.common}</h2>
                    <em className="text-sm italic opacity-90">{item.binomial}</em>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    );
  }
);

CircularGallery.displayName = "CircularGallery";

export { CircularGallery };
