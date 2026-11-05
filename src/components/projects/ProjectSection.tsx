"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { Great_Vibes } from "next/font/google";
import type { Project } from "@/data/projects";

const greatVibes = Great_Vibes({
  weight: "400",
  subsets: ["latin"],
});

export interface ProjectSectionData {
  id: string;
  categoryName: string;
  title: string;
  projects: Project[];
}

// tujuan klik kartu, urutan prioritas:
// pageUrl (halaman di web ini) → pdfUrl → liveUrl → repoUrl (GitHub)
// → instagramUrl → videoUrl (YouTube) → halaman detail
function getLink(project: Project) {
  if (project.pageUrl) return { href: project.pageUrl, external: false };

  const externalUrl =
    project.pdfUrl ??
    project.liveUrl ??
    project.repoUrl ??
    project.instagramUrl ??
    project.videoUrl;
  if (externalUrl) return { href: externalUrl, external: true };

  return {
    href: `/projects/${project.category}/${project.slug}`,
    external: false,
  };
}

// Section dengan tombol panah navigasi
export default function ProjectSection({
  section,
}: {
  section: ProjectSectionData;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Fungsi scroll otomatis saat panah diklik
  const scroll = (direction: "left" | "right") => {
    if (scrollContainerRef.current) {
      const { scrollLeft, clientWidth } = scrollContainerRef.current;
      const scrollAmount = clientWidth * 0.75;
      scrollContainerRef.current.scrollTo({
        left:
          direction === "left"
            ? scrollLeft - scrollAmount
            : scrollLeft + scrollAmount,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id={section.id} className="scroll-mt-28">
      {/* Header Section */}
      <div className="text-center mb-6">
        <span
          className={`${greatVibes.className} text-[#F5A623] text-3xl md:text-4xl block tracking-wide font-normal drop-shadow`}
        >
          {section.categoryName}
        </span>
        <h2 className="text-3xl md:text-4xl font-extrabold text-white uppercase tracking-wider -mt-2 drop-shadow-md">
          {section.title}
        </h2>
      </div>

      {/* KONTAINER KACA TRANSPARAN */}
      <div className="relative overflow-hidden rounded-3xl bg-white/10 backdrop-blur-xl border border-white/20 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)]">
        {/* Glow efek latar di dalam kaca */}
        <div className="absolute -top-24 -left-24 w-72 h-72 bg-white/10 rounded-full blur-2xl pointer-events-none" />

        {/* Tombol Panah Kiri */}
        <button
          onClick={() => scroll("left")}
          aria-label="Scroll Left"
          className="absolute left-2 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white shadow-lg transition hover:bg-emerald-500 hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
          </svg>
        </button>

        {/* Tombol Panah Kanan */}
        <button
          onClick={() => scroll("right")}
          aria-label="Scroll Right"
          className="absolute right-2 top-1/2 -translate-y-1/2 z-30 flex h-12 w-12 items-center justify-center rounded-full bg-black/40 backdrop-blur-md border border-white/30 text-white shadow-lg transition hover:bg-emerald-500 hover:scale-110 active:scale-95"
        >
          <svg className="w-6 h-6 fill-current" viewBox="0 0 24 24">
            <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
          </svg>
        </button>

        {/* 1 baris kartu, scrollbar disembunyikan.
            px-14 supaya kartu pertama/terakhir tidak tertutup tombol panah,
            pt-10 supaya kartu yang terangkat saat hover tidak terpotong. */}
        <div
          ref={scrollContainerRef}
          className="relative z-10 flex flex-nowrap gap-5 overflow-x-auto pt-10 pb-8 px-14 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
        >
          {section.projects.map((project, index) => {
            const { href, external } = getLink(project);
            const hoverRotate =
              index % 2 === 0 ? "hover:-rotate-3" : "hover:rotate-3";

            return (
              <div
                key={project.slug}
                className="group relative flex-shrink-0 w-52 sm:w-60"
              >
                <Link
                  href={href}
                  target={external ? "_blank" : undefined}
                  rel={external ? "noopener noreferrer" : undefined}
                  className={`relative block aspect-[4/5] w-full overflow-hidden rounded-2xl bg-black/30 border border-white/15 shadow-md transition-all duration-300 ease-out transform hover:-translate-y-6 hover:scale-105 ${hoverRotate} hover:shadow-[0_25px_35px_rgba(0,0,0,0.75)] hover:border-emerald-400/80 z-10 hover:z-20`}
                >
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="(max-width: 640px) 208px, 240px"
                    className="object-cover transition duration-500 group-hover:scale-110"
                  />

                  <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent px-3 pb-3 pt-10 text-xs font-semibold text-white opacity-0 transition duration-300 group-hover:opacity-100">
                    {project.title}
                  </span>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}