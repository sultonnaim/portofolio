
"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import type { Project } from "@/data/projects";

export interface ProjectSectionData {
  id: string;
  title: string;
  description: string;
  featuredProject: Project;
  projects: Project[];
}

// Menentukan tujuan ketika project diklik
function getLink(project: Project) {
  if (project.pageUrl) {
    return {
      href: project.pageUrl,
      external: false,
    };
  }

  const externalUrl =
    project.pdfUrl ??
    project.liveUrl ??
    project.repoUrl ??
    project.instagramUrl ??
    project.videoUrl;

  if (externalUrl) {
    return {
      href: externalUrl,
      external: true,
    };
  }

  return {
    href: `/projects/${project.category}/${project.slug}`,
    external: false,
  };
}

function ProjectLink({
  project,
  children,
  className,
}: {
  project: Project;
  children: React.ReactNode;
  className?: string;
}) {
  const { href, external } = getLink(project);

  return (
    <Link
      href={href}
      target={external ? "_blank" : undefined}
      rel={external ? "noopener noreferrer" : undefined}
      className={className}
    >
      {children}
    </Link>
  );
}

export default function ProjectSection({
  section,
}: {
  section: ProjectSectionData;
}) {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Geser daftar project ke kiri atau kanan
  const scroll = (direction: "left" | "right") => {
    if (!scrollContainerRef.current) return;

    const { scrollLeft, clientWidth } =
      scrollContainerRef.current;

    const amount = clientWidth * 0.75;

    scrollContainerRef.current.scrollTo({
      left:
        direction === "left"
          ? scrollLeft - amount
          : scrollLeft + amount,
      behavior: "smooth",
    });
  };

  const featured = section.featuredProject;

  return (
    <section
      id={section.id}
      className="scroll-mt-28 space-y-7"
    >
      {/* Judul Kategori */}
      <div className="space-y-2">
        <h2 className="text-2xl font-bold uppercase tracking-wide text-white md:text-3xl">
          {section.title}
        </h2>

        <p className="text-sm text-white/65 md:text-base">
          {section.description}
        </p>
      </div>

      {/* PROJECT UTAMA */}
      <ProjectLink
        project={featured}
        className="group grid overflow-hidden rounded-3xl border border-white/20 bg-white/10 backdrop-blur-xl shadow-[0_20px_50px_rgba(0,0,0,0.15)] transition duration-300 hover:bg-white/15 md:grid-cols-2"
      >
        {/* Informasi Project */}
        <div className="flex flex-col justify-center p-6 md:p-9 lg:p-12">
          <h3 className="text-2xl font-bold leading-tight text-white transition-colors duration-300 group-hover:text-[#F5A623] md:text-3xl">
            {featured.title}
          </h3>

          <p className="mt-4 text-sm leading-7 text-white/75 md:text-base">
            {featured.description}
          </p>

          {/* Tags */}
          {featured.tags && featured.tags.length > 0 && (
            <div className="mt-5 flex flex-wrap gap-2">
              {featured.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full border border-[#F5A623]/30 bg-[#F5A623]/10 px-3 py-1.5 text-xs font-medium text-[#FFD17A]"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}

          <div className="mt-7 flex items-center gap-2 text-sm font-semibold text-[#F5A623]">
            Lihat Proyek
            <span className="transition-transform duration-300 group-hover:translate-x-2">
              →
            </span>
          </div>
        </div>

        {/* Gambar Project Tanpa Border / Frame */}
        <div className="relative min-h-[260px] md:min-h-[360px]">
          <Image
            src={featured.image}
            alt={featured.title}
            fill
            priority
            sizes="(max-width: 768px) 100vw, 50vw"
            className={`transition-transform duration-700 group-hover:scale-105 ${
              section.id === "design"
                ? "object-contain p-4 md:p-7"
                : "object-contain p-3 md:p-5"
            }`}
          />
        </div>
      </ProjectLink>

      {/* PROJECT LAINNYA - HORIZONTAL SCROLL */}
      {section.projects.length > 0 && (
        <div className="relative">

          {/* Tombol Geser Kiri */}
          <button
            onClick={() => scroll("left")}
            aria-label="Geser ke kiri"
            className="absolute -left-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#123D29]/90 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-[#F5A623] hover:text-[#173522] md:-left-5"
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z" />
            </svg>
          </button>

          {/* Daftar Project */}
          <div
            ref={scrollContainerRef}
            className="relative flex flex-nowrap gap-5 overflow-x-auto scroll-smooth px-2 py-4 [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
          >
            {section.projects.map((project) => (
              <ProjectLink
                key={project.slug}
                project={project}
                className="group w-[260px] flex-shrink-0 overflow-hidden rounded-2xl border border-white/20 bg-white/10 shadow-lg backdrop-blur-xl transition duration-300 hover:-translate-y-2 hover:bg-white/15 sm:w-[280px]"
              >
                {/* Gambar */}
                <div className="relative aspect-[16/10] overflow-hidden bg-white/5">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="280px"
                    className={`transition-transform duration-500 group-hover:scale-105 ${
                      section.id === "design"
                        ? "object-contain p-2"
                        : "object-cover"
                    }`}
                  />
                </div>

                {/* Informasi */}
                <div className="flex min-h-[190px] flex-col p-4">
                  <h3 className="text-base font-semibold text-white transition-colors group-hover:text-[#F5A623]">
                    {project.title}
                  </h3>

                  <p className="mt-2 line-clamp-3 text-xs leading-6 text-white/65">
                    {project.description}
                  </p>

                  {/* Tags */}
                  {project.tags && project.tags.length > 0 && (
                    <div className="mt-3 flex flex-wrap gap-1.5">
                      {project.tags.map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-[#F5A623]/10 px-2 py-1 text-[10px] text-[#FFD17A]"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-auto flex items-center justify-between pt-4">
                    <span className="text-xs font-medium text-[#F5A623]">
                      Lihat Proyek ↗
                    </span>
                  </div>
                </div>
              </ProjectLink>
            ))}
          </div>

          {/* Tombol Geser Kanan */}
          <button
            onClick={() => scroll("right")}
            aria-label="Geser ke kanan"
            className="absolute -right-3 top-1/2 z-20 flex h-10 w-10 -translate-y-1/2 items-center justify-center rounded-full border border-white/20 bg-[#123D29]/90 text-white shadow-lg backdrop-blur-md transition hover:scale-110 hover:bg-[#F5A623] hover:text-[#173522] md:-right-5"
          >
            <svg
              className="h-5 w-5 fill-current"
              viewBox="0 0 24 24"
            >
              <path d="M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z" />
            </svg>
          </button>
        </div>
      )}
    </section>
  );
}
