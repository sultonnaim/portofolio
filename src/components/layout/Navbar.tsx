"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";

const NAV_LINKS = [
  { label: "Home", href: "/#home", id: "home", isPage: false },
  { label: "Services", href: "/#services", id: "services", isPage: false },
  { label: "About", href: "/#about", id: "about", isPage: false },
  { label: "Projects", href: "/projects", id: "projects", isPage: true },
] as const;

const EMAIL_LINK =
  "https://mail.google.com/mail/?view=cm&fs=1&to=sultonnaim03@gmail.com&su=Halo";

export default function Navbar() {
  const pathname = usePathname();
  const [activeId, setActiveId] = useState("home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = isMenuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen]);

  useEffect(() => {
    if (pathname !== "/") return;

    const sectionIds = NAV_LINKS.filter((l) => !l.isPage).map((l) => l.id);
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
  }, [pathname]);

  function isLinkActive(link: (typeof NAV_LINKS)[number]) {
    return link.isPage
      ? pathname.startsWith("/projects")
      : pathname === "/" && activeId === link.id;
  }

  return (
    <header className="sticky top-4 z-50 mx-auto w-[calc(100%-2rem)] max-w-6xl">
      <nav className="flex items-center justify-between rounded-full bg-[#1B3B2B] px-6 py-3 shadow-lg shadow-black/10">
        <Link href="/#home" className="flex items-center gap-2">
          <span className="flex h-8 w-8 items-center justify-center rounded-full bg-[#F5A623] text-sm font-bold text-[#1B3B2B]">
            S
          </span>
          <span className="text-lg font-semibold text-white">
            Sulton<span className="text-[#F5A623]">.</span>
          </span>
        </Link>

        <ul className="hidden items-center gap-8 text-sm font-medium text-white/80 md:flex">
          {NAV_LINKS.map((link) => (
            <li key={link.href}>
              <Link
                href={link.href}
                className={
                  isLinkActive(link)
                    ? "text-[#F5A623] underline underline-offset-4"
                    : "transition hover:text-white"
                }
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>

        <a
          href={EMAIL_LINK}
          target="_blank"
          rel="noopener noreferrer"
          className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1B3B2B] transition hover:bg-white/90 md:inline-block"
        >
          contact
        </a>

        <button
          onClick={() => setIsMenuOpen((prev) => !prev)}
          aria-label={isMenuOpen ? "Tutup menu" : "Buka menu"}
          className="flex h-9 w-9 items-center justify-center rounded-full text-white md:hidden"
        >
          {isMenuOpen ? (
            <X className="h-5 w-5" />
          ) : (
            <Menu className="h-5 w-5" />
          )}
        </button>
      </nav>

      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.2 }}
            className="mt-3 overflow-hidden rounded-3xl bg-[#1B3B2B] px-6 py-5 shadow-lg shadow-black/10 md:hidden"
          >
            <ul className="flex flex-col gap-1 text-sm font-medium text-white/80">
              {NAV_LINKS.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className={`block rounded-xl px-3 py-2.5 transition ${
                      isLinkActive(link)
                        ? "bg-white/10 text-[#F5A623]"
                        : "hover:bg-white/5 hover:text-white"
                    }`}
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <a
              href={EMAIL_LINK}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 block rounded-full bg-white px-5 py-2.5 text-center text-sm font-semibold text-[#1B3B2B] transition hover:bg-white/90"
            >
              Hubungi Saya
            </a>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}