import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "WordRonin | Ali Aljahmi",
  description: "Fast paced iPad word game with Slice Mode and an accessible Listen Mode built for players with visual impairments.",
};
import ProjectCircularGallery from "@/components/project-circular-gallery";
import type { GalleryItem } from "@/components/ui/circular-gallery";

const items: GalleryItem[] = [
  {
    common: "Home Screen",
    binomial: "Clear mode choice and fast start",
    photo: { url: "/wordronin/wordroninhomescreen.png", text: "WordRonin home", by: "Ali Aljahmi" },
  },
  {
    common: "Slice Mode",
    binomial: "Fast paced loop with scoring pressure",
    photo: { url: "/wordronin/wordroninslicescreen.png", text: "WordRonin slice", by: "Ali Aljahmi" },
  },
  {
    common: "Listen Mode",
    binomial: "Audio driven interaction designed for accessibility",
    photo: { url: "/wordronin/wordroninlistenscreen.png", text: "WordRonin listen", by: "Ali Aljahmi" },
  },
];

export default function WordRoninPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
      <section className="pt-20 pb-10">
        <div className="mx-auto max-w-5xl px-6">
          <Link href="/#projects" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
            ← Back
          </Link>

          <h1 className="mt-4 text-4xl md:text-6xl font-semibold leading-tight">WordRonin</h1>

          <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
            A fast paced iPad word game where players swipe across letters to form words before time runs out. The game includes both a visual Slice Mode and a Listen Mode designed to support players with visual impairments through audio driven interaction.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border px-3 py-1 text-sm font-semibold">Swift</span>
            <span className="rounded-full border px-3 py-1 text-sm font-semibold">SpriteKit</span>
            <span className="rounded-full border px-3 py-1 text-sm font-semibold">Game Design</span>
            <span className="rounded-full border px-3 py-1 text-sm font-semibold">Accessibility</span>
          </div>

          <div className="mt-6">
            <a
              href="https://testflight.apple.com/join/aYfRNrcq"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            >
              View on TestFlight
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Role and Ownership</h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            WordRonin was built in a small team at the Apple Developer Academy, where I served as Project Manager and Lead Developer. I helped define the product direction, aligned design and engineering decisions, and led gameplay implementation in Swift and SpriteKit. The project required balancing pacing, engagement, and accessibility while shipping a playable experience on iPad.
          </p>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Build Notes</h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            We iterated heavily on pacing, scoring logic, and interaction design to make the experience feel fast but not overwhelming. Building Listen Mode pushed us to rethink interaction entirely and design a version of the game that works through audio cues rather than relying solely on visuals. The result was a more inclusive and thoughtfully designed experience.
          </p>
        </div>
      </section>

      <ProjectCircularGallery
        title="Gameplay Screens"
        items={items}
        heightVh={130}
        radius={500}
      />

      <footer className="py-8 border-t">
        <div className="mx-auto max-w-5xl px-6 flex justify-between items-center text-sm text-muted-foreground">
          <Link href="/#projects" className="font-semibold hover:text-foreground">← Back to projects</Link>
          <span>© 2026 Ali Aljahmi</span>
        </div>
      </footer>
    </main>
    </>
  );
}
