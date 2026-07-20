"use client";

import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

interface RotatingBadgeProps {
  text?: string;
  className?: string;
}

export default function RotatingBadge({
  text = "WEB DEV. DATA. DESIGN.",
  className = "",
}: RotatingBadgeProps) {
  const repeated = `${text}`.repeat(3);
  const pathId = "rotating-badge-path";

  return (
    <div className={`relative z-20 h-24 w-24 ${className}`}>
      <motion.svg
        viewBox="0 0 100 100"
        className="absolute inset-0 h-full w-full"
        animate={{ rotate: 360 }}
        transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
      >
        <defs>
          <path
            id={pathId}
            d="M 50, 50 m -38, 0 a 38,38 0 1,1 76,0 a 38,38 0 1,1 -76,0"
          />
        </defs>
        <circle cx="50" cy="50" r="49" fill="#1B3B2B" />
        <text fill="white" fontSize="7.5" fontWeight="600" letterSpacing="1">
          <textPath href={`#${pathId}`}>{repeated}</textPath>
        </text>
      </motion.svg>
      <div className="absolute inset-0 flex items-center justify-center">
        <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5A623]">
          <ArrowUpRight className="h-4 w-4 text-[#1B3B2B]" strokeWidth={2.5} />
        </span>
      </div>
    </div>
  );
}
