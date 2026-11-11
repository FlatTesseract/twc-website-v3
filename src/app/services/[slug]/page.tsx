import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Navbar, Footer } from "@/components";
import { services } from "@/data/services";
import { siteUrl } from "@/lib/site";
export function generateStaticParams() { return services.map(({ slug }) => ({ slug })); }
export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) return {};
  return { title: service.searchTitle, description: service.description, alternates: { canonical: siteUrl(`/services/${slug}/`) }, openGraph: { title: service.searchTitle, description: service.description, url: siteUrl(`/services/${slug}/`) } };
}
export default async function ServicePage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = services.find(s => s.slug === slug);
  if (!service) notFound();
  return <><Navbar /><main className="max-w-4xl mx-auto px-6 pt-32 pb-20">
    <Link href="/#services" className="text-accent">All services</Link>
    <h1 className="font-display text-5xl font-bold mt-8 mb-6">{service.title}</h1>
    <p className="text-2xl mb-8">{service.intro}</p><p className="text-lg text-muted-foreground mb-12">{service.detail}</p>
    <h2 className="text-3xl font-bold mb-6">What we can help with</h2>
    <ul className="list-disc pl-6 space-y-3 mb-12">{service.deliverables.map(d => <li key={d}>{d}</li>)}</ul>
    <h2 className="text-3xl font-bold mb-6">Selected work</h2>
    <Link className="text-accent underline" href={`/case-study/${service.work}/`}>{service.workLabel} →</Link>
    <h2 className="text-3xl font-bold mt-12 mb-6">Tell us what needs to change.</h2>
    <p className="mb-6">Share your brief, audience and timing. We’ll discuss what the project needs.</p>
    <a className="text-accent underline" href="mailto:hello@thewidercollective.com">hello@thewidercollective.com</a>
  </main><Footer /></>;
}
