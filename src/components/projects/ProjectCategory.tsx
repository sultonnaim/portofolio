"use client";

import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import {
  ArrowLeft,
  ArrowRight,
  ExternalLink,
  Play,
  AtSign,
  PenTool,
} from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCategoryProps {
  id: string;
  eyebrow: string;
  title: string;
  description?: string;
  projects: Project[];
  imageSide?: "left" | "right";
  /** "green" = full-bleed hijau tua, "white" = full-bleed putih */
  theme?: "green" | "white";
}

export default function ProjectCategory({
  id,
  eyebrow,
  title,
  description,
  projects,
  imageSide = "left",
  theme = "white",
}: ProjectCategoryProps) {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState<1 | -1>(1);
  const project = projects[index];

  function go(dir: 1 | -1) {
    setDirection(dir);
    setIndex((prev) => (prev + dir + projects.length) % projects.length);
  }

  function goTo(target: number) {
    setDirection(target > index ? 1 : -1);
    setIndex(target);
  }

  const isGreen = theme === "green";

  return (
    <section
      id={id}
      className={`scroll-mt-28 px-6 py-16 ${
        isGreen ? "bg-[#1B3B2B]" : "bg-white"
      }`}
    >
      <div className="mx-auto max-w-6xl">
        <div className="mb-6 max-w-lg">
          <span className="mb-1.5 flex items-center gap-2 text-sm font-semibold text-[#F5A623]">
            <span className="h-[2px] w-4 bg-[#F5A623]" />
            {eyebrow}
          </span>
          <h2
            className={`text-2xl font-bold sm:text-3xl ${
              isGreen ? "text-white" : "text-slate-900"
            }`}
          >
            {title}
          </h2>
          {description && (
            <p
              className={`mt-2 text-sm ${
                isGreen ? "text-white/60" : "text-slate-500"
              }`}
            >
              {description}
            </p>
          )}
        </div>

        {/* card pembungkus */}
        <div
          className={`rounded-3xl p-4 sm:p-6 ${
            isGreen
              ? "bg-white/[0.04] ring-1 ring-white/10"
              : "bg-[#1B3B2B]/[0.03] ring-1 ring-[#1B3B2B]/[0.06]"
          }`}
        >
          <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
            {/* GAMBAR / SLIDE */}
            <div className={imageSide === "right" ? "md:order-2" : ""}>
              <div
                className={`relative aspect-[4/3] w-full overflow-hidden rounded-2xl bg-slate-200 ring-1 ${
                  isGreen ? "ring-white/10" : "ring-[#1B3B2B]/10"
                }`}
              >
                <AnimatePresence
                  initial={false}
                  custom={direction}
                  mode="wait"
                >
                  <motion.img
                    key={project.image}
                    src={project.image}
                    alt={project.title}
                    custom={direction}
                    initial={{ x: direction === 1 ? 60 : -60, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    exit={{ x: direction === 1 ? -60 : 60, opacity: 0 }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                    className="absolute inset-0 h-full w-full object-cover"
                  />
                </AnimatePresence>

                {projects.length > 1 && (
                  <div className="absolute bottom-3 left-1/2 flex -translate-x-1/2 gap-2">
                    {projects.map((_, i) => (
                      <button
                        key={i}
                        onClick={() => goTo(i)}
                        aria-label={`Lihat project ${i + 1}`}
                        className={`h-2 rounded-full transition-all ${
                          i === index
                            ? "w-6 bg-[#F5A623]"
                            : "w-2 bg-white/70"
                        }`}
                      />
                    ))}
                  </div>
                )}
              </div>
            </div>

            {/* TEKS */}
            <div>
              <AnimatePresence mode="wait">
                <motion.div
                  key={project.title}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                >
                  <h3
                    className={`text-lg font-bold sm:text-xl ${
                      isGreen ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {project.title}
                  </h3>
                  <p
                    className={`mt-2.5 text-sm leading-relaxed ${
                      isGreen ? "text-white/60" : "text-slate-500"
                    }`}
                  >
                    {project.description}
                  </p>

                  {project.tags && (
                    <div className="mt-3.5 flex flex-wrap gap-1.5">
                      {project.tags.map((tag, i) => (
                        <span
                          key={tag}
                          className={`rounded-full px-3 py-1 text-xs font-semibold ${
                            isGreen
                              ? i % 2 === 0
                                ? "bg-white text-[#1B3B2B]"
                                : "bg-[#F5A623] text-[#1B3B2B]"
                              : i % 2 === 0
                                ? "bg-[#1B3B2B] text-white"
                                : "bg-[#F5A623]/15 text-[#8a5c10]"
                          }`}
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  )}

                  <div className="mt-4 flex flex-wrap gap-2">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                          isGreen
                            ? "bg-[#F5A623] text-[#1B3B2B] hover:bg-[#e6981a]"
                            : "bg-[#1B3B2B] text-white hover:bg-[#173224]"
                        }`}
                      >
                        <ExternalLink className="h-3.5 w-3.5" /> Lihat
                        Project
                      </a>
                    )}
                    {project.figmaUrl && (
                      <a
                        href={project.figmaUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-full px-4 py-2 text-xs font-semibold transition ${
                          isGreen
                            ? "bg-white text-[#1B3B2B] hover:bg-white/90"
                            : "bg-[#F5A623] text-[#1B3B2B] hover:bg-[#e6981a]"
                        }`}
                      >
                        <PenTool className="h-3.5 w-3.5" /> Lihat di Figma
                      </a>
                    )}
                    {project.videoUrl && (
                      <a
                        href={project.videoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                          isGreen
                            ? "border-white/25 text-white hover:bg-white/10"
                            : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <Play className="h-3.5 w-3.5" /> Tonton Video
                      </a>
                    )}
                    {project.instagramUrl && (
                      <a
                        href={project.instagramUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`inline-flex items-center gap-1.5 rounded-full border px-4 py-2 text-xs font-semibold transition ${
                          isGreen
                            ? "border-white/25 text-white hover:bg-white/10"
                            : "border-slate-200 text-slate-700 hover:border-slate-300 hover:bg-slate-50"
                        }`}
                      >
                        <AtSign className="h-3.5 w-3.5" /> Lihat di
                        Instagram
                      </a>
                    )}
                  </div>
                </motion.div>
              </AnimatePresence>

              {projects.length > 1 && (
                <div className="mt-5 flex gap-2">
                  <button
                    onClick={() => go(-1)}
                    aria-label="Project sebelumnya"
                    className={`flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition ${
                      isGreen
                        ? "bg-white/10 text-white ring-1 ring-white/20 hover:ring-[#F5A623]"
                        : "bg-white text-[#1B3B2B] ring-1 ring-[#1B3B2B]/10 hover:ring-[#F5A623]"
                    }`}
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    onClick={() => go(1)}
                    aria-label="Project selanjutnya"
                    className={`flex h-9 w-9 items-center justify-center rounded-full shadow-sm transition ${
                      isGreen
                        ? "bg-white/10 text-white ring-1 ring-white/20 hover:ring-[#F5A623]"
                        : "bg-white text-[#1B3B2B] ring-1 ring-[#1B3B2B]/10 hover:ring-[#F5A623]"
                    }`}
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}