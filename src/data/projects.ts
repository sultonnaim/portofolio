export type ProjectCategoryId = "web" | "design" | "data";

export interface Project {
  slug: string;
  category: ProjectCategoryId;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
  pdfUrl?: string;
  tags?: string[];
  liveUrl?: string;
  repoUrl?: string;
  datasetUrl?: string;
  videoUrl?: string;
  instagramUrl?: string;
  figmaUrl?: string;
}

export const webProjects: Project[] = [
  {
    slug: "sistem-informasi-taman",
    category: "web",
    title: "Website Taman Kota Surabaya",
    description:
      "Website taman kota surabaya sebagai wadah informasi, dengan sistem informasi keramaian dengan deep learning.",
    image: "/images/projects/webta.webp",
    gallery: ["/images/projects/webta.webp"],
    tags: ["React", "Python -RestAPI"],
    liveUrl: "https://crowd-system-nine.vercel.app",
  },
  {
    slug: "website-blc-surabaya",
    category: "web",
    title: "Website BLC Surabaya",
    description:
      "Website Broadband Learning Center Surabaya menggunakan Laravel — Merancang ulang untuk Diskominfo Surabaya.",
    image: "/images/projects/blc.webp",
    gallery: ["/images/projects/blc.webp"],
    tags: ["Laravel", "MySQL"],
    repoUrl: "https://github.com/sultonnaim/blc-surabaya",
  },
  {
    slug: "website simpel manis",
    category: "web",
    title: " Website Simpel Manis DINKOPDAG",
    description: "Web administrasi untuk informasi penjualan alkohol Dinas Koperasi dan perdagangan",
    image: "/images/projects/simpel.webp",
    tags: ["Laravel", "PostgreSql"],
    gallery: ["/images/projects/simpel.webp"],
  },
];

export const designProjects: Project[] = [
  {
    slug: "konten-visual-reels",
    category: "design",
    title: "Konten Visual & Reels",
    description:
      "Desain feed Instagram dan editing video youtebe, dari konsep sampai selesai final di Premiere Pro & CapCut.",
    image: "/images/projects/video.webp",
    gallery: ["/images/projects/video.webp"],
    tags: [ "Premiere Pro", "CapCut"],
  },
  {
    slug: "poster",
    category: "design",
    title: "Design Poster dan Vector",
    description: "Berbagai desain seperti poster, vector, desain cover. Untuk kebutuhan sosmed, media dan website",
    image: "/images/projects/poster.webp",
    gallery: ["/images/projects/poster.webp"],
    tags: ["Photohshop", "Figma -Canva"],
  },
  {
    slug: "ui-aplikasi-mobile",
    category: "design",
    title: "UI Aplikasi Mobile",
    description:
      "Riset ulang alur pengguna dan desain ulang tampilan aplikasi mobile dari nol pakai Figma, lengkap dengan prototype.",
    image: "/images/projects/ui.webp",
    gallery: ["/images/projects/uiux.webp"],
    pdfUrl: "/portfolio/ui-aplikasi-mobile.pdf",
    tags: ["Figma", "UI/UX"],
  },
];

export const dataProjects: Project[] = [
  {
    slug: "dashboard-analisis-penjualan",
    category: "data",
    title: "Dashboard Analisis Penjualan",
    description:
      "Mengolah data penjualan mentah jadi dashboard interaktif di Power BI yang nunjukin tren bulanan, produk terlaris, dan proyeksi sederhana.",
    image: "/images/projects/dashboard.webp",
    gallery: ["/images/projects/dashbard.webp"],
    tags: ["Power BI", "DAX", "Data Visualization"],
    repoUrl: "https://github.com/sultonnaim/dashboard-penjualan",
  },
  {
    slug: "crowd-counting-yolov11",
    category: "data",
    title: "Crowd Counting dengan YOLOv11",
    description:
      "Model deep learning untuk menghitung jumlah orang dalam kerumunan dari citra, dilatih pakai dataset custom yang saya buat dan anotasi sendiri di Roboflow. Ini adalah tugas akhir saya, terbit di Jurnal Smatika Sinta 4.",
    image: "/images/projects/dataset.webp",
    gallery: ["/images/projects/dataset.webp"],
    tags: ["YOLOv11", "Computer Vision"],
    repoUrl: "https://github.com/sultonnaim/crowd-counting-yolov11",
  },
];

export const allProjects: Project[] = [
  ...webProjects,
  ...designProjects,
  ...dataProjects,
];