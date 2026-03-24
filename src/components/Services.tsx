"use client";

import { motion } from "framer-motion";

const services = [
  {
    number: "01",
    title: "FILM & CONTENT",
    description: `Brand films. Ads. Social. The whole production.
We've shot airlines, water parks, hospitals,
and a blockchain thing about pigs at the end of the world.`,
  },
  {
    number: "02",
    title: "BRAND & IDENTITY",
    description: `Logos? Easy. Systems that last? Harder.
We build identities that still work in 10 years.
Not decks that sit in Google Drive forever.
Actual guidelines. Ones your team opens.`,
  },
  {
    number: "03",
    title: "SYSTEMS & SOFTWARE",
    description: `The boring stuff that makes everything else work.
Custom tools. Automation. Mobile and Web Applications.
Clean ops = sharper marketing. Simple.`,
  },
];

export function Services() {
  return (
    <section id="services" className="py-32 px-6 bg-muted/30">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-20 text-center"
        >
          <h2 className="font-display text-4xl md:text-6xl font-bold">
            Focused services. Measurable outcomes
          </h2>
        </motion.div>

        {/* Services list */}
        <div className="space-y-24">
          {services.map((service, i) => (
            <motion.div
              key={service.number}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ delay: i * 0.1 }}
              className="relative"
            >
              {/* Background number */}
              <span className="absolute -top-8 -left-4 font-display text-[200px] font-bold text-accent/5 select-none pointer-events-none">
                {service.number}
              </span>

              <div className="relative z-10 grid md:grid-cols-2 gap-8 items-start">
                <div>
                  <span className="text-accent font-mono text-sm mb-2 block">
                    {service.number}
                  </span>
                  <h3 className="font-display text-3xl md:text-4xl font-bold mb-4">
                    {service.title}
                  </h3>
                </div>
                <div>
                  <p className="text-lg text-muted-foreground whitespace-pre-line leading-relaxed">
                    {service.description}
                  </p>
                </div>
              </div>

              {/* Divider */}
              {i < services.length - 1 && (
                <div className="mt-16 h-px bg-border" />
              )}
            </motion.div>
          ))}
        </div>


      </div>
    </section>
  );
}
