"use client";

import {
  Navbar,
  Hero,
  Work,
  Services,
  Pitch,
  Clients,
  Reel,
  CTA,
  Footer,
} from "@/components";
import { SmoothScroll } from "@/components/SmoothScroll";
import { Section } from "@/components/Section";

export default function Home() {
  return (
    <SmoothScroll>
      <Navbar />
      <main>
        <Section>
          <Hero />
        </Section>
        <Section>
          <Work />
        </Section>
        <Section>
          <Services />
        </Section>
        <Section>
          <Pitch />
        </Section>
        <Section>
          <Clients />
        </Section>
        <Section>
          <Reel />
        </Section>
        <Section>
          <CTA />
        </Section>
      </main>
      <Footer />
    </SmoothScroll>
  );
}
