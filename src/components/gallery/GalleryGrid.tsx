"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import { galleryItems, type GalleryCategory } from "@/data/gallery";

type Filter = "all" | GalleryCategory;

const FILTERS: { id: Filter; label: string }[] = [
  { id: "all", label: "Semua" },
  { id: "poster", label: "Poster" },
  { id: "vector", label: "Vector" },
];

export default function GalleryGrid() {
  const [filter, setFilter] = useState<Filter>("all");
  const [active, setActive] = useState<number | null>(null);

  const items =
    filter === "all"
      ? galleryItems
      : galleryItems.filter((item) => item.category === filter);

  const isOpen = active !== null;

  // keyboard: Esc tutup, panah kiri/kanan ganti gambar; scroll body dikunci
  useEffect(() => {
    if (!isOpen) return;

    function onKey(e: KeyboardEvent) {
      if (e.key === "Escape") setActive(null);
      if (e.key === "ArrowRight")
        setActive((p) => (p === null ? null : (p + 1) % items.length));
      if (e.key === "ArrowLeft")
        setActive((p) =>
          p === null ? null : (p - 1 + items.length) % items.length
        );
    }

    window.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      window.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [isOpen, items.length]);

  function next() {
    setActive((p) => (p === null ? null : (p + 1) % items.length));
  }

  function prev() {
    setActive((p) =>
      p === null ? null : (p - 1 + items.length) % items.length
    );
  }

  const current = active !== null ? items[active] : null;

  return (
    <div>
      {/* filter */}
      <div className="flex flex-wrap items-center gap-2 px-2 pb-4 sm:px-4">
        {FILTERS.map((f) => (
          <button
            key={f.id}
            onClick={() => setFilter(f.id)}
            className={`rounded-full px-4 py-1.5 text-sm font-semibold transition ${
              filter === f.id
                ? "bg-[#1B3B2B] text-white"
                : "bg-slate-100 text-slate-600 hover:bg-slate-200"
            }`}
          >
            {f.label}
          </button>
        ))}
      </div>

      {/* grid penuh selebar layar, jarak antar kotak kecil */}
      <div className="grid grid-cols-2 gap-1.5 px-1.5 sm:grid-cols-3 sm:gap-2 sm:px-2 lg:grid-cols-4 xl:grid-cols-5">
        {items.map((item, i) => (
          <motion.button
            key={item.src}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.3, delay: Math.min(i * 0.03, 0.3) }}
            onClick={() => setActive(i)}
            className="group relative aspect-[4/5] overflow-hidden bg-slate-100"
          >
            <img
              src={item.src}
              alt={item.title}
              loading="lazy"
              className="h-full w-full object-cover transition duration-500 group-hover:scale-105"
            />
            <span className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-3 pb-2 pt-8 text-left text-xs font-semibold text-white opacity-0 transition group-hover:opacity-100">
              {item.title}
            </span>
          </motion.button>
        ))}
      </div>

      {items.length === 0 && (
        <p className="px-4 py-16 text-center text-slate-400">
          Belum ada karya di kategori ini.
        </p>
      )}

      {/* lightbox */}
      <AnimatePresence>
        {current && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={() => setActive(null)}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-black/90 p-4"
          >
            <button
              onClick={() => setActive(null)}
              aria-label="Tutup"
              className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
            >
              <X className="h-5 w-5" />
            </button>

            {items.length > 1 && (
              <>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    prev();
                  }}
                  aria-label="Sebelumnya"
                  className="absolute left-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <ChevronLeft className="h-6 w-6" />
                </button>
                <button
                  onClick={(e) => {
                    e.stopPropagation();
                    next();
                  }}
                  aria-label="Berikutnya"
                  className="absolute right-3 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-white/10 text-white transition hover:bg-white/20"
                >
                  <ChevronRight className="h-6 w-6" />
                </button>
              </>
            )}

            <figure
              onClick={(e) => e.stopPropagation()}
              className="flex max-h-full flex-col items-center"
            >
              <img
                key={current.src}
                src={current.src}
                alt={current.title}
                className="max-h-[82vh] max-w-full rounded-lg object-contain"
              />
              <figcaption className="mt-3 text-center text-sm text-white/80">
                {current.title}
              </figcaption>
            </figure>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}