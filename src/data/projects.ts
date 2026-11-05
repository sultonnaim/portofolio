export type ProjectCategoryId = "web" | "design" | "data";

export interface Project {
  slug: string;
  category: ProjectCategoryId;
  title: string;
  description: string;
  image: string;
  gallery?: string[];
  pageUrl?: string;
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
      "Antarmuka website untuk sistem penghitung kerumunan berbasis microservice di Taman Kota Surabaya — tugas akhir saya. Menampilkan hasil deteksi model YOLOv11 secara real-time lewat integrasi REST API.",
    image: "/images/projects/webta.png",
    liveUrl: "https://crowd-system-nine.vercel.app",
  },
  {
    slug: "website-blc-surabaya",
    category: "web",
    title: "Rebuild Website BLC Surabaya",
    description:
      "Membangun ulang website Broadband Learning Center Surabaya menggunakan Laravel — merancang halaman utama, dashboard admin internal, serta pengembangan basis data selama magang di Diskominfo Surabaya.",
    image: "/images/projects/blc.png",
    repoUrl: "https://github.com/sultonnaim/projectBLC",
  },
  {
    slug: "website-simple-manis",
    category: "web",
    title: "Website Simpel Manis",
    description: "[ISI DESKRIPSI PROJECT DI SINI]",
    image: "/images/projects/simpelmanis.png",
    repoUrl: "https://github.com/sultonnaim/magang",
    tags: [],
  },
  {
    slug: "website-odoo",
    category: "web",
    title: "Website ERP odoo",
    description: "[ISI DESKRIPSI PROJECT DI SINI]",
    image: "/images/projects/odoo.png",
    repoUrl: "https://github.com/sultonnaim/odoo-project",
    tags: [],
  },
];

export const designProjects: Project[] = [
  {
    slug: "konten-sosiaomedia",
    category: "design",
    title: "Konten Visual & Reels",
    description:
      "Desain feed Instagram dan editing video reels untuk brand lokal, dari konsep sampai render final di Premiere Pro & CapCut.",
    image: "/images/projects/sosmed.png",
    instagramUrl: "https://www.instagram.com/research.bemunesa",
  },
  {
    slug: "poster",
    category: "design",
    title: "Galeri Poster & Vector",
    description: "Kumpulan poster dan vector illustration hasil karya saya.",
    image: "/images/projects/vector.png",
    instagramUrl: "https://www.instagram.com/sssltn29",
  },
  {
    slug: "ui-aplikasi-mobile",
    category: "design",
    title: "Redesign UI Aplikasi Mobile",
    description:
      "Riset ulang alur pengguna dan desain ulang tampilan aplikasi mobile dari nol pakai Figma, lengkap dengan prototype interaktif.",
    image: "/images/projects/uiux.png",
    pdfUrl: "/portfolio/ui-aplikasi-mobile.pdf",
  },
  {
    slug: "youtube-konten",
    category: "design",
    title: "video kontenyt",
    description: "",
    image: "/images/projects/yt.png",
    videoUrl: "https://youtu.be/l0z6pckEpJw",
  },
];

export const dataProjects: Project[] = [
  {
    slug: "dashboard-analisis-penjualan",
    category: "data",
    title: "Dashboard Analisis Penjualan",
    description:
      "Mengolah data penjualan mentah jadi dashboard interaktif di Power BI yang nunjukin tren bulanan, produk terlaris, dan proyeksi sederhana.",
    image: "/images/projects/dashboard.png",
    repoUrl: "https://github.com/sultonnaim/enterprise-sales-data-warehouse",
  },
  {
    slug: "crowd-counting-yolov11",
    category: "data",
    title: "Crowd Counting dengan YOLOv11",
    description:
      "Model deep learning untuk menghitung jumlah orang dalam kerumunan dari citra, dilatih pakai dataset custom yang saya buat dan anotasi sendiri di Roboflow. Ini adalah tugas akhir saya, terbit di Jurnal Smatika Sinta 4.",
    image: "/images/projects/yolo.png",
    repoUrl: "https://github.com/sultonnaim/crowd-counting-yolov11",
  },
  {
    slug: "datapenjualan-bykarirnex",
    category: "data",
    title: "Pengolahan hasil jual(by karirnex)",
    description:
      "Mengolah data penjualan mentah jadi dashboard interaktif di Power BI yang nunjukin tren bulanan, produk terlaris, dan proyeksi sederhana.",
    image: "/images/projects/karirnex1.png",
    repoUrl: "https://github.com/sultonnaim/dashboard-penjualan",
  },
  {
    slug: "dashboardpenjualanrevou",
    category: "data",
    title: "Dashboard Analisis Penjualan (byrevou)",
    description:
      "Mengolah data penjualan mentah jadi dashboard interaktif di Power BI yang nunjukin tren bulanan, produk terlaris, dan proyeksi sederhana.",
    image: "/images/projects/revou.png",
    repoUrl: "https://github.com/sultonnaim/dashboard-penjualan",
  },
  {
    // slug dibedakan: sebelumnya sama persis dengan project pertama di atas
    slug: "dashboard-bootcamp-karirnex",
    category: "data",
    title: "Dashboard Analisis (bootcamp microsoft by karirnex)",
    description:
      "Mengolah data penjualan mentah jadi dashboard interaktif di Power BI yang nunjukin tren bulanan, produk terlaris, dan proyeksi sederhana.",
    image: "/images/projects/karirnex2.png",
    repoUrl: "https://github.com/sultonnaim/dashboard-penjualan",
  },
];

export const allProjects: Project[] = [
  ...webProjects,
  ...designProjects,
  ...dataProjects,
];