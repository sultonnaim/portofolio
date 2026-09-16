export interface CategoryTool {
  name: string;
  icon: string; // path ke public/icons/...
}

export interface ProjectCategoryMeta {
  id: "web" | "design" | "data";
  label: string;
  tagline: string;
  description: string;
  tools: CategoryTool[];
}

export const projectCategories: ProjectCategoryMeta[] = [
  {
    id: "web",
    label: "Web Development",
    tagline: "Wujudkan ide digital Anda",
    description:
      "Kumpulan website yang saya bangun dari sisi frontend sampai integrasi backend — mulai dari project magang, tugas akhir sampai project pribadi. Fokus saya di stack Laravel, RESTful API, dan pengelolaan database SQL.",
    tools: [
      { name: "Laravel", icon: "/icons/laravel.svg" },{ name: "React", icon: "/icons/react.svg" },
      { name: "SQL", icon: "/icons/sql.svg" },
      { name: "VS Code", icon: "/icons/vscode.svg" },
      { name: "Git & GitHub", icon: "/icons/github.svg" },
      
    ],
  },
  {
    id: "design",
    label: "Design Grafis",
    tagline: "Visual, UI/UX, dan Konten",
    description:
      "UI/UX design, konten visual, dan video editing untuk berbagai kebutuhan — dari riset alur pengguna di Figma sampai konten sosial media yang siap tayang, hasil dari pengalaman saya sebagai staff media & dokumentasi di beberapa organisasi kampus.",
    tools: [
      { name: "Figma", icon: "/icons/figma.svg" },
      { name: "Photoshop", icon: "/icons/photoshop.svg" },
      { name: "Premiere Pro", icon: "/icons/premierepro.svg" },
      { name: "Cap Cut", icon: "/icons/capcut.svg" },
    ],
  },
  {
    id: "data",
    label: "Data",
    tagline: "Analisis dan Model",
    description:
      "Analisis data dan model machine learning untuk membantu pengambilan keputusan — dari dashboard interaktif di Power BI sampai model computer vision yang saya kembangkan sebagai tugas akhir kuliah.",
    tools: [
      { name: "Python", icon: "/icons/python.svg" },
      { name: "Power BI", icon: "/icons/bi.svg" },
      { name: "SQL", icon: "/icons/sql.svg" },
    ],
  },
];