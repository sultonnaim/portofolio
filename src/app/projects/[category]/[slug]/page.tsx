import Link from "next/link";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ExternalLink,
  Code2,
  PenTool,
  Play,
  AtSign,
  Database,
  FileText,
} from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import {
  webProjects,
  designProjects,
  dataProjects,
  type Project,
  type ProjectCategoryId,
} from "@/data/projects";

const projectsByCategory: Record<ProjectCategoryId, Project[]> = {
  web: webProjects,
  design: designProjects,
  data: dataProjects,
};

interface PageProps {
  params: { category: string; slug: string };
}

// Next.js otomatis generate halaman statis untuk tiap project pas build
export function generateStaticParams() {
  return Object.entries(projectsByCategory).flatMap(([category, list]) =>
    list.map((project) => ({ category, slug: project.slug }))
  );
}

export default function ProjectDetailPage({ params }: PageProps) {
  const list = projectsByCategory[params.category as ProjectCategoryId];
  const project = list?.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  const gallery =
    project.gallery && project.gallery.length > 0
      ? project.gallery
      : [project.image];

  return (
    <main className="bg-white">
      <Navbar />

      <div className="mx-auto max-w-4xl px-6 py-16">
        <Link
          href={`/projects#${project.category}`}
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke Project
        </Link>

        <h1 className="mt-6 text-3xl font-bold text-slate-900 sm:text-4xl">
          {project.title}
        </h1>
        <p className="mt-4 max-w-2xl leading-relaxed text-slate-500">
          {project.description}
        </p>

        {project.tags && (
          <div className="mt-5 flex flex-wrap gap-2">
            {project.tags.map((tag, i) => (
              <span
                key={tag}
                className={`rounded-full px-3 py-1 text-xs font-semibold ${
                  i % 2 === 0
                    ? "bg-[#1B3B2B] text-white"
                    : "bg-[#F5A623]/15 text-[#8a5c10]"
                }`}
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        <div className="mt-6 flex flex-wrap gap-2">
          {project.pdfUrl && (
            <a
              href={project.pdfUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#F5A623] px-4 py-2 text-xs font-semibold text-[#1B3B2B] transition hover:bg-[#e6981a]"
            >
              <FileText className="h-3.5 w-3.5" /> Lihat PDF
            </a>
          )}
          {project.liveUrl && (
            <a
              href={project.liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#1B3B2B] px-4 py-2 text-xs font-semibold text-white transition hover:bg-[#173224]"
            >
              <ExternalLink className="h-3.5 w-3.5" /> Lihat Project
            </a>
          )}
          {project.figmaUrl && (
            <a
              href={project.figmaUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full bg-[#F5A623] px-4 py-2 text-xs font-semibold text-[#1B3B2B] transition hover:bg-[#e6981a]"
            >
              <PenTool className="h-3.5 w-3.5" /> Lihat di Figma
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Code2 className="h-3.5 w-3.5" /> Source Code
            </a>
          )}
          {project.datasetUrl && (
            <a
              href={project.datasetUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Database className="h-3.5 w-3.5" /> Lihat Dataset
            </a>
          )}
          {project.videoUrl && (
            <a
              href={project.videoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <Play className="h-3.5 w-3.5" /> Tonton Video
            </a>
          )}
          {project.instagramUrl && (
            <a
              href={project.instagramUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 rounded-full border border-slate-200 px-4 py-2 text-xs font-semibold text-slate-700 transition hover:border-slate-300 hover:bg-slate-50"
            >
              <AtSign className="h-3.5 w-3.5" /> Lihat di Instagram
            </a>
          )}
        </div>

        {/* PDF EMBED — kalau project ini punya portofolio dalam bentuk PDF */}
        {project.pdfUrl && (
          <div className="mt-12 overflow-hidden rounded-2xl ring-1 ring-slate-200">
            <iframe
              src={project.pdfUrl}
              title={`PDF ${project.title}`}
              className="h-[80vh] w-full"
            />
          </div>
        )}

        {/* GALERI FOTO — sengaja pakai <img> biasa (bukan next/image fill)
            supaya tinggi gambar ngikutin proporsi aslinya masing-masing,
            gak dipaksa 16:9 dan gak ada yang kepotong. Cocok buat galeri
            hasil case-study yang kamu susun sendiri di Figma/Photoshop. */}
        <div className="mt-12 space-y-6">
          {gallery.map((img) => (
            <img
              key={img}
              src={img}
              alt={project.title}
              className="w-full rounded-2xl ring-1 ring-slate-200"
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </main>
  );
}