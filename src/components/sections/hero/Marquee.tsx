"use client";

import { motion } from "framer-motion";

const ITEMS = [
  "UI/UX Design",
  "Web Develoment",
  "Video Editor",
  "Desainer Grafis",
  "Data Analyst",
  "AI Developer",
];

export default function Marquee() {
  const loop = [...ITEMS, ...ITEMS];

  return (
    <div className="relative overflow-hidden bg-[#1B3B2B] py-1">
      <div className="-skew-y-1 bg-[#F5A623] py-4">
        <motion.div
          className="flex w-max skew-y-1 items-center gap-10"
          animate={{ x: ["0%", "-50%"] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
        >
          {loop.map((item, i) => (
            <div key={i} className="flex items-center gap-10">
              <span className="text-xl font-bold text-[#1B3B2B]">{item}</span>
              <span className="text-lg text-[#1B3B2B]">✳</span>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
