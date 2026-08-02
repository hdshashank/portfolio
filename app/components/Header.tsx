"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
import ThemeToggle from "./ThemeToggle";

const navigation = [
  { label: "Profile", href: "/profile" },
  { label: "Experience", href: "/#experience" },
  { label: "Skills", href: "/#skills" },
  { label: "Projects", href: "/#projects" },
] as const;

const focusableSelector =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

function MenuIcon({ open }: { open: boolean }) {
  return (
    <span className="relative block size-5" aria-hidden="true">
      <span className={`menu-line top-[6px] ${open ? "translate-y-[3px] rotate-45" : ""}`} />
      <span className={`menu-line top-[12px] ${open ? "-translate-y-[3px] -rotate-45" : ""}`} />
    </span>
  );
}

function ArrowIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 18 18" className="size-[18px]">
      <path d="M4 14 14 4M6 4h8v8" fill="none" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

export default function Header() {
  const pathname = usePathname();
  const [menuOpen, setMenuOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const drawerRef = useRef<HTMLDivElement>(null);

  const contactHref = pathname === "/" ? "#connect" : "/#connect";

  function closeMenu({ restoreFocus = true } = {}) {
    setMenuOpen(false);
    if (restoreFocus) requestAnimationFrame(() => triggerRef.current?.focus());
  }

  useEffect(() => {
    if (!menuOpen) return;

    const drawer = drawerRef.current;
    const previousOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";
    drawer?.querySelector<HTMLElement>(focusableSelector)?.focus();

    function handleKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        event.preventDefault();
        closeMenu();
        return;
      }

      if (event.key !== "Tab" || !drawer) return;
      const focusable = Array.from(drawer.querySelectorAll<HTMLElement>(focusableSelector));
      const first = focusable[0];
      const last = focusable.at(-1);

      if (event.shiftKey && document.activeElement === first) {
        event.preventDefault();
        last?.focus();
      } else if (!event.shiftKey && document.activeElement === last) {
        event.preventDefault();
        first?.focus();
      }
    }

    document.addEventListener("keydown", handleKeyDown);
    return () => {
      document.body.style.overflow = previousOverflow;
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [menuOpen]);

  return (
    <header className="site-header">
      <div className="header-shell">
        <Link className="identity group" href="/" aria-label="Shashank H D — home">
          <span className="identity-rule" aria-hidden="true" />
          <span>Shashank H D</span>
        </Link>

        <nav className="primary-nav" aria-label="Primary navigation">
          {navigation.map((item) => {
            const active = item.href === "/profile" && pathname === "/profile";
            return (
              <Link key={item.label} className="nav-link" href={item.href} aria-current={active ? "page" : undefined}>
                {item.label}
              </Link>
            );
          })}
        </nav>

        <div className="header-actions">
          <ThemeToggle />
          <Link className="contact-link" href={contactHref}>
            <span>Contact</span>
            <ArrowIcon />
          </Link>
          <button
            ref={triggerRef}
            className="menu-trigger"
            type="button"
            aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
            aria-expanded={menuOpen}
            aria-controls="mobile-navigation"
            onClick={() => (menuOpen ? closeMenu() : setMenuOpen(true))}
          >
            <MenuIcon open={menuOpen} />
          </button>
        </div>
      </div>

      <div
        className={`drawer-backdrop ${menuOpen ? "drawer-backdrop--open" : ""}`}
        aria-hidden="true"
        onPointerDown={() => closeMenu()}
      />
      <div
        ref={drawerRef}
        id="mobile-navigation"
        className={`mobile-drawer ${menuOpen ? "mobile-drawer--open" : ""}`}
        aria-hidden={!menuOpen}
        inert={!menuOpen}
      >
        <div className="drawer-meta">
          <span>Navigation</span>
          <span>BLR · IND</span>
        </div>
        <nav className="drawer-nav" aria-label="Mobile navigation">
          {navigation.map((item, index) => {
            const active = item.href === "/profile" && pathname === "/profile";
            return (
              <Link
                key={item.label}
                className="drawer-link"
                href={item.href}
                aria-current={active ? "page" : undefined}
                tabIndex={menuOpen ? 0 : -1}
                onClick={() => closeMenu({ restoreFocus: false })}
              >
                <span className="drawer-index">0{index + 1}</span>
                <span>{item.label}</span>
                <ArrowIcon />
              </Link>
            );
          })}
        </nav>
        <div className="drawer-actions">
          <ThemeToggle compact />
          <Link
            className="drawer-contact"
            href={contactHref}
            tabIndex={menuOpen ? 0 : -1}
            onClick={() => closeMenu({ restoreFocus: false })}
          >
            Contact <ArrowIcon />
          </Link>
        </div>
        <p className="drawer-status">
          <span aria-hidden="true" /> Available for software engineering roles
        </p>
      </div>
    </header>
  );
}
