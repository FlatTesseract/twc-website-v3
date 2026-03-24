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

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <Work />
        <Services />
        <Pitch />
        <Clients />
        <Reel />
        <CTA />
      </main>
      <Footer />
    </>
  );
}
