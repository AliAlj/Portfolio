import type { Metadata } from "next";
import { SiteHeader } from "@/components/site-header";

export const metadata: Metadata = {
  title: "REVO | Ali Aljahmi",
  description: "Research framework for evaluating reasoning and decision behavior of LLM-based autonomous agents in CARLA.",
};

export default function REVOPage() {
  return (
    <>
      <SiteHeader />
      <main className="min-h-screen">
        <section className="pt-20 pb-10">
          <div className="mx-auto max-w-5xl px-6">
            <a href="/#projects" className="text-sm font-semibold text-muted-foreground hover:text-foreground">
              ← Back
            </a>

            <p className="mt-4 text-sm font-semibold text-muted-foreground">Research · Python · Autonomous Driving</p>

            <h1 className="mt-2 text-4xl md:text-6xl font-semibold leading-tight">REVO</h1>

            <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
              A research framework for evaluating the reasoning and decision behavior of LLM-based autonomous agents operating in the CARLA driving simulator. REVO provides structured scenario testing, behavior logging, and a visualization pipeline to surface how agents respond to complex traffic situations.
            </p>

            <div className="mt-6 flex flex-wrap gap-2">
              <span className="rounded-full border px-3 py-1 text-sm font-semibold">Python</span>
              <span className="rounded-full border px-3 py-1 text-sm font-semibold">CARLA</span>
              <span className="rounded-full border px-3 py-1 text-sm font-semibold">LLM Evaluation</span>
              <span className="rounded-full border px-3 py-1 text-sm font-semibold">Autonomous Agents</span>
            </div>

            <div className="mt-6">
              <a
                href="https://github.com/AliAtUmich/REVO-LLM-Autonomous-Driving"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block rounded-full bg-foreground text-background px-5 py-2 text-sm font-semibold hover:opacity-80 transition-opacity"
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
              REVO was built to answer a specific research question: how do LLM-based agents actually make decisions when placed in realistic driving scenarios? Rather than just measuring outcomes, the framework captures the reasoning chain behind each agent decision, making it possible to analyze where and why agents fail.
            </p>

            <p className="mt-4 text-base md:text-lg text-muted-foreground">
              Scenarios are run inside CARLA, a high-fidelity open-source driving simulator. Agents receive scene context through structured prompts and respond with driving actions. REVO logs each decision alongside the agent's reasoning and visualizes behavior patterns across scenario runs.
            </p>

            <div className="mt-8 rounded-xl border p-6">
              <h3 className="text-lg font-semibold">Build Details</h3>
              <ul className="mt-4 space-y-2 text-muted-foreground">
                <li>CARLA simulator for realistic driving scenarios</li>
                <li>Structured prompting pipeline for LLM agent control</li>
                <li>Decision and reasoning logging per scenario step</li>
                <li>Visualization pipeline for behavior analysis across runs</li>
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
