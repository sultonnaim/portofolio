"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { tools } from "@/data/tools";

export default function ToolsRow() {
  return (
    <div className="mt-16 border-t border-slate-100 pt-10">
      <div className="mb-8 flex flex-col items-start gap-2 sm:flex-row sm:items-end sm:justify-between">
        <div>
          <span className="mb-2 flex items-center gap-2 text-sm font-semibold text-slate-500">
            <span className="h-[2px] w-4 bg-[#F5A623]" />
            Tools
          </span>
          <h3 className="text-xl font-bold text-slate-900 sm:text-2xl">
            <span className="italic text-[#F5A623]">Tools</span> Favorit Saya
          </h3>
        </div>
      </div>

      <div className="flex flex-wrap items-center gap-4">
        {tools.map((tool, i) => (
          <motion.div
            key={tool.name}
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
            className="group flex items-center gap-2.5 rounded-full border border-slate-200 bg-white px-4 py-2.5 transition hover:border-[#F5A623] hover:bg-slate-50"
          >
            <span className="relative h-5 w-5 shrink-0">
              <Image
                src={tool.icon}
                alt={tool.name}
                fill
                className="object-contain"
              />
            </span>
            <span className="text-sm font-medium text-slate-600 group-hover:text-slate-900">
              {tool.name}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}