"use client";

import React from "react";
import { CircularGallery, GalleryItem } from "@/components/ui/circular-gallery";

export default function ProjectCircularGallery(props: {
  title: string;
  subtitle?: string;
  items: GalleryItem[];
  heightVh?: number;
  radius?: number;
}) {
  const height = props.heightVh ?? 220;
  const radius = props.radius ?? 520;

  return (
    <>
      {/* Mobile: simple image grid */}
      <section className="md:hidden py-12 bg-background">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl font-bold mb-6">{props.title}</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {props.items.map((item, i) => (
              <div key={i} className="rounded-xl overflow-hidden border">
                <img src={item.photo.url} alt={item.photo.text} className="w-full object-cover" />
                <div className="p-3">
                  <p className="font-semibold">{item.common}</p>
                  <p className="text-sm text-muted-foreground">{item.binomial}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Desktop: circular gallery */}
      <section className="hidden md:block w-full bg-background text-foreground" style={{ height: `${height}vh` }}>
        <div className="w-full h-screen sticky top-0 flex flex-col items-center justify-center overflow-hidden">
          <div className="text-center mb-8 absolute top-16 z-10 px-6">
            <h2 className="text-3xl md:text-4xl font-bold">{props.title}</h2>
            {props.subtitle ? <p className="text-muted-foreground mt-2">{props.subtitle}</p> : null}
            <p className="text-muted-foreground mt-1 text-sm">Scroll to rotate</p>
          </div>

          <div className="w-full h-full">
            <CircularGallery items={props.items} radius={radius} autoRotateSpeed={0.18} />
          </div>
        </div>
      </section>
    </>
  );
}
