"use client";

import { useEffect, useState } from "react";

const NAV_LINKS = [
  { label: "Home", href: "#home" },
  { label: "Services", href: "#services" },
  { label: "About", href: "#about" },
  { label: "Projects", href: "#projects" },
];

export default function Navbar() {
  const [activeId, setActiveId] = useState(NAV_LINKS[0].href.slice(1));

  useEffect(() => {
    const sectionIds = NAV_LINKS.map((link) => link.href.slice(1));
    const sections = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);

        if (visible.length > 0) {
          setActiveId(visible[0].target.id);
        }
      },
      {
        rootMargin: "-35% 0px -55% 0px",
        threshold: [0, 0.25, 0.5, 0.75, 1],
      }
    );

    sections.forEach((section) => observer.observe(section));
    return () => observer.disconnect();
  }, []);

  return (
    <header className="sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl">
      <nav className="flex items-center justify-between rounded-full bg-[#1B3B2B] px-6 py-3 shadow-lg shadow-black/10">
        <a href="#home" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] text-sm font-bold text-[#1B3B2B]">
            S
          </span>
          <span className="text-lg font-semibold text-white">
            Sulton<span className="text-[#F5A623]">.</span>
          </span>
        </a>

        <ul className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {NAV_LINKS.map((link) => {
            const isActive = activeId === link.href.slice(1);
            return (
              <li key={link.href}>
                <a
                  href={link.href}
                  className={
                    isActive
                      ? "text-[#F5A623] underline underline-offset-4"
                      : "transition hover:text-white"
                  }
                >
                  {link.label}
                </a>
              </li>
            );
          })}
        </ul>

        <a
          href="#contact"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1B3B2B] transition hover:bg-white/90 sm:inline-block"
        >
          Hubungi Saya
        </a>
      </nav>
    </header>
  );
}
