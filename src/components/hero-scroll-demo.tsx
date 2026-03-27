"use client";

export function HeroScrollDemo() {
  return (
    <section className="pt-20 pb-10">
      <div className="mx-auto max-w-5xl px-6">
        <p className="text-5xl md:text-6xl font-bold">Ali Aljahmi</p>
        <p className="text-sm font-semibold text-muted-foreground">
          Computer Science Graduate · Apple Developer Academy Associate Learner
        </p>

        <h1 className="mt-3 text-4xl md:text-5xl font-bold leading-tight tracking-tight">
          Building clear,<br />iterative products
        </h1>

        <p className="mt-4 max-w-2xl text-base md:text-lg text-muted-foreground">
          I build iOS and web experiences with a focus on UX clarity, fast iteration, and measurable feedback loops.
        </p>

        <div className="mt-6 flex flex-wrap gap-3">
          <a href="#projects" className="rounded-full bg-foreground px-5 py-2 text-sm font-bold text-background">
            View projects
          </a>
          <a href="#about" className="rounded-full border px-5 py-2 text-sm font-bold hover:bg-muted transition-colors">
            About me
          </a>
          <a href="#connect" className="rounded-full border px-5 py-2 text-sm font-bold hover:bg-muted transition-colors">
            Connect
          </a>
        </div>
      </div>
    </section>
  );
}
