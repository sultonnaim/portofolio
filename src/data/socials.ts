import { Mail } from "lucide-react";
import type { LucideIcon } from "lucide-react";

export interface Social {
  label: string;
  href: string;
  icon?: LucideIcon;
  imageIcon?: string;
}

// Ganti semua href di bawah ini dengan akun asli kamu
export const socials: Social[] = [
  {
    label: "Email",
    href: "https://mail.google.com/mail/?view=cm&fs=1&to=sultonnaim03@gmail.com&su=Halo",
    icon: Mail,
  },
  {
    label: "GitHub",
    href: "https://github.com/sultonnaim",
    imageIcon: "/icons/github.svg",
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/msultonunnaim",
    imageIcon: "/icons/linkedin.svg",
  },
  {
    label: "Instagram",
    href: "https://instagram.com/sultonnm_",
    imageIcon: "/icons/instagram.svg",
  },
];