export interface SkillTag {
  label: string;
  variant: "green" | "yellow" | "outline";
  className: string;
}

export const skillTags: SkillTag[] = [
  { label: "UI/UX Design", variant: "yellow", className: "-top-3 left-6 -rotate-3" },
  { label: "Web Development", variant: "green", className: "top-16 -left-12 rotate-2" },
  { label: "Data Analysis", variant: "outline", className: "top-32 -left-4 -rotate-2" },
  { label: "Figma", variant: "yellow", className: "bottom-20 -left-10 rotate-3" },
  { label: "Photoshop", variant: "green", className: "bottom-4 left-10 -rotate-2" },
  { label: "Premiere Pro", variant: "outline", className: "bottom-28 left-28 rotate-1" },
];