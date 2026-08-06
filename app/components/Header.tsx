"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const profileIsActive = pathname === "/profile";

  return (
    <header className="sticky top-0 z-50 h-[76px] border-b border-rule bg-header-glass backdrop-blur-[6px] backdrop-saturate-[1.35] max-[560px]:h-[68px]">
      <div className="mx-[var(--page-gutter)] grid h-[76px] w-auto grid-cols-[1fr_auto] items-center border-x border-rule max-[560px]:mx-0 max-[560px]:h-[68px] max-[560px]:w-full max-[560px]:border-x-0">
        <Link
          className="group inline-flex h-full w-fit items-center gap-[13px] px-[22px] font-[Arial_Narrow,Roboto_Condensed,Arial,sans-serif] text-[15px] font-extrabold tracking-[-.015em] uppercase [font-stretch:condensed] max-[560px]:px-4 max-[560px]:text-sm"
          href="/"
          aria-label="Shashank H D — home"
        >
          <span
            className="h-0.5 w-[18px] origin-left bg-blue transition-[width,background-color] duration-[180ms] group-hover:w-[26px] group-hover:bg-signal"
            aria-hidden="true"
          />
          <span>Shashank H D</span>
        </Link>

        <div className="flex h-full items-center justify-end gap-1.5 px-3 max-[560px]:gap-0.5 max-[560px]:pr-3 max-[560px]:pl-0">
          <nav aria-label="Primary navigation">
            <Link
              className="relative inline-flex h-[42px] items-center px-3 font-mono text-[10px]/none font-semibold tracking-[.1em] text-muted uppercase transition-colors duration-[160ms] after:absolute after:right-3 after:bottom-[5px] after:left-3 after:h-0.5 after:origin-left after:scale-x-0 after:bg-blue after:transition-transform after:duration-[180ms] hover:text-ink hover:after:scale-x-100 aria-[current=page]:text-ink aria-[current=page]:after:scale-x-100 max-[560px]:px-2 max-[560px]:after:right-2 max-[560px]:after:left-2"
              href="/profile"
              aria-current={profileIsActive ? "page" : undefined}
            >
              Profile
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
