"use client";

import { motion } from "framer-motion";

const opinions = [
  {
    main: "Marketing dies by committee.",
    sub: "Small teams. Fast calls.",
  },
  {
    main: '"On brand" usually = safe.',
    sub: "We push until it's memorable.",
  },
  {
    main: "Nobody reads your brand guidelines.",
    sub: "They notice if you're interesting.",
  },
  {
    main: "Fast and good aren't opposites.",
    sub: "Big teams move slow.",
  },
  {
    main: "If the work doesn't scare you a little,",
    sub: "it won't move anyone else.",
  },
];

export function Opinions() {
  return (
    <section className="py-32 px-6">
      <div className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-4xl md:text-5xl font-bold mb-16"
        >
          Some opinions.
        </motion.h2>

        <div className="space-y-12">
          {opinions.map((opinion, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: i * 0.1 }}
              className="flex gap-4"
            >
              <span className="text-accent text-2xl font-bold">→</span>
              <div>
                <p className="text-xl md:text-2xl font-medium mb-1">
                  {opinion.main}
                </p>
                <p className="text-muted-foreground">{opinion.sub}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
