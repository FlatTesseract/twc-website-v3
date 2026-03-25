import { Navbar, Footer } from "@/components";
import Link from "next/link";

const pressItems = [
  {
    publication: "The Daily Star",
    title: "Let's Vibe with Marvel of Tomorrow Season 3 held in Dhaka",
    description:
      "The Wider Collective (TWC) are the developers behind creating Bangladesh's first AI Influencer for The Marvel - Be You.",
    date: "November 5, 2023",
    url: "https://www.thedailystar.net/business/organisation-news/press-releases/news/lets-vibe-marvel-tomorrow-season-3-held-dhaka-3462336",
  },
  {
    publication: "The Front Page BD",
    title: "Meet Marvella, Bangladesh's first-ever AI-generated influencer",
    description:
      "The Wider Collective, in partnership with The Marvel – Be You, accomplished a monumental feat by introducing Bangladesh's first AI influencer.",
    date: "November 4, 2023",
    url: null, // Domain expired
    note: "Publication no longer available",
  },
];

export default function PressPage() {
  return (
    <>
      <Navbar />
      <main className="min-h-screen bg-black pt-32 pb-20">
        <div className="max-w-4xl mx-auto px-6">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-4">
            Press
          </h1>
          <p className="text-zinc-400 text-lg mb-16">
            Coverage and mentions of The Wider Collective.
          </p>

          <div className="space-y-8">
            {pressItems.map((item, index) => (
              <article
                key={index}
                className="border-b border-zinc-800 pb-8 last:border-0"
              >
                <div className="flex items-center gap-3 mb-3">
                  <span className="text-sm text-zinc-500 uppercase tracking-wider">
                    {item.publication}
                  </span>
                  <span className="text-zinc-700">·</span>
                  <span className="text-sm text-zinc-500">{item.date}</span>
                </div>

                {item.url ? (
                  <Link
                    href={item.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group"
                  >
                    <h2 className="text-2xl font-semibold text-white group-hover:text-zinc-300 transition-colors mb-3">
                      {item.title}
                      <span className="inline-block ml-2 opacity-0 group-hover:opacity-100 transition-opacity">
                        →
                      </span>
                    </h2>
                  </Link>
                ) : (
                  <h2 className="text-2xl font-semibold text-zinc-500 mb-3">
                    {item.title}
                    {item.note && (
                      <span className="text-sm font-normal text-zinc-600 ml-3">
                        ({item.note})
                      </span>
                    )}
                  </h2>
                )}

                <p className="text-zinc-400">{item.description}</p>
              </article>
            ))}
          </div>

          <div className="mt-20 pt-8 border-t border-zinc-800">
            <h2 className="text-xl font-semibold text-white mb-4">
              Media Inquiries
            </h2>
            <p className="text-zinc-400 mb-4">
              For press inquiries, interviews, or media kits, contact us at:
            </p>
            <a
              href="mailto:hello@thewidercollective.com"
              className="text-white hover:text-zinc-300 transition-colors"
            >
              hello@thewidercollective.com
            </a>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
}
