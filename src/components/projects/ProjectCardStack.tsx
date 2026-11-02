"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { SkipForward } from "lucide-react";
import type { Project } from "@/data/projects";

interface ProjectCardStackProps {
  categoryId: string;
  projects: Project[];
  theme?: "green" | "white";
}

export default function ProjectCardStack({
  categoryId,
  projects,
  theme = "white",
}: ProjectCardStackProps) {
  const [index, setIndex] = useState(0);
  const isGreen = theme === "green";

  function skip() {
    setIndex((prev) => (prev + 1) % projects.length);
  }

  // urutan kartu mulai dari yang "aktif" di depan, sisanya ngintip di belakang
  const ordered = [...projects.slice(index), ...projects.slice(0, index)];
  const visible = ordered.slice(0, 3);

  return (
    <div className="mx-auto flex w-fit flex-col items-center">
      <div className="relative h-[420px] w-72 sm:h-[520px] sm:w-80 lg:h-[560px] lg:w-96">
        <AnimatePresence initial={false}>
          {visible.map((project, depth) => {
            const isFront = depth === 0;
            const tiltSide = depth % 2 === 0 ? 1 : -1;

            const cardVisual = (
              <div
                className={`h-full w-full overflow-hidden rounded-2xl shadow-xl ring-1 ${
                  isGreen
                    ? "bg-[#173224] ring-white/10"
                    : "bg-white ring-slate-200"
                }`}
              >
                <div className="relative h-3/4 w-full overflow-hidden bg-slate-200">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    sizes="384px"
                    className="object-cover"
                  />
                </div>
                <div className="p-5">
                  <p
                    className={`text-base font-bold sm:text-lg ${
                      isGreen ? "text-white" : "text-slate-900"
                    }`}
                  >
                    {project.title}
                  </p>
                  <p
                    className={`mt-1.5 line-clamp-2 text-xs leading-snug sm:text-sm ${
                      isGreen ? "text-white/60" : "text-slate-500"
                    }`}
                  >
                    {project.description}
                  </p>
                  {project.tags && (
                    <p
                      className={`mt-2 text-[11px] font-medium sm:text-xs ${
                        isGreen ? "text-[#F5A623]/80" : "text-[#8a5c10]"
                      }`}
                    >
                      {project.tags.slice(0, 2).join(" • ")}
                    </p>
                  )}
                </div>
              </div>
            );

            return (
              <motion.div
                key={project.slug}
                className="absolute inset-0"
                style={{ zIndex: 10 - depth }}
                initial={
                  isFront
                    ? { opacity: 0, scale: 0.9 }
                    : { opacity: 0, y: depth * 12 }
                }
                animate={{
                  opacity: 1 - depth * 0.18,
                  y: depth * 12,
                  x: isFront ? 0 : tiltSide * 10,
                  rotate: isFront ? 0 : tiltSide * 6,
                  scale: 1 - depth * 0.05,
                }}
                exit={{
                  x: 160,
                  opacity: 0,
                  rotate: 18,
                  transition: { duration: 0.3, ease: "easeIn" },
                }}
                transition={{ duration: 0.35, ease: "easeOut" }}
              >
                {isFront ? (
                  <Link
                    href={
                      project.pdfUrl ??
                      project.liveUrl ??
                      `/projects/${categoryId}/${project.slug}`
                    }
                    target={
                      project.pdfUrl || project.liveUrl ? "_blank" : undefined
                    }
                    rel={
                      project.pdfUrl || project.liveUrl
                        ? "noopener noreferrer"
                        : undefined
                    }
                    className="group block h-full w-full transition"
                  >
                    <div className="h-full w-full transition duration-300 group-hover:-translate-y-1">
                      {cardVisual}
                    </div>
                  </Link>
                ) : (
                  <div className="pointer-events-none h-full w-full">
                    {cardVisual}
                  </div>
                )}
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>

      {projects.length > 1 && (
        <button
          onClick={skip}
          className={`mt-6 flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold transition ${
            isGreen
              ? "bg-white/10 text-white hover:bg-white/15"
              : "bg-slate-100 text-slate-700 hover:bg-slate-200"
          }`}
        > Project Lain
          <SkipForward className="h-3.5 w-3.5" />
        </button>
      )}
    </div>
  );
}