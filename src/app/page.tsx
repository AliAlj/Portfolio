import Link from "next/link";
import { SiteHeader } from "@/components/site-header";
import { HeroScrollDemo } from "@/components/hero-scroll-demo";
import { ChromaOverlay } from "@/components/chroma-overlay";
import { ChromaCard } from "@/components/chroma-card";
import { assetPath } from "@/lib/asset-path";

export default function Home() {
  return (
    <>
      <SiteHeader />

      <main id="top">
        {/* Hero */}
        <HeroScrollDemo />

        {/* About */}
        <section id="about" className="py-16">
          <div className="mx-auto max-w-5xl px-6 flex flex-col md:flex-row gap-10 items-start">
            <div className="flex-1">
              <h2 className="text-3xl md:text-4xl font-semibold">About</h2>
              <p className="mt-4 text-base md:text-lg text-muted-foreground">
                I am Ali Aljahmi, a Computer Science graduate from the University of Michigan Dearborn and an Associate Learner at the Apple Developer Academy. I enjoy building early stage products, learning from real feedback, and improving experiences through iteration.
              </p>
            </div>

            <div className="w-full md:w-80 rounded-xl border p-6 shrink-0">
              <h3 className="text-lg font-semibold">What I offer</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground list-disc list-inside">
                <li>Turn open ended problems into concrete next steps</li>
                <li>Organize complex work into clear, usable outputs</li>
                <li>Communicate decisions and progress clearly</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Projects */}
        <section id="projects" className="py-16">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl md:text-4xl font-semibold">Projects</h2>

            <ChromaOverlay radius={350}>
              <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-8">

                {/* AlfiBaT */}
                <ChromaCard className="group/card relative rounded-2xl border p-8 flex flex-col overflow-hidden transition-colors bg-gradient-to-br from-violet-500/35 to-transparent">
                  <Link href="/alfibat" className="absolute inset-0 rounded-2xl z-[1]" aria-label="View AlfiBaT project" />
                  <div className="flex items-start justify-between gap-4">
                    <img src={assetPath("/logos/alfibat.png")} alt="AlfiBaT logo" className="w-20 h-20 rounded-2xl object-cover" />
                    <span className="rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground whitespace-nowrap">Complete</span>
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <div className="h-6 group-hover/card:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/card:bg-foreground transition-all duration-200 origin-center shrink-0" />
                    <h3 className="text-2xl font-semibold group-hover/card:translate-x-1 transition duration-200">AlfiBaT</h3>
                  </div>
                  <p className="mt-3 text-base text-muted-foreground flex-1">iPad learning experience for Arabic letters using touch, audio feedback, and guided practice.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">SwiftUI</span>
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">PencilKit</span>
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">Language learning UX</span>
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground">Outcome: Built focused learning loops for recognition, pronunciation, and writing practice.</p>
                  <div className="relative z-[2] mt-5 flex gap-4">
                    <Link href="/alfibat" className="text-sm font-semibold hover:underline">View project →</Link>
                    <a href="https://apps.apple.com/us/app/alfibat/id6758281390" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline">App Store →</a>
                  </div>
                </ChromaCard>

                {/* WordRonin */}
                <ChromaCard className="group/card relative rounded-2xl border p-8 flex flex-col overflow-hidden transition-colors bg-gradient-to-br from-emerald-500/35 to-transparent">
                  <Link href="/wordronin" className="absolute inset-0 rounded-2xl z-[1]" aria-label="View WordRonin project" />
                  <div className="flex items-start justify-between gap-4">
                    <img src={assetPath("/logos/wordronin.png")} alt="WordRonin logo" className="w-20 h-20 rounded-2xl object-cover" />
                    <span className="rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground whitespace-nowrap">Complete</span>
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <div className="h-6 group-hover/card:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/card:bg-foreground transition-all duration-200 origin-center shrink-0" />
                    <h3 className="text-2xl font-semibold group-hover/card:translate-x-1 transition duration-200">WordRonin</h3>
                  </div>
                  <p className="mt-3 text-base text-muted-foreground flex-1">Fast paced word game exploring engagement, scoring systems, and real time player feedback.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">iOS</span>
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">Game loop</span>
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">Engagement design</span>
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground">Outcome: Implemented a core gameplay loop designed for fast iteration and playtesting.</p>
                  <div className="relative z-[2] mt-5 flex gap-4">
                    <Link href="/wordronin" className="text-sm font-semibold hover:underline">View project →</Link>
                    <a href="https://testflight.apple.com/join/aYfRNrcq" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline">TestFlight →</a>
                  </div>
                </ChromaCard>

                {/* REVO */}
                <ChromaCard className="group/card relative rounded-2xl border p-8 flex flex-col overflow-hidden transition-colors bg-gradient-to-br from-rose-500/35 to-transparent">
                  <Link href="/revo" className="absolute inset-0 rounded-2xl z-[1]" aria-label="View REVO project" />
                  <div className="flex items-start justify-end gap-4">
                    <span className="rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground whitespace-nowrap">Complete</span>
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <div className="h-6 group-hover/card:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/card:bg-foreground transition-all duration-200 origin-center shrink-0" />
                    <h3 className="text-2xl font-semibold group-hover/card:translate-x-1 transition duration-200">REVO</h3>
                  </div>
                  <p className="mt-3 text-base text-muted-foreground flex-1">Research framework for evaluating reasoning and decision behavior of LLM based autonomous agents in CARLA.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">Python</span>
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">CARLA</span>
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">LLM Evaluation</span>
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground">Outcome: Built an evaluation and visualization pipeline to analyze agent decision behavior across scenarios.</p>
                  <div className="relative z-[2] mt-5 flex gap-4">
                    <a href="https://github.com/AliAtUmich/REVO-LLM-Autonomous-Driving" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline">Source Code →</a>
                  </div>
                </ChromaCard>

                {/* AimGame */}
                <ChromaCard className="group/card relative rounded-2xl border p-8 flex flex-col overflow-hidden transition-colors bg-gradient-to-br from-amber-500/35 to-transparent">
                  <Link href="/aimgame" className="absolute inset-0 rounded-2xl z-[1]" aria-label="View AimGame project" />
                  <div className="flex items-start justify-between gap-4">
                    <img src={assetPath("/logos/aimgame.png")} alt="AimGame logo" className="w-20 h-20 rounded-2xl object-cover" />
                    <span className="rounded-full border px-3 py-1 text-xs font-semibold text-muted-foreground whitespace-nowrap">Complete</span>
                  </div>
                  <div className="mt-5 flex items-center gap-2">
                    <div className="h-6 group-hover/card:h-8 w-1 rounded-tr-full rounded-br-full bg-neutral-300 dark:bg-neutral-700 group-hover/card:bg-foreground transition-all duration-200 origin-center shrink-0" />
                    <h3 className="text-2xl font-semibold group-hover/card:translate-x-1 transition duration-200">AimGame</h3>
                  </div>
                  <p className="mt-3 text-base text-muted-foreground flex-1">Web based aim trainer focused on input behavior, configuration, and measurable performance feedback.</p>
                  <div className="mt-4 flex flex-wrap gap-2">
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">JavaScript</span>
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">HTML</span>
                    <span className="rounded-full border px-3 py-1 text-sm font-semibold">CSS</span>
                  </div>
                  <p className="mt-5 text-sm text-muted-foreground">Outcome: Shipped a live demo with settings that directly affect measurable performance.</p>
                  <div className="relative z-[2] mt-5 flex gap-4">
                    <a href="https://aliatumich.github.io/AimGame/" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline">Live Demo →</a>
                    <a href="https://github.com/AliAtUmich/AimGame" target="_blank" rel="noopener noreferrer" className="text-sm font-semibold hover:underline">Source Code →</a>
                  </div>
                </ChromaCard>

              </div>
            </ChromaOverlay>
          </div>
        </section>

        {/* Skills */}
        <section id="skills" className="py-16 border-t">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl md:text-4xl font-semibold">Skills</h2>

            <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="rounded-xl border p-6">
                <h3 className="text-lg font-semibold">Development</h3>
                <p className="mt-2 text-muted-foreground">SwiftUI, JavaScript, Python, HTML, CSS, Git</p>
              </div>
              <div className="rounded-xl border p-6">
                <h3 className="text-lg font-semibold">Product and UX</h3>
                <p className="mt-2 text-muted-foreground">Prototyping, feedback driven iteration, interaction design</p>
              </div>
              <div className="rounded-xl border p-6">
                <h3 className="text-lg font-semibold">Analytics mindset</h3>
                <p className="mt-2 text-muted-foreground">Evaluation, visualization, insight synthesis</p>
              </div>
            </div>
          </div>
        </section>

        {/* Connect */}
        <section id="connect" className="py-20 border-t text-center">
          <div className="mx-auto max-w-5xl px-6">
            <h2 className="text-3xl md:text-4xl font-semibold">Connect</h2>
            <p className="mt-4 text-muted-foreground">Open to collaboration, internships, and conversations about building thoughtful digital products.</p>

            <div className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4 max-w-2xl mx-auto">
              <a href="https://github.com/AliAlj" target="_blank" rel="noopener noreferrer" className="rounded-xl border p-6 text-center hover:bg-muted transition-colors">
                <p className="font-semibold">GitHub</p>
                <p className="mt-1 text-muted-foreground">/AliAlj</p>
              </a>
              <a href="https://linkedin.com/in/ali-alj" target="_blank" rel="noopener noreferrer" className="rounded-xl border p-6 text-center hover:bg-muted transition-colors">
                <p className="font-semibold">LinkedIn</p>
                <p className="mt-1 text-muted-foreground">/ali-alj</p>
              </a>
              <a href="mailto:alimjahmi@gmail.com" className="rounded-xl border p-6 text-center hover:bg-muted transition-colors">
                <p className="font-semibold">Email</p>
                <p className="mt-1 text-muted-foreground">alimjahmi@gmail.com</p>
              </a>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="py-6 border-t">
          <div className="mx-auto max-w-5xl px-6 flex flex-col sm:flex-row justify-between items-center gap-2 text-sm text-muted-foreground">
            <span>© 2026 Ali Aljahmi</span>
            <Link href="/privacy-policy" className="hover:underline">Privacy Policy</Link>
          </div>
        </footer>
      </main>
    </>
  );
}
