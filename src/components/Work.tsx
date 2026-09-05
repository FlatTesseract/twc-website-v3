"use client";

import {
  motion,
  useScroll,
  useTransform,
  useReducedMotion,
} from "framer-motion";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

type Project = {
  index: string;
  title: string;
  tag: string;
  metric: string;
  image: string;
  href: string;
};

const CDN = "https://video.thewidercollective.com";

const projects: Project[] = [
  {
    index: "01",
    title: "AirAsia",
    tag: "Aviation",
    metric: "1.1M reached · $0.06 / lead",
    image: "https://i.ytimg.com/vi/UH5sOdyTEpo/maxresdefault.jpg",
    href: "/case-study/airasia",
  },
  {
    index: "02",
    title: "MEV Autos",
    tag: "Automotive / Brand",
    metric: "Bangladesh's first homegrown EV",
    image: "/mev/surge-z-featured.jpg",
    href: "/case-study/mev",
  },
  {
    index: "03",
    title: "Smart Ed",
    tag: "Education / Brand",
    metric: "Learn. Lead. Shine.",
    image: "/smarted/applications/keyvisual.jpg",
    href: "/case-study/smarted",
  },
  {
    index: "04",
    title: "Mana Bay",
    tag: "Entertainment",
    metric: "3.5M impressions · 2× footfall",
    image: `${CDN}/Mana%20Bay/thumbnail.png`,
    href: "/case-study/manabay",
  },
  {
    index: "05",
    title: "Global Mission",
    tag: "Brand / Social impact",
    metric: "Full rebrand + hero film",
    image: "/covers/gmi.jpg",
    href: "/case-study/globalmission",
  },
  {
    index: "06",
    title: "Yoyoso",
    tag: "Retail / Lifestyle",
    metric: "2.5M reach · +40% footfall",
    image: "/covers/yoyoso.jpg",
    href: "/case-study/yoyoso",
  },
];

function ProjectCard({ project }: { project: Project }) {
  return (
    <Link href={project.href} className="group block">
      <div className="relative aspect-[4/3] overflow-hidden rounded-xl bg-[#2a2b32]">
        <img
          src={project.image}
          alt={project.title}
          loading="lazy"
          className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105"
        />

        {/* Legibility gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/15 to-transparent" />

        {/* Hover border glow */}
        <div className="absolute inset-0 rounded-xl border border-white/5 group-hover:border-accent/50 transition-colors duration-500 group-hover:glow" />

        {/* Top meta */}
        <span className="absolute top-5 left-5 font-display text-sm text-white/60">
          {project.index}
        </span>
        <span className="absolute top-5 right-5 text-[11px] uppercase tracking-[0.2em] text-white/70">
          {project.tag}
        </span>

        {/* Bottom caption */}
        <div className="absolute inset-x-0 bottom-0 p-6">
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-1 group-hover:text-accent transition-colors">
            {project.title}
          </h3>
          <p className="text-foreground/80 text-sm">{project.metric}</p>
        </div>
      </div>
    </Link>
  );
}

/* Desktop: pinned section that scrolls the track horizontally as you scroll down. */
function HorizontalTrack() {
  const targetRef = useRef<HTMLDivElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const [travel, setTravel] = useState(0);

  const { scrollYProgress } = useScroll({ target: targetRef });
  const x = useTransform(scrollYProgress, [0, 1], [0, -travel]);

  useEffect(() => {
    const measure = () => {
      const track = trackRef.current;
      if (!track) return;
      setTravel(Math.max(0, track.scrollWidth - window.innerWidth));
    };
    measure();
    window.addEventListener("resize", measure);
    return () => window.removeEventListener("resize", measure);
  }, []);

  return (
    <div
      ref={targetRef}
      style={{ height: `calc(${travel}px + 100vh)` }}
      className="relative"
    >
      <div className="sticky top-0 h-screen flex items-center overflow-hidden">
        <motion.div
          ref={trackRef}
          style={{ x }}
          className="flex gap-6 px-6 md:px-12 will-change-transform"
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="w-[72vw] max-w-[620px] flex-shrink-0"
            >
              <ProjectCard project={project} />
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}

/* Mobile / reduced-motion: native horizontal swipe with snap. */
function SwipeRow() {
  return (
    <div
      className="flex gap-5 overflow-x-auto pb-6 px-6 snap-x snap-mandatory"
      style={{ scrollbarWidth: "none" }}
    >
      {projects.map((project) => (
        <div
          key={project.title}
          className="flex-shrink-0 w-[82vw] sm:w-[60vw] md:w-[440px] snap-start"
        >
          <ProjectCard project={project} />
        </div>
      ))}
    </div>
  );
}

export function Work() {
  const reduce = useReducedMotion();

  return (
    <section id="work" className="py-32">
      {/* Section header */}
      <div className="max-w-7xl mx-auto px-6 mb-12 md:mb-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-sm uppercase tracking-[0.2em] text-accent mb-4">
            Selected work
          </p>
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <h2 className="font-display text-4xl md:text-5xl font-bold">Work</h2>
            <p className="hidden md:flex items-center gap-2 text-muted-foreground text-sm">
              Scroll to explore
              <span aria-hidden>→</span>
            </p>
          </div>
        </motion.div>
      </div>

      {/* Desktop pinned horizontal scroll */}
      {!reduce && (
        <div className="hidden md:block">
          <HorizontalTrack />
        </div>
      )}

      {/* Mobile + reduced-motion fallback */}
      <div className={reduce ? "block" : "md:hidden"}>
        <SwipeRow />
      </div>

      {/* Footer text */}
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        className="max-w-7xl mx-auto px-6 mt-16 text-center"
      >
        <p className="text-muted-foreground mb-6 text-lg">
          All of these started the same way: &quot;we need something that
          doesn&apos;t suck.&quot;
        </p>
        <Link
          href="https://canva.link/ogxi1295odzelty"
          target="_blank"
          className="inline-flex items-center gap-2 text-accent hover:underline"
        >
          All work →
        </Link>
      </motion.div>
    </section>
  );
}
