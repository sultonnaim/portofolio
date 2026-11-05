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
      "Mengembangkan website yang menampilkan informasi taman kota dan perkiraan jumlah pengunjung dari CCTV. Sistem ini menggunakan YOLOv11 untuk mendeteksi orang, kemudian hasilnya ditampilkan melalui integrasi REST API.",
    image: "/images/projects/webta.png",
    tags: ["React", "Yolov11", "Rest API"],
    liveUrl: "https://crowd-system-nine.vercel.app",
  },
  {
    slug: "website-blc-surabaya",
    category: "web",
    title: "Rebuild Website BLC Surabaya",
    description:
      "Membangun ulang website Broadband Learning Center Surabaya selama magang di Diskominfo. Saya mengerjakan halaman utama, dashboard admin, serta pengelolaan database menggunakan Laravel.",
    image: "/images/projects/blc.png",
    tags: ["laravel", "Postgresql"],
    repoUrl: "https://github.com/sultonnaim/projectBLC",
  },
  {
    slug: "website-simple-manis",
    category: "web",
    title: "Website Simpel Manis",
    description: "Mengembangkan website Simpel Manis untuk menyajikan informasi dan layanan secara lebih mudah diakses. Proyek ini menjadi pengalaman saya dalam membangun tampilan dan fitur website.",
    image: "/images/projects/simpelmanis.png",
    repoUrl: "https://github.com/sultonnaim/magang",
    tags: ["laravel", "Postgresql"],
  },
  {
    slug: "website-odoo",
    category: "web",
    title: "Website ERP odoo",
    description: "Mencoba membangun dan mengonfigurasi sistem ERP menggunakan Odoo untuk memahami bagaimana proses bisnis, pengelolaan data, dan berbagai aktivitas operasional dapat terintegrasi dalam satu sistem.",
    image: "/images/projects/odoo.png",
    repoUrl: "https://github.com/sultonnaim/odoo-project",
    tags: ["ERP", "Postgresql", "React"],
  },
];

export const designProjects: Project[] = [
  {
    slug: "konten-sosiaomedia",
    category: "design",
    title: "Konten Visual & Reels",
    description:
      "Membuat konten visual untuk media sosial, mulai dari desain feed hingga video reels. Saya terlibat dalam proses pengembangan konsep, desain, dan editing menggunakan Photoshop, Premiere Pro, serta CapCut.",
    image: "/images/projects/sosmed.png",
    instagramUrl: "https://www.instagram.com/research.bemunesa",
    tags: ["Photoshop", "CapCut", "Canva"],
  },
  {
    slug: "poster",
    category: "design",
    title: "Galeri Poster & Vector",
    description: "Kumpulan karya desain poster dan ilustrasi vector yang saya buat dengan mengeksplorasi komposisi, warna, tipografi, dan berbagai gaya visual.",
    image: "/images/projects/vector.png",
    instagramUrl: "https://www.instagram.com/sssltn29",
    tags: ["Ilustrator", "Infinite Design"],
  },
  {
    slug: "ui-aplikasi-mobile",
    category: "design",
    title: "Redesign UI Aplikasi Mobile",
    description:
      "Mendesain tampilan aplikasi mobile menggunakan Figma, mulai dari menyusun alur penggunaan hingga membuat prototype interaktif agar pengalaman pengguna terasa lebih nyaman.",
    image: "/images/projects/uiux.png",
    pdfUrl: "/portfolio/ui-aplikasi-mobile.pdf",
    tags: ["figma"],
  },
  {
    slug: "youtube-konten",
    category: "design",
    title: "video konten youtube",
    description: "Beberapa hasil editing video untuk konten YouTube, dengan fokus pada penyusunan footage, transisi, audio, dan tampilan visual agar video lebih menarik untuk ditonton.",
    image: "/images/projects/yt.png",
    videoUrl: "https://youtu.be/l0z6pckEpJw",
    tags: ["Adobe Premier", "Capcut"],
  },
];

export const dataProjects: Project[] = [
  {
    slug: "dashboard-analisis-penjualan",
    category: "data",
    title: "Dashboard Analisis Penjualan",
    description:
      "Mengolah data penjualan menjadi dashboard Power BI yang lebih mudah dibaca. Dari data tersebut, saya mencoba melihat tren penjualan, produk terlaris, dan beberapa insight yang bisa membantu memahami performa bisnis.",
    image: "/images/projects/dashboard.png",
    tags: ["Python", "PostgreSQL", "ETL", "Data Warehouse"],
    repoUrl: "https://github.com/sultonnaim/enterprise-sales-data-warehouse",
  },
  {
    slug: "crowd-counting-yolov11",
    category: "data",
    title: "Crowd Counting dengan YOLOv11",
    description:
      "Mengembangkan model YOLOv11 untuk mendeteksi dan menghitung jumlah orang dari rekaman CCTV. Dataset dikumpulkan dan dianotasi sendiri, kemudian model diuji untuk melihat performa deteksinya. Proyek ini merupakan tugas akhir saya yang telah dipublikasikan di Jurnal Smatika Sinta 4.",
    image: "/images/projects/yolo.png",
    tags: ["Python", "YOLO"],
    repoUrl: "https://github.com/sultonnaim/crowd-counting-yolov11",
  },
  {
    slug: "datapenjualan-bykarirnex",
    category: "data",
    title: "Pengolahan hasil jual(by karirnex)",
    description:
      "Mengolah data hasil penjualan menggunakan Microsoft Excel dan Power BI, kemudian menyajikannya dalam dashboard untuk melihat perkembangan penjualan dan performa produk.",
    image: "/images/projects/karirnex1.png",
    repoUrl: "https://github.com/sultonnaim/dashboard-penjualan",
    tags: ["Python", "Excel", " Google Bigquery", "Power BI"],
  },
  {
    slug: "dashboardpenjualanrevou",
    category: "data",
    title: "Dashboard Analisis Penjualan (byrevou)",
    description:
      "Membuat dashboard analisis penjualan sebagai bagian dari pembelajaran di RevoU. Saya mengeksplorasi data untuk melihat pola penjualan dan menyajikan hasilnya dalam bentuk visualisasi yang lebih mudah dipahami.",
    image: "/images/projects/revou.png",
    repoUrl: "https://github.com/sultonnaim/dashboard-penjualan",
    tags: ["Excel", "power BI"],
  },
  {
    slug: "dashboard-bootcamp-karirnex",
    category: "data",
    title: "Dashboard Analisis (bootcamp microsoft by karirnex)",
    description:
      "Mengerjakan dashboard menggunakan tools Microsoft untuk menyajikan data dalam bentuk visual. Proyek ini membantu saya memahami proses pengolahan data dan penyampaian informasi melalui dashboard.",
    image: "/images/projects/karirnex2.png",
    repoUrl: "https://github.com/sultonnaim/dashboard-penjualan",
    tags: ["Microsoft Office"],
  },
];

export const allProjects: Project[] = [
  ...webProjects,
  ...designProjects,
  ...dataProjects,
];