import type { Metadata } from "next";
import Navbar from "@/components/layout/Navbar";
import ProjectCategory from "@/components/projects/ProjectCategory";
import { webProjects, designProjects, dataProjects } from "@/data/projects";

export const metadata: Metadata = {
  title: "Project Sulton",
  description:
    "Kumpulan project web development, design, dan data analysis yang pernah saya kerjakan.",
};

export default function ProjectsPage() {
  return (
    <main className="bg-white">
      <Navbar />

      <ProjectCategory
        id="web"
        theme="green"
        eyebrow="Web Development"
        title="Project Website"
        description="Aplikasi dan website yang saya bangun dari sisi front-end sampai integrasi back-end."
        projects={webProjects}
        imageSide="left"
      />

      <ProjectCategory
        id="design"
        theme="white"
        eyebrow="Design"
        title="Project Design"
        description="UI/UX design, konten visual, dan video editing untuk berbagai kebutuhan."
        projects={designProjects}
        imageSide="right"
      />

      <ProjectCategory
        id="data"
        theme="green"
        eyebrow="Data"
        title="Project Data"
        description="Analisis data dan visualisasi untuk membantu pengambilan keputusan."
        projects={dataProjects}
        imageSide="left"
      />
    </main>
  );
}