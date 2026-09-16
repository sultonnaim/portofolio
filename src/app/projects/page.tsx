import type { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/layout/Navbar";
import ProjectCardStack from "@/components/projects/ProjectCardStack";
import { projectCategories } from "@/data/projectCategories";
import { webProjects, designProjects, dataProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Project — Sulton",
  description:
    "Kumpulan project web development, design, dan data analysis yang pernah saya kerjakan.",
};

const GREEN = "#1B3B2B";
const WHITE = "#FFFFFF";

const projectsByCategory = {
  web: webProjects,
  design: designProjects,
  data: dataProjects,
};

const themeByCategory: Record<string, "green" | "white"> = {
  web: "green",
  design: "white",
  data: "green",
};

// urutan warna background termasuk section header (putih) di paling awal,
// dipakai buat ngitung warna transisi tiap batas antar section
const bgSequence = [
  WHITE,
  ...projectCategories.map((meta) =>
    themeByCategory[meta.id] === "green" ? GREEN : WHITE,
  ),
];

// pita transisi bergelombang di antara 2 section — bentuknya beda-beda
// tiap batas (wavePaths) biar gak keliatan monoton/berulang
const wavePaths = [
  "M0,60 C240,10 480,110 720,60 C960,10 1200,110 1440,60 L1440,120 L0,120 Z",
  "M0,40 C360,120 1080,0 1440,80 L1440,120 L0,120 Z",
  "M0,90 C300,20 720,20 1020,70 C1200,100 1320,50 1440,40 L1440,120 L0,120 Z",
];

function WaveDivider({
  from,
  to,
  index,
}: {
  from: string;
  to: string;
  index: number;
}) {
  return (
    <div
      aria-hidden
      className="relative h-20 w-full overflow-hidden md:h-28"
      style={{ backgroundColor: from }}
    >
      <svg
        className="absolute inset-0 h-full w-full"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path d={wavePaths[index % wavePaths.length]} fill={to} />
      </svg>
    </div>
  );
}

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <Navbar />

      {projectCategories.map((meta, i) => {
        const isGreen = themeByCategory[meta.id] === "green";

        return (
          <div key={meta.id}>
            <WaveDivider
              from={bgSequence[i]}
              to={bgSequence[i + 1]}
              index={i}
            />

            <section
              id={meta.id}
              className={`scroll-mt-28 px-6 py-16 md:py-24 ${
                isGreen ? "bg-[#1B3B2B]" : "bg-white"
              }`}
            >
              <div className="mx-auto max-w-6xl">
                <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2 lg:gap-16">
                  {/* teks — dibikin lebih besar & simple, tanpa hiasan sticker */}
                  <div className="max-w-xl">
                    <h2
                      className={`text-6xl font-extrabold leading-[0.95] sm:text-7xl ${
                        isGreen ? "text-white" : "text-slate-900"
                      }`}
                    >
                      {meta.label}
                    </h2>

                    <p className="mt-4 text-xl font-semibold text-[#F5A623]">
                      {meta.tagline}
                    </p>

                    <p
                      className={`mt-6 max-w-md text-base leading-relaxed ${
                        isGreen ? "text-white/70" : "text-slate-500"
                      }`}
                    >
                      {meta.description}
                    </p>

                    <div className="mt-7 flex flex-wrap gap-2">
                      {meta.tools.map((tool) => (
                        <span
                          key={tool.name}
                          title={tool.name}
                          className={`flex h-9 w-9 items-center justify-center rounded-lg ${
                            isGreen ? "bg-white/10" : "bg-slate-100"
                          }`}
                        >
                          <span className="relative h-4 w-4">
                            <Image
                              src={tool.icon}
                              alt={tool.name}
                              fill
                              sizes="16px"
                              className="object-contain"
                            />
                          </span>
                        </span>
                      ))}
                    </div>
                  </div>

                  <ProjectCardStack
                    categoryId={meta.id}
                    projects={projectsByCategory[meta.id]}
                    theme={themeByCategory[meta.id]}
                  />
                </div>
              </div>
            </section>
          </div>
        );
      })}
    </main>
  );
}
