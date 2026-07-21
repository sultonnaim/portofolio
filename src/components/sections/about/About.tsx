"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Download } from "lucide-react";
import { stats } from "@/data/stats";
import { skillTags, type SkillTag } from "@/data/skillTags";
import { socials } from "@/data/socials";

const NAME = "M.Sultonun Naim";

export default function About() {
  return (
    <section id="about" className="bg-[#1B3B2B] px-6 py-20 md:py-28">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-16 md:grid-cols-2">
        {/* KIRI: foto + tag skill melayang */}
        <div className="relative mx-auto h-[440px] w-[380px] sm:w-[440px]">
          <div className="absolute left-1/2 top-1/2 h-80 w-80 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#F5A623] sm:h-96 sm:w-96" />

          <div className="absolute right-4 top-4 h-72 w-72 overflow-hidden rounded-full ring-8 ring-[#1B3B2B] sm:h-80 sm:w-80">
            <Image
              src="/images/about.png"
              alt={NAME}
              fill
              className="object-cover"
            />
          </div>

          {skillTags.map((tag, i) => (
            <SkillPill key={tag.label} tag={tag} delay={i * 0.08} />
          ))}
        </div>

        {/* KANAN: teks */}
        <div>
          <h2 className="text-3xl font-bold text-white sm:text-4xl">
            Siapa itu <span className="italic text-[#F5A623]">{NAME}</span>?
          </h2>

          <p className="mt-6 max-w-md leading-relaxed text-white/70">
            Saya adalah Fresh Graduate Manajemen Informatika yang memiliki
            ketertarikan pada pengembangan website, desain digital,
            serta data. Saya senang membangun solusi yang tidak hanya
            berjalan dengan baik, tetapi juga mudah digunakan dan memberikan
            informasi yang bermanfaat. Saat ini saya terus mengembangkan
            kemampuan melalui berbagai proyek pribadi untuk memperdalam
            pengalaman dan mengikuti perkembangan teknologi.
          </p>

          <div className="mt-8 flex flex-wrap gap-8">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl font-bold text-[#F5A623]">
                  {stat.value}
                </p>
                <p className="mt-1 text-sm text-white/60">{stat.label}</p>
              </div>
            ))}
          </div>

          <div className="mt-9 flex flex-wrap items-center gap-6">
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
          </div>

          {/* sosmed + email */}
          <div className="mt-8 flex flex-wrap items-center gap-3">
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
                className="flex h-11 w-11 items-center justify-center rounded-full border border-white/15 text-white transition hover:border-[#F5A623] hover:text-[#F5A623]"
              >
                {social.icon ? (
                  <social.icon className="h-5 w-5" strokeWidth={2} />
                ) : (
                  <span className="relative h-5 w-5">
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

function SkillPill({ tag, delay }: { tag: SkillTag; delay: number }) {
  const styles: Record<SkillTag["variant"], string> = {
    green: "bg-[#173224] text-white",
    yellow: "bg-[#F5A623] text-[#1B3B2B]",
    outline: "bg-white text-[#1B3B2B]",
  };

  return (
    <motion.span
      initial={{ opacity: 0, scale: 0.8 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true }}
      transition={{ delay, duration: 0.4 }}
      className={`absolute z-10 whitespace-nowrap rounded-full px-3.5 py-1.5 text-xs font-semibold shadow-md ${styles[tag.variant]} ${tag.className}`}
    >
      {tag.label}
    </motion.span>
  );
}
