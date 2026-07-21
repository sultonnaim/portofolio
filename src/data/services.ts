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
      "Bikin website yang responsif menggunakan berbagai framerwork cepat, rapi, dan enak dipakai di semua device.",
    href: "/projects#web",
  },
  {
    icon: Palette,
    title: "Design & Visual",
    description:
      "UI/UX design di Figma, editing gambar di Photoshop, sampai video editing di Premiere Pro & CapCut.",
    href: "/projects#design",
  },
    {
    icon: BarChart3,
    title: "Data Analysis",
    description:
      "Olah data mentah jadi insight yang gampang dipahami lewat dashboard, visualisasi, dan laporan yang jelas.",
    href: "/projects#data",
  },
];