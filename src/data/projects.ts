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
      "Aplikasi manajemen nilai dan absensi untuk kampus, dibangun pakai Laravel dan terintegrasi dengan database PostgreSQL.",
    image: "/images/projects/webta.webp",
    gallery: ["/images/projects/webta.webp"],
    tags: ["React", "Python", "RestAPI"],
    liveUrl: "https://example.com",
    repoUrl: "https://github.com/sultonnaim/sistem-akademik",
  },
  {
    slug: "website-blc-surabaya",
    category: "web",
    title: "Rebuild Website BLC Surabaya",
    description:
      "Membangun ulang website Broadband Learning Center Surabaya menggunakan Laravel — merancang halaman utama, dashboard admin internal, serta pengembangan basis data selama magang di Diskominfo Surabaya.",
    image: "/images/projects/blc.webp",
    gallery: ["/images/projects/blc.webp"],
    tags: ["Laravel", "MySQL", "Magang"],
    repoUrl: "https://github.com/sultonnaim/blc-surabaya",
  },
  {
    slug: "website-simple-manis",
    category: "web",
    title: "Rebuild Website BLC Surabaya",
    description:
      "Membangun ulang website Broadband Learning Center Surabaya menggunakan Laravel — merancang halaman utama, dashboard admin internal, serta pengembangan basis data selama magang di Diskominfo Surabaya.",
    image: "/images/projects/simpel.webp",
    gallery: ["/images/projects/simpel.webp"],
    tags: ["Laravel", "MySQL", "Magang"],
    repoUrl: "https://github.com/sultonnaim/blc-surabaya",
  },
];

export const designProjects: Project[] = [
  {
    slug: "konten-visual-reels",
    category: "design",
    title: "Konten Visual & Reels",
    description:
      "Desain feed Instagram dan editing video reels untuk brand lokal, dari konsep sampai render final di Premiere Pro & CapCut.",
    image: "/images/projects/video.webp",
    gallery: ["/images/projects/video.webp"],
    tags: ["Photoshop", "Premiere Pro", "CapCut"],
    instagramUrl: "https://instagram.com",
  },
  {
    slug: "Poster",
    category: "design",
    title: "Konten Visual & Reels",
    description:
      "Desain feed Instagram dan editing video reels untuk brand lokal, dari konsep sampai render final di Premiere Pro & CapCut.",
    image: "/images/projects/poster.webp",
    gallery: ["/images/projects/poster.webp"],
    tags: ["Photoshop", "Premiere Pro", "CapCut"],
    instagramUrl: "https://instagram.com",
  },
  {
    slug: "ui-aplikasi-mobile",
    category: "design",
    title: "Redesign UI Aplikasi Mobile",
    description:
      "Riset ulang alur pengguna dan desain ulang tampilan aplikasi mobile dari nol pakai Figma, lengkap dengan prototype interaktif.",
    image: "/images/projects/ui.webp",
    gallery: ["/images/projects/uiux.webp"],
    pdfUrl: "/portfolio/ui-aplikasi-mobile.pdf",
    tags: ["Figma", "UI/UX", "Prototyping"],
    videoUrl: "https://youtube.com",
    figmaUrl: "https://figma.com/proto/xxxxx",
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
    liveUrl: "https://app.powerbi.com/view?r=xxxxx",
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
    tags: ["YOLOv11", "Computer Vision", "Roboflow", "Python"],
    repoUrl: "https://github.com/sultonnaim/crowd-counting-yolov11",
    datasetUrl: "https://universe.roboflow.com/sultonnaim/nama-dataset",
    videoUrl: "https://youtube.com/watch?v=xxxxx",
  },
];

export const allProjects: Project[] = [
  ...webProjects,
  ...designProjects,
  ...dataProjects,
];
