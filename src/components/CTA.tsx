"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import FaultyTerminal from "./FaultyTerminal";

export function CTA() {
  return (
    <section id="contact" className="py-32 px-6 relative overflow-hidden">
      {/* ReactBits FaultyTerminal background */}
      <div className="absolute inset-0">
        <FaultyTerminal
          scale={1.5}
          gridMul={[2, 1]}
          digitSize={1.2}
          timeScale={0.5}
          pause={false}
          scanlineIntensity={0.5}
          glitchAmount={1}
          flickerAmount={1}
          noiseAmp={1}
          chromaticAberration={0}
          dither={0}
          curvature={0.1}
          tint="#8f6090"
          mouseReact
          mouseStrength={1}
          pageLoadAnimation
          brightness={0.6}
        />
      </div>
      <div className="absolute inset-0 bg-black/35 pointer-events-none" />

      <div className="max-w-4xl mx-auto text-center relative z-10">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="font-display text-5xl md:text-7xl font-bold mb-8"
        >
          Let's talk.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-xl text-muted-foreground mb-12 max-w-xl mx-auto"
        >
          30 minutes. No pitch deck. Just strategy.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
        >
          <Link
            href="https://calendly.com/thewidercollective/discovery"
            target="_blank"
            className="inline-flex items-center gap-2 px-12 py-5 text-xl font-bold bg-accent text-background rounded-full hover:scale-105 transition-transform glow"
          >
            Book a free strategy call
          </Link>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3 }}
          className="mt-8 text-muted-foreground"
        >
          or just email:{" "}
          <Link
            href="mailto:hello@thewidercollective.com"
            className="text-foreground hover:text-accent transition-colors underline"
          >
            hello@thewidercollective.com
          </Link>
        </motion.p>
      </div>
    </section>
  );
}
