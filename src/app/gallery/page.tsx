import type { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import Navbar from "@/components/layout/Navbar";
import GalleryGrid from "@/components/gallery/GalleryGrid";

export const metadata: Metadata = {
  title: "Galeri Desain — Sulton",
  description: "Kumpulan hasil desain poster dan vector illustration.",
};

export default function GalleryPage() {
  return (
    <main className="bg-white pb-6">
      <Navbar />

      <header className="px-4 pb-5 pt-10 sm:px-6">
        <Link
          href="/projects#design"
          className="inline-flex items-center gap-2 text-sm font-semibold text-slate-500 transition hover:text-slate-900"
        >
          <ArrowLeft className="h-4 w-4" /> Kembali ke Project
        </Link>
        <h1 className="mt-4 text-3xl font-bold text-slate-900 sm:text-4xl">
          Galeri Desain
        </h1>
        <p className="mt-2 max-w-xl text-sm text-slate-500">
          Poster dan vector illustration hasil karya saya.
        </p>
      </header>

      <GalleryGrid />
    </main>
  );
}