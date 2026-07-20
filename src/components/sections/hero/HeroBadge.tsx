"use client";

import { motion } from "framer-motion";
import { LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";

interface HeroBadgeProps {
  text: string;
  icon?: LucideIcon;
  variant?: "dashed" | "pill-dark" | "pill-light";
  /** hanya berlaku untuk variant="pill-dark", nambahin segitiga penunjuk */
  pointer?: boolean;
  className?: string;
  delay?: number;
}

export default function HeroBadge({
  text,
  icon: Icon,
  variant = "dashed",
  pointer = false,
  className,
  delay = 0,
}: HeroBadgeProps) {
  // gaya "annotation" ala selection box Figma — cocok sama identitasmu sebagai UI/UX designer
  if (variant === "dashed") {
    return (
      <motion.div
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        className={cn(
          "relative inline-flex w-fit items-center rounded-md border border-dashed border-slate-300 px-4 py-2 text-sm font-medium text-slate-600",
          className
        )}
      >
        <span className="absolute -left-[3px] -top-[3px] h-[7px] w-[7px] border border-[#F5A623] bg-white" />
        <span className="absolute -right-[3px] -top-[3px] h-[7px] w-[7px] border border-[#F5A623] bg-white" />
        <span className="absolute -bottom-[3px] -left-[3px] h-[7px] w-[7px] border border-[#F5A623] bg-white" />
        <span className="absolute -bottom-[3px] -right-[3px] h-[7px] w-[7px] border border-[#F5A623] bg-white" />
        {text}
      </motion.div>
    );
  }

  if (variant === "pill-dark") {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.85 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay, duration: 0.4 }}
        className={cn(
          "absolute z-10 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#1B3B2B] px-4 py-2.5 text-sm font-semibold text-white shadow-lg",
          className
        )}
      >
        {pointer && (
          <span className="absolute -left-2 top-1/2 h-0 w-0 -translate-y-1/2 border-y-[7px] border-r-[8px] border-y-transparent border-r-[#1B3B2B]" />
        )}
        {Icon && <Icon className="h-4 w-4 text-[#F5A623]" strokeWidth={2.5} />}
        {text}
      </motion.div>
    );
  }

  // pill-light
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.85 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay, duration: 0.4 }}
      className={cn(
        "absolute z-10 inline-flex items-center gap-2 whitespace-nowrap rounded-full bg-[#F5A623] px-4 py-2.5 text-sm font-semibold text-[#1B3B2B] shadow-lg",
        className
      )}
    >
      {Icon && <Icon className="h-4 w-4" strokeWidth={2.5} />}
      {text}
    </motion.div>
  );
}
