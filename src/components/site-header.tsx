"use client";

import Link from "next/link";

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-50 border-b bg-background/80 backdrop-blur">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
        <Link href="/" className="text-lg font-extrabold tracking-tight">
          Ali Aljahmi
        </Link>

        <nav className="flex items-center gap-4 text-sm font-semibold text-muted-foreground">
          <Link href="/#about" className="hover:text-foreground">About</Link>
          <Link href="/#projects" className="hover:text-foreground">Projects</Link>
          <Link href="/#skills" className="hover:text-foreground">Skills</Link>
          <Link href="/#connect" className="hover:text-foreground">Connect</Link>
        </nav>
      </div>
    </header>
  );
}
