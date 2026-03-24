"use client";

import { motion } from "framer-motion";

// Client logos - placeholder names, will add actual images
const clients = [
  "AirAsia",
  "Maldivian",
  "Global Mission",
  "GenderGP",
  "Death Corp",
  "Camel",
  "Yoyoso",
  "Sayeman",
  "Mana Bay",
  "Renai",
];

function LogoMarquee({
  items,
  direction = "left",
}: {
  items: string[];
  direction?: "left" | "right";
}) {
  const duplicatedItems = [...items, ...items];

  return (
    <div className="overflow-hidden">
      <motion.div
        className="flex gap-12 py-4"
        animate={{
          x: direction === "left" ? ["0%", "-50%"] : ["-50%", "0%"],
        }}
        transition={{
          x: {
            repeat: Infinity,
            repeatType: "loop",
            duration: 30,
            ease: "linear",
          },
        }}
      >
        {duplicatedItems.map((client, i) => (
          <div
            key={`${client}-${i}`}
            className="flex-shrink-0 px-8 py-4 border border-border/50 rounded-lg hover:border-accent/50 transition-colors group"
          >
            <span className="text-muted-foreground group-hover:text-foreground transition-colors font-medium whitespace-nowrap">
              {client}
            </span>
          </div>
        ))}
      </motion.div>
    </div>
  );
}

export function Clients() {
  return (
    <section className="py-32 bg-muted/30">
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
        <LogoMarquee items={clients} direction="left" />
        <LogoMarquee items={clients.slice().reverse()} direction="right" />
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
