"use client";

import { motion } from "framer-motion";

export function Reel() {
  return (
    <section className="py-32 px-6 bg-muted/30">
      <div className="max-w-5xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12"
        >
          <h2 className="font-display text-4xl md:text-5xl font-bold mb-4">
            64 seconds. Everything we do.
          </h2>
          <p className="text-muted-foreground text-lg">
            Brands. Films. Systems. Mess.
          </p>
        </motion.div>

        {/* Video placeholder */}
        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="relative aspect-video rounded-2xl overflow-hidden bg-muted group cursor-pointer"
        >
          {/* Placeholder gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-accent/20 via-muted to-accent-dark/20" />

          {/* Play button */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              className="w-20 h-20 rounded-full bg-accent flex items-center justify-center glow group-hover:scale-110 transition-transform"
            >
              <svg
                className="w-8 h-8 text-background ml-1"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M8 5v14l11-7z" />
              </svg>
            </motion.button>
          </div>

          {/* Border glow on hover */}
          <div className="absolute inset-0 border-2 border-transparent group-hover:border-accent/50 rounded-2xl transition-all duration-500" />
        </motion.div>
      </div>
    </section>
  );
}
