"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

export default function Header() {
  const pathname = usePathname();
  const profileIsActive = pathname === "/profile";

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="identity group" href="/" aria-label="Shashank H D — home">
          <span className="identity-rule" aria-hidden="true" />
          <span>Shashank H D</span>
        </Link>

        <div className="header-actions">
          <nav aria-label="Primary navigation">
            <Link
              className="profile-link"
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
