"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { socials } from "@/data/socials";
import { tools } from "@/data/tools";
import { education } from "@/data/education";
import { experience } from "@/data/experience";
import { organizations } from "@/data/organiations";
import { personalSkills } from "@/data/personalskills";
import { certifications } from "@/data/certifications";
import type { TimelineEntry } from "@/data/education";

const NAME = "M.Sultonun Naim";
const ROLE = "Web Developer & Data Enthusiast";
const SUMMARY =
  "Fresh graduate D4 Manajemen Informatika dengan ketertarikan pada pengembangan website, desain digital, serta data. Saya senang membangun solusi yang tidak hanya berjalan dengan baik, tetapi juga mudah digunakan dan memberikan informasi yang bermanfaat.";

export default function About() {
  return (
    <section id="about" className="bg-[#1B3B2B] px-6 py-20 md:py-28">
      <div className="mx-auto max-w-6xl">
        {/* header kecil, konsisten sama section lain */}
        <span className="mb-3 flex items-center gap-2 text-sm font-semibold text-[#F5A623]">
          <span className="h-[2px] w-4 bg-[#F5A623]" />
          About Me
        </span>

        {/* INTRO: foto polaroid + teks + software skills */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-[220px_1fr] md:gap-14">
          {/* foto ala polaroid, sedikit dimiringkan */}
          <motion.div
            initial={{ opacity: 0, rotate: 0, y: 12 }}
            whileInView={{ opacity: 1, rotate: -3, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="relative mx-auto w-40 md:mx-0 md:w-full"
          >
            <div className="rounded-2xl bg-white p-2.5 pb-6 shadow-xl">
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-lg bg-slate-100">
                <Image
                  src="/images/profile.png"
                  alt={NAME}
                  fill
                  className="object-cover"
                />
              </div>
            </div>
            <span className="absolute -top-2.5 left-1/2 h-5 w-5 -translate-x-1/2 rounded-full bg-[#F5A623] shadow-md ring-4 ring-[#1B3B2B]" />
          </motion.div>

          {/* teks intro */}
          <div>
            <p className="flex items-center gap-2 text-sm text-white/60">
              Hallo saya
            </p>
            <h2 className="mt-1 text-3xl font-bold leading-tight text-white sm:text-4xl">
              {NAME}
            </h2>
            <p className="mt-1.5 inline-block border-b-2 border-[#F5A623]/50 pb-1 text-base font-semibold text-[#F5A623] sm:text-lg">
              {ROLE}
            </p>

            <p className="mt-5 max-w-2xl text-sm leading-relaxed text-white/70">
              {SUMMARY}
            </p>

            {/* SOFTWARE SKILLS — dipindah ke sini, tepat di bawah deskripsi diri */}
            <div className="mt-6">
              <p className="mb-3 text-xs font-semibold uppercase tracking-wide text-white/50">
                Software Skills
              </p>
              <div className="flex flex-wrap gap-3">
                {tools.map((tool, i) => (
                  <motion.span
                    key={tool.name}
                    initial={{ opacity: 0, y: 10 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-40px" }}
                    transition={{ duration: 0.4, delay: i * 0.05 }}
                    className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-medium text-white ring-1 ring-white/10"
                  >
                    <span className="relative h-4 w-4 shrink-0">
                      <Image
                        src={tool.icon}
                        alt={tool.name}
                        fill
                        className="object-contain"
                      />
                    </span>
                    {tool.name}
                  </motion.span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* 3 KOLOM: Pendidikan (+Sertifikasi) / Pengalaman / Organisasi */}
        <div className="mt-16 grid grid-cols-1 gap-10 border-t border-white/10 pt-12 sm:grid-cols-2 lg:grid-cols-3">
          <div>
            <InfoColumn heading="Pendidikan" items={education} delay={0} />

            {/* Sertifikasi ditaruh di bawah Pendidikan, satu kolom yang sama */}
            <div className="mt-8">
              <SectionHeading>Sertifikasi</SectionHeading>
              <ul className="space-y-2">
                {certifications.map((cert) => (
                  <li
                    key={cert}
                    className="flex items-start gap-2 text-sm text-white/70"
                  >
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#F5A623]" />
                    {cert}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <InfoColumn heading="Pengalaman" items={experience} delay={0.1} />
          <InfoColumn
            heading="Organisasi"
            items={organizations}
            delay={0.2}
          />
        </div>

        {/* PERSONAL / TECHNICAL SKILLS */}
        <div className="mt-14 border-t border-white/10 pt-12">
          <SectionHeading>Personal skill</SectionHeading>
          <div className="flex flex-wrap gap-2">
            {personalSkills.map((skill, i) => (
              <motion.span
                key={skill}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true, margin: "-40px" }}
                transition={{ duration: 0.3, delay: i * 0.04 }}
                className={`rounded-full px-3.5 py-1.5 text-xs font-semibold ${
                  i % 2 === 0
                    ? "bg-[#F5A623] text-[#1B3B2B]"
                    : "bg-white/10 text-white ring-1 ring-white/15"
                }`}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </div>

        {/* DOWNLOAD CV + SOSMED — dipindah ke paling bawah */}
        <div className="mt-14 flex flex-wrap items-center gap-4 border-t border-white/10 pt-10">
          <a
            href="/resume.pdf"
            download
            className="group flex items-center gap-3 rounded-full bg-[#F5A623] py-2 pl-6 pr-2 text-sm font-semibold text-[#1B3B2B] shadow-lg transition hover:bg-[#e6981a]"
          >
            Download CV
            <span className="flex h-9 w-9 items-center justify-center rounded-full bg-[#1B3B2B] text-white transition group-hover:translate-x-1">
              <Download className="h-4 w-4" />
            </span>
          </a>

          <div className="flex flex-wrap items-center gap-3">
            {socials.map((social) => (
              <a
                key={social.label}
                href={social.href}
                target={
                  social.href.startsWith("mailto:") ? undefined : "_blank"
                }
                rel={
                  social.href.startsWith("mailto:")
                    ? undefined
                    : "noopener noreferrer"
                }
                aria-label={social.label}
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#F5A623] hover:text-[#F5A623]"
              >
                {social.icon ? (
                  <social.icon className="h-4 w-4" strokeWidth={2} />
                ) : (
                  <span className="relative h-4 w-4">
                    <Image
                      src={social.imageIcon!}
                      alt={social.label}
                      fill
                      className="object-contain [filter:invert(1)]"
                    />
                  </span>
                )}
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function SectionHeading({ children }: { children: string }) {
  return (
    <h3 className="mb-5 text-lg font-bold text-white">
      {children}
      <span className="mt-1.5 block h-[3px] w-8 bg-[#F5A623]" />
    </h3>
  );
}

function InfoColumn({
  heading,
  items,
  delay = 0,
}: {
  heading: string;
  items: TimelineEntry[];
  delay?: number;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-60px" }}
      transition={{ duration: 0.5, delay }}
    >
      <SectionHeading>{heading}</SectionHeading>
      <ol className="space-y-5 border-l border-white/15 pl-5">
        {items.map((item) => (
          <li key={item.title} className="relative">
            <span className="absolute -left-[25px] top-1 h-2.5 w-2.5 rounded-full bg-[#F5A623]" />
            <p className="text-sm font-semibold text-white">{item.title}</p>
            <p className="mt-0.5 text-xs text-white/60">{item.subtitle}</p>
            <p className="mt-1 text-[11px] font-medium text-[#F5A623]/80">
              {item.period}
            </p>
          </li>
        ))}
      </ol>
    </motion.div>
  );
}