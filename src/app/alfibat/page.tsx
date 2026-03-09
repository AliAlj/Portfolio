import Link from "next/link";
import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";
import ProjectCircularGallery from "@/components/project-circular-gallery";
import type { GalleryItem } from "@/components/ui/circular-gallery";

export const metadata: Metadata = {
  title: "AlfiBaT | Ali Aljahmi",
  description: "iPad app for learning Arabic letters using touch, audio feedback, and guided writing practice.",
};

const items: GalleryItem[] = [
  {
    common: "Alphabet Grid",
    binomial: "Browse letters and jump into focused practice",
    photo: { url: "/alfibat/alphabet.png", text: "AlfiBaT alphabet grid", by: "Ali Aljahmi" },
  },
  {
    common: "Letter Lesson",
    binomial: "Pronunciation plus letter forms in context",
    photo: { url: "/alfibat/letterview.png", text: "AlfiBaT letter lesson", by: "Ali Aljahmi" },
  },
  {
    common: "Name Writing",
    binomial: "Personal practice that keeps people engaged",
    photo: { url: "/alfibat/namewriting.png", text: "AlfiBaT name writing", by: "Ali Aljahmi" },
  },
  {
    common: "Connect Game",
    binomial: "Reinforces recognition through fast matching",
    photo: { url: "/alfibat/connectgame.png", text: "AlfiBaT connect game", by: "Ali Aljahmi" },
  },
];

export default function AlfiBaTPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
      <section className="pt-20 pb-10">
        <div className="mx-auto max-w-5xl px-6">
          <Link href="/#projects" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
            ← Back
          </Link>

          <p className="mt-4 text-sm font-semibold text-muted-foreground">iPad App · Swift Student Challenge · App Store</p>

          <h1 className="mt-2 text-4xl md:text-6xl font-semibold leading-tight">AlfiBaT</h1>

          <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
            A personal iPad app I built to help beginners learn Arabic letters, designed around the exact challenges I faced as a learner.
          </p>

          <div className="mt-6 flex flex-wrap gap-2">
            <span className="rounded-full border px-3 py-1 text-sm font-semibold">SwiftUI</span>
            <span className="rounded-full border px-3 py-1 text-sm font-semibold">PencilKit</span>
            <span className="rounded-full border px-3 py-1 text-sm font-semibold">AVFoundation</span>
            <span className="rounded-full border px-3 py-1 text-sm font-semibold">iPadOS</span>
          </div>

          <div className="mt-6">
            <a
              href="https://apps.apple.com/us/app/alfibat/id6758281390"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block rounded-full bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-80 transition-opacity"
            >
              View on App Store
            </a>
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-6">
          <h2 className="text-2xl md:text-3xl font-semibold">Overview and Build</h2>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            I built AlfiBaT for the Swift Student Challenge as a way to create the kind of learning tool I wished I had when starting to learn Arabic. I focused on the areas that felt most confusing to me: pronunciation, letter shapes inside words, and writing practice.
          </p>

          <p className="mt-4 text-base md:text-lg text-muted-foreground">
            The app is structured around short, focused learning loops. Users hear a letter, see how it behaves in context, and then practice writing it directly on the iPad. I added a name writing screen to make the experience more personal and engaging.
          </p>

          <div className="mt-8 rounded-xl border p-6">
            <h3 className="text-lg font-semibold">Design and Tools</h3>
            <ul className="mt-4 space-y-2 text-muted-foreground">
              <li>SwiftUI for clean, reusable UI components</li>
              <li>AVFoundation for clear audio pronunciation</li>
              <li>Pencil and touch input for writing practice</li>
              <li>Designed around real learner pain points</li>
            </ul>
          </div>
        </div>
      </section>

      <ProjectCircularGallery
        title="Screens"
        items={items}
        heightVh={130}
        radius={520}
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
