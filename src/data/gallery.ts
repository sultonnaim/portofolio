export type GalleryCategory = "poster" | "vector";

export interface GalleryItem {
  src: string;
  title: string;
  category: GalleryCategory;
}

// Taruh gambar di public/images/gallery/ lalu isi daftar di bawah.
// Tambah karya baru = tambah satu baris, halamannya otomatis ikut.
// Saran file: lebar 1200px, format .webp, sudah dikompres.
export const galleryItems: GalleryItem[] = [
  {
    src: "/images/gallery/poster-1.webp",
    title: "Poster 1",
    category: "poster",
  },
  {
    src: "/images/gallery/poster-2.webp",
    title: "Poster 2",
    category: "poster",
  },
  {
    src: "/images/gallery/vector-1.webp",
    title: "Vector 1",
    category: "vector",
  },
  {
    src: "/images/gallery/vector-2.webp",
    title: "Vector 2",
    category: "vector",
  },
];