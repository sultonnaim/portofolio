import type { LucideIcon } from "lucide-react";
import { Code2, BarChart3, Palette } from "lucide-react";

export interface Service {
  icon: LucideIcon;
  title: string;
  description: string;
  href: string;
}

export const services: Service[] = [
  {
    icon: Code2,
    title: "Web Development",
    description:
      "Bikin website responsif dari nol pakai Next.js & React — cepat, rapi, dan enak dipakai di semua device.",
    href: "#services",
  },
  {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Olah data mentah jadi insight yang gampang dipahami lewat dashboard, visualisasi, dan laporan yang jelas.",
    href: "#services",
  },
  {
    icon: Palette,
    title: "Design & Visual",
    description:
      "UI/UX design di Figma, editing gambar di Photoshop, sampai video editing di Premiere Pro & CapCut.",
    href: "#services",
  },
];
