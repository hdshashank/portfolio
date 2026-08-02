"use client";

import { type ReactNode, useEffect, useRef } from "react";

export function SkillsMarquee({ children }: { children: ReactNode }) {
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let previousScrollY = window.scrollY;
    let frameId = 0;

    const syncDirection = () => {
      frameId = 0;
      const nextScrollY = window.scrollY;
      const delta = nextScrollY - previousScrollY;
      previousScrollY = nextScrollY;

      if (Math.abs(delta) < 1) return;

      const animation = trackRef.current?.getAnimations()[0];
      if (animation) animation.playbackRate = delta > 0 ? 1 : -1;
    };

    const onScroll = () => {
      if (!frameId) frameId = window.requestAnimationFrame(syncDirection);
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frameId) window.cancelAnimationFrame(frameId);
    };
  }, []);

  return <div className="skills-track" ref={trackRef}>{children}</div>;
}
