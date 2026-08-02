"use client";

import { useEffect, useState } from "react";

type Theme = "dark" | "light";

function SunIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-[18px]">
      <circle cx="10" cy="10" r="3.5" fill="currentColor" />
      <path d="M10 1.5v2.4M10 16.1v2.4M1.5 10h2.4M16.1 10h2.4" stroke="currentColor" strokeWidth="1.4" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg aria-hidden="true" viewBox="0 0 20 20" className="size-[18px]">
      <path
        d="M16.4 12.4A7 7 0 0 1 7.6 3.6a6.6 6.6 0 1 0 8.8 8.8Z"
        fill="currentColor"
      />
    </svg>
  );
}

export default function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>("dark");

  useEffect(() => {
    setTheme(document.documentElement.dataset.theme === "light" ? "light" : "dark");
  }, []);

  function toggleTheme() {
    const nextTheme: Theme = theme === "dark" ? "light" : "dark";
    document.documentElement.dataset.theme = nextTheme;
    localStorage.setItem("theme", nextTheme);
    setTheme(nextTheme);
  }

  return (
    <button
      className="theme-control group"
      type="button"
      role="switch"
      aria-checked={theme === "light"}
      aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} theme`}
      onClick={toggleTheme}
    >
      <span className="transition-transform duration-200 group-hover:rotate-12" aria-hidden="true">
        {theme === "dark" ? <MoonIcon /> : <SunIcon />}
      </span>
    </button>
  );
}
