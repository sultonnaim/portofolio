"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { services } from "@/data/services";
import ToolsRow from "./ToolsRow";

export default function Services() {
  return (
    <section id="services" className="bg-white px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* header */}
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-end">
          <div>
            <span className="mb-3 flex items-center gap-2 text-sm font-semibold text-slate-500">
              <span className="h-[2px] w-4 bg-[#F5A623]" />
              Services
            </span>
            <h2 className="text-3xl font-bold text-slate-900 sm:text-4xl">
              <span className="italic text-[#F5A623]">Layanan</span> yang saya
              tawarkan
            </h2>
          </div>

          <a
            href="https://wa.link/slr4m8"
            target="_blank"
            className="group flex items-center gap-3 rounded-full bg-[#1B3B2B] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-lg shadow-[#1B3B2B]/20 transition hover:bg-[#173224]"
          >
            Diskusi Proyek
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5A623] text-[#1B3B2B] transition group-hover:translate-x-1">
              <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
            </span>
          </a>
        </div>

        {/* cards */}
        <div className="mt-12 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group rounded-2xl bg-[#1B3B2B] p-7 transition hover:bg-[#0f2a1c]"
            >
              <span className="flex h-14 w-14 items-center justify-center rounded-full bg-[#F5A623] shadow-sm ring-4 ring-white/10">
                <service.icon className="h-6 w-6 text-white" strokeWidth={2} />
              </span>

              <h3 className="mt-6 text-lg font-bold text-white">
                {service.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/70">
                {service.description}
              </p>

              <a
                href={service.href}
                className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#F5A623] transition group-hover:text-white"
              >
                Selengkapnya
                <ArrowRight className="h-4 w-4 transition group-hover:translate-x-1" />
              </a>
            </motion.div>
          ))}
        </div>

        <ToolsRow />
      </div>
    </section>
  );
}
