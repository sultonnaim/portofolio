import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ProjectSection from "@/components/projects/ProjectSection";
import { webProjects, designProjects, dataProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Project — Sulton",
  description:
    "Kumpulan project web development, design, dan data analysis yang pernah saya kerjakan.",
};

const sections = [
  { id: "web", categoryName: "Portofolio", title: "Web Developer", projects: webProjects },
  { id: "data", categoryName: "Portofolio", title: "Data Analyst", projects: dataProjects },
  { id: "design", categoryName: "Portofolio", title: "Graphic Designer", projects: designProjects },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-gradient-to-r from-[#071a10] via-[#17492e] via-25% to-[#256c45] relative overflow-hidden">
      {/* Texture & Glow Background */}
      <div className="absolute inset-0 bg-[radial-gradient(rgba(255,255,255,0.06)_1px,transparent_1px)] [background-size:20px_20px] pointer-events-none" />
      <div className="fixed top-1/2 right-10 -translate-y-1/2 w-[700px] h-[700px] bg-emerald-400/20 blur-[150px] rounded-full pointer-events-none" />

      <div className="relative z-10">
        <Navbar />

        <div className="mx-auto max-w-6xl px-6 py-12 space-y-16 mt-6">
          {sections.map((section) => (
            <ProjectSection key={section.id} section={section} />
          ))}
        </div>
      </div>
    </main>
  );
}