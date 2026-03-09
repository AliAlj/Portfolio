"use client";

import { useRef, useEffect, type ReactNode } from "react";
import gsap from "gsap";

export function ChromaOverlay({
  children,
  radius = 300,
  damping = 0.45,
  fadeOut = 0.6,
  ease = "power3.out",
}: {
  children: ReactNode;
  radius?: number;
  damping?: number;
  fadeOut?: number;
  ease?: string;
}) {
  const rootRef = useRef<HTMLDivElement>(null);
  const fadeRef = useRef<HTMLDivElement>(null);
  const setX = useRef<((val: number | string) => void) | null>(null);
  const setY = useRef<((val: number | string) => void) | null>(null);
  const pos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const el = rootRef.current;
    if (!el) return;
    setX.current = gsap.quickSetter(el, "--x", "px") as (val: number | string) => void;
    setY.current = gsap.quickSetter(el, "--y", "px") as (val: number | string) => void;
    const { width, height } = el.getBoundingClientRect();
    pos.current = { x: width / 2, y: height / 2 };
    setX.current(pos.current.x);
    setY.current(pos.current.y);
  }, []);

  const moveTo = (x: number, y: number) => {
    gsap.to(pos.current, {
      x,
      y,
      duration: damping,
      ease,
      onUpdate: () => {
        setX.current?.(pos.current.x);
        setY.current?.(pos.current.y);
      },
      overwrite: true,
    });
  };

  return (
    <div
      ref={rootRef}
      className="relative"
      style={{ "--r": `${radius}px` } as React.CSSProperties}
      onPointerMove={(e) => {
        const r = rootRef.current!.getBoundingClientRect();
        moveTo(e.clientX - r.left, e.clientY - r.top);
        gsap.to(fadeRef.current, { opacity: 0, duration: 0.25, overwrite: true });
      }}
      onPointerLeave={() => {
        gsap.to(fadeRef.current, { opacity: 1, duration: fadeOut, overwrite: true });
      }}
    >
      {children}
      <div className="chroma-overlay" aria-hidden="true" />
      <div ref={fadeRef} className="chroma-fade" aria-hidden="true" />
    </div>
  );
}
