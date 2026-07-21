export interface Project {
  title: string;
  description: string;
  image: string;
  tags?: string[];
  liveUrl?: string;
  videoUrl?: string;
  instagramUrl?: string;
  figmaUrl?: string;
}

export const webProjects: Project[] = [
  {
    title: "SIMPEL MANIS - DINKOPDAG",
    description:
      "Website ini merupakan project magang saya di Dinas Komunikasi dan Informatika Kota Surabaya, website ini merupakan Sistem Informasi Manajemen (SIM), yang digunakan DINKOPDAG untuk merekap pengusaha penjualan alkohol di surabaya, sistem ini mengggunakan framework laravel dan postgresql untuk data basenya",
    image: "/images/projects/web-1.jpg",
    tags: ["Laravel", "TailwindCSS", "PostgreSQL"],
    liveUrl: "https://example.com",
  },
  {
    title: "Taman Surabaya-Crowd Counting",
    description:
      "Website ini merupakan tugas akhir saya, dengan sistem microservice, lalu mengimplementasikan model deep learning yaitu YOLOv11 untuk menghitung keramaian manusia ditaman menggunakan streaming dari CCTV",
    image: "/images/projects/websitetugasakhir.png",
    tags: ["React", "Python", "RestAPI"],
    liveUrl: "https://example.com",
  },
  {
    title: "Rebuild BLC Surabaya",
    description:
      "Website ini merupakan project magang saya di Dinas Komunikasi dan Informatika Kota Surabaya, website ini merupakan Sistem Informasi Manajemen (SIM), yang digunakan DINKOPDAG untuk merekap pengusaha penjualan alkohol di surabaya, sistem ini mengggunakan framework laravel dan postgresql untuk data basenya",
    image: "/images/projects/web-1.jpg",
    tags: ["Laravel", "TailwindCSS", "PostgreSQL"],
    liveUrl: "https://example.com",
  },
];

export const designProjects: Project[] = [
  {
    title: "Konten Podcast Funting",
    description:
      "Konten youtube podcast ini merupakan salah satu kegiatan organisasi yang saya ikuti sebagai teknis di Broadcasting UNESA, Video ini diedit menggunakan Premier pro dan photoshop, selain editing saya juga mengoprasikan salah satu kamera dalam podcast ini",
    image: "/images/projects/youtube.png",
    tags: ["Photoshop", "Premiere Pro", "CapCut"],
    videoUrl: "https://youtu.be/l0z6pckEpJw?si=pKm3FjaeVKkDRLjr",
  },
  {
    title: "Media Sosial Management -Poster,Feeds & reels",
    description:
      "Media Sosial Manajemen disini bukan hanya mengelola saja, dalam penagalaman ini,saya juga mengedit berbagai poster dari kegiatan, membuat konten reels, dan juga membuat ide sebuah konten yang akan di  upload",
    image: "/images/projects/editing.jpeg",
    tags: ["Photoshop", "CapCut", "Canva"],
    instagramUrl: "https://www.instagram.com/sssltn29",
  },
  {
    title: "Design Aplikasi Bus Surabaya",
    description:
      "Desgin ini merupakan Ui/Ux Untuk Aplikasi Bus Surabaya yang saya buat, dengan beberapa fitur yang disambungkan menggunakan prototye dan design ini berkesematan di presentasikan kepada masiswa dari vietnam",
    image: "/images/projects/uiux.png",
    tags: ["Figma", "UI/UX", "Prototyping"],
    figmaUrl: "https://www.figma.com/proto/G1EKTVIYg7rgpZkU5IPMdj/ui-ux-uas?node-id=0-1&t=mkuWEgYn8GQGluV7-1",
  },
  
];

export const dataProjects: Project[] = [
  {
    title: "Dashboard Analisis Penjualan",
    description:
      "Mengolah data penjualan mentah jadi dashboard interaktif yang nunjukin tren bulanan, produk terlaris, dan proyeksi sederhana.",
    image: "/images/projects/data-1.jpg",
    tags: ["Python", "Pandas", "Data Visualization"],
    liveUrl: "https://example.com",
  },
  {
    title: "Dashboard Analisis Penjualan",
    description:
      "Mengolah data penjualan mentah jadi dashboard interaktif yang nunjukin tren bulanan, produk terlaris, dan proyeksi sederhana.",
    image: "/images/projects/data-1.jpg",
    tags: ["Python", "Pandas", "Data Visualization"],
    liveUrl: "https://example.com",
  },
];