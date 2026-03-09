import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "AimGame | Ali Aljahmi",
  description: "Browser-based aim trainer with configurable difficulty and measurable performance feedback.",
};

export default function AimGamePage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <section className="pt-20 pb-10">
          <div className="mx-auto max-w-5xl px-6">
            <a href="/#projects" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
              ← Back
            </a>

            <p className="mt-4 text-sm font-semibold text-muted-foreground">Web · JavaScript · HTML Canvas</p>

            <h1 className="mt-2 text-4xl md:text-6xl font-semibold leading-tight">AimGame</h1>

            <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
              A browser-based aim trainer built to explore input behavior, configurable difficulty, and measurable performance feedback. Players can adjust target size, speed, and timing to directly observe how settings affect their accuracy and reaction time.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border px-3 py-1 text-sm font-semibold">JavaScript</span>
              <span className="rounded-full border px-3 py-1 text-sm font-semibold">HTML</span>
              <span className="rounded-full border px-3 py-1 text-sm font-semibold">CSS</span>
              <span className="rounded-full border px-3 py-1 text-sm font-semibold">Canvas API</span>
            </div>

            <div className="mt-6 flex gap-3">
              <a
                href="https://aliatumich.github.io/AimGame/"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-80 transition-opacity"
              >
                Live Demo
              </a>
              <a
                href="https://github.com/AliAtUmich/AimGame"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full border px-5 py-2 text-sm font-semibold hover:bg-muted transition-colors"
              >
                Source Code
              </a>
            </div>
          </div>
        </section>

        <section className="py-12">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-2xl md:text-3xl font-semibold">Overview</h2>

            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              AimGame started as an exploration of how configurable parameters affect perceived difficulty and measurable skill. Rather than building a fixed experience, I designed the game around settings that players can tune — target size, spawn rate, and movement speed — so they can directly see how each variable affects their performance stats.
            </p>

            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              The project gave me hands-on experience with the Canvas API, real-time game loop logic, and designing feedback systems that feel responsive and informative.
            </p>

            <div className="mt-8 rounded-xl border p-6">
              <h3 className="text-lg font-semibold">Build Details</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>Canvas API for real-time rendering and hit detection</li>
                <li>Configurable settings that directly affect performance metrics</li>
                <li>Accuracy and reaction time tracked per session</li>
                <li>Deployed as a static site via GitHub Pages</li>
              </ul>
            </div>
          </div>
        </section>

        <footer className="py-8 border-t">
          <div className="mx-auto max-w-5xl px-6 flex justify-between items-center text-sm text-muted-foreground">
            <a href="/#projects" className="font-semibold hover:text-foreground">← Back to projects</a>
            <span>© 2026 Ali Aljahmi</span>
          </div>
        </footer>
      </main>
    </>
  );
}
