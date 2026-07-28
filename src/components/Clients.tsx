"use client";

import { motion, useInView } from "framer-motion";
import { useRef } from "react";

// Client logos - matching the provided image grid
// Row 1: Ittefaq, Bengal Meat Deli, AirAsia, Mana Bay, Adeen & Co
// Row 2: Fakir Apparels, Yoyoso, Maldivian, Bakkah Holdings, Vintage Bake Cafe
// Row 3: Let's Vibe, Sayeman Beach Resort, Tripper, Global Mission Institute, Renai
// Row 4: Este Medical Group, GenderGP
const clients = [
  { name: "Doinik Ittefaq", logo: "/logos/doinik-ittefaq.png" },
  { name: "Bengal Meat", logo: "/logos/bengal-meat.png" },
  { name: "AirAsia", logo: "/logos/air-asia.png" },
  { name: "Mana Bay", logo: "/logos/mana-bay-black.png" },
  { name: "Adeen & Co", logo: "/logos/adeen-co.png" },
  { name: "Fakir Apparels", logo: "/logos/fakir-apparels.png" },
  { name: "Yoyoso", logo: "/logos/yoyoso.png" },
  { name: "Maldivian", logo: "/logos/Maldivian.png" },
  { name: "Bakkah Holdings", logo: "/logos/bakkah-holdings.png" },
  { name: "Vintage Bake Cafe", logo: "/logos/vintage-bake-cafe.png" },
  { name: "Sayeman Beach Resort", logo: "/logos/sayeman.png" },
  { name: "Tripper", logo: "/logos/tripper.png" },
  { name: "Global Mission Institute", logo: "/logos/global-mission-institute.png" },
  { name: "Renai", logo: "/logos/renai.png" },
  { name: "GenderGP", logo: "/logos/gendergp.png" },
  { name: "Este Medical Group", logo: "/logos/este-medical-group.png" },
  { name: "Camel", logo: "/logos/camel.png" },
  { name: "Death Corp Piggies", logo: "/logos/death-corp-piggies.png" },
];

function LogoMarquee({
  items,
  direction = "left",
  paused = false,
}: {
  items: typeof clients;
  direction?: "left" | "right";
  paused?: boolean;
}) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden">
      {/* Perf: CSS keyframe animation runs on the compositor (no per-frame JS)
          and is paused entirely while the section is off-screen. */}
      <div
        className="flex gap-12 py-4 w-max will-change-transform"
        style={{
          animation: `${
            direction === "left" ? "marquee-left" : "marquee-right"
          } 30s linear infinite`,
          animationPlayState: paused ? "paused" : "running",
        }}
      >
        {duplicatedItems.map((client, i) => {
          const isEste = client.name === "Este Medical Group";

          return (
            <div
              key={`${client.name}-${i}`}
              className="flex-shrink-0 px-12 py-6 border border-border/50 rounded-lg hover:border-accent/50 transition-colors group flex items-center justify-center min-w-[360px] h-[200px]"
            >
              <div>
                <img
                  src={client.logo}
                  alt={`${client.name} logo`}
                  className={`object-contain transition-opacity grayscale group-hover:grayscale-0 ${
                    isEste
                      ? "max-h-24 max-w-[220px] opacity-80 group-hover:opacity-90 brightness-0 invert"
                      : "max-h-40 max-w-[320px] opacity-75 group-hover:opacity-100"
                  }`}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export function Clients() {
  const sectionRef = useRef<HTMLElement>(null);
  const inView = useInView(sectionRef, { margin: "200px 0px" });

  return (
    <section ref={sectionRef} className="py-32 bg-muted/30">
      <div className="max-w-7xl mx-auto px-6 mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold text-center mb-4"
        >
          Businesses who wanted different.
        </motion.h2>
      </div>

      {/* Logo marquees */}
      <div className="space-y-4 mb-12">
        <LogoMarquee items={clients} direction="left" paused={!inView} />
        <LogoMarquee
          items={clients.slice().reverse()}
          direction="right"
          paused={!inView}
        />
      </div>

      <div className="max-w-7xl mx-auto px-6 text-center">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-muted-foreground text-lg"
        >
          Airlines. Healthcare. Retail. Web3. Hotels.
          <br />
          <span className="text-accent">Ambition{">"} Industry</span>
        </motion.p>
      </div>
    </section>
  );
}
