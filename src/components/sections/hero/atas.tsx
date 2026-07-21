"use client";

import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { ArrowRight, Code2, Palette } from "lucide-react";
import HeroBadge from "./HeroBadge";
import RotatingBadge from "./RotatingBadge";

const NAME = "M.Sultonun Naim";
const ROLES = ["Web Developer", "Data Analyst", " Creative Designer"];

export default function Atas() {
  return (
    <section id="home" className="relative overflow-hidden bg-white pt-14">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 px-6 py-14 md:grid-cols-2 md:py-20">
        {/* KIRI: teks */}
        <div>
          <HeroBadge text="Hallo Semuanya!" variant="dashed" />
          <h1 className="mt-6 text-4xl font-bold leading-tight text-slate-900 sm:text-5xl">
            Halo, Saya <span className="italic text-[#F5A623]">{NAME},</span>
          </h1>
          <RoleSwitcher />
          <p className="mt-6 max-w-md leading-relaxed text-slate-500">
            Berfokus pada pengembangan web, analisis data, dan desain digital
            untuk membangun solusi yang fungsional, mudah digunakan, dan terus
            berkembang seiring pengalaman.
          </p>

          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Link
              href="/projects"
              className="group flex items-center gap-3 rounded-full bg-[#1B3B2B] py-2 pl-6 pr-2 text-sm font-semibold text-white shadow-lg shadow-[#1B3B2B]/20 transition hover:bg-[#173224]"
            >
              Lihat Portofolio
              <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#F5A623] text-[#1B3B2B] transition group-hover:translate-x-1">
                <ArrowRight className="h-4 w-4" strokeWidth={2.5} />
              </span>
            </Link>
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=sultonnaim03@gmail.com&su=Halo"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-[#1B3B2B] transition hover:bg-white/90 sm:inline-block"
            >
              Hubungi Saya
            </a>
          </div>
        </div>

        <div className="relative mx-auto aspect-[4/5] w-full max-w-sm">
          <div className="absolute left-1/2 top-1/2 h-[88%] w-[88%] -translate-x-1/2 -translate-y-1/2 rounded-[45%_55%_60%_40%/55%_45%_60%_40%] bg-[#F5A623]" />
          <div className="absolute inset-0">
            <Image
              src="/images/profile.png"
              alt={NAME}
              fill
              priority
              className="rounded-[45%_55%_60%_40%/55%_45%_60%_40%] object-cover"
            />
          </div>
          <RotatingBadge className="absolute -right-2 -top-2 sm:-right-6 sm:-top-6" />
          <HeroBadge
            text="Designer"
            icon={Palette}
            variant="pill-light"
            delay={0.4}
            className="right-0 top-1/3 sm:-right-4"
          />
          <HeroBadge
            text="Web Developer"
            icon={Code2}
            variant="pill-dark"
            delay={0.6}
            className="-left-2 bottom-8 sm:-left-8"
          />
        </div>
      </div>
    </section>
  );
}

function RoleSwitcher() {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev + 1) % ROLES.length);
    }, 2200);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex h-11 items-center text-2xl font-bold text-slate-900 sm:text-3xl">
      <AnimatePresence mode="wait">
        <motion.span
          key={ROLES[index]}
          initial={{ opacity: 0, y: 14 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -14 }}
          transition={{ duration: 0.35, ease: "easeOut" }}
        >
          {ROLES[index]}
        </motion.span>
      </AnimatePresence>
    </div>
  );
}
