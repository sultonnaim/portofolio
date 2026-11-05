import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import Navbar from "@/components/layout/Navbar";
import ProjectSection from "@/components/projects/ProjectSection";
import { webProjects, designProjects, dataProjects } from "@/data/projects";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "Proyek — Sulton",
  description: "Kumpulan proyek web development, data, dan desain grafis.",
};

const sections = [
  {
    id: "web",
    title: "Web Developer",
    description: "Pengembangan website dan aplikasi web.",
    featuredSlug: "sistem-informasi-taman",
    projects: webProjects,
  },
  {
    id: "data",
    title: "Data Analyst",
    description: "Pengolahan data, analisis, dan data engineering.",
    featuredSlug: "dashboard-analisis-penjualan",
    projects: dataProjects,
  },
  {
    id: "design",
    title: "Graphic Designer",
    description: "Desain visual, poster, dan ilustrasi vector.",
    featuredSlug: "poster",
    projects: designProjects,
  },
];

export default function ProjectsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden bg-[#1B3B2B]">
      {/* Tekstur background */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.055)_1px,transparent_1px)] [background-size:20px_20px]" />

      <div className="pointer-events-none fixed top-1/2 right-10 h-[700px] w-[700px] -translate-y-1/2 rounded-full bg-emerald-400/20 blur-[150px]" />

      <div className="relative z-10">
        <Navbar />

        <div className={`${poppins.className} mx-auto max-w-6xl space-y-20 px-5 py-12 md:px-6 md:py-16`}>
          {/* Judul Halaman */}
          <div className="space-y-3">
            <h1 className="text-4xl font-extrabold text-white md:text-6xl">
              Proyek<span className="text-[#F5A623]">.</span>
            </h1>

            <p className="max-w-xl text-sm leading-relaxed text-white/70 md:text-base">
              Kumpulan proyek dan karya yang pernah saya kerjakan dalam bidang
              pengembangan web, pengolahan data, dan desain grafis.
            </p>
          </div>

          {/* Kategori Proyek */}
          {sections.map((section) => {
            const featuredProject = section.projects.find(
              (project) => project.slug === section.featuredSlug,
            );

            const otherProjects = section.projects.filter(
              (project) => project.slug !== section.featuredSlug,
            );

            if (!featuredProject) return null;

            return (
              <ProjectSection
                key={section.id}
                section={{
                  ...section,
                  featuredProject,
                  projects: otherProjects,
                }}
              />
            );
          })}
        </div>
      </div>
    </main>
  );
}
