export type HeroMedia =
  | { kind: "video"; src: string; poster: string }
  | { kind: "youtube"; id: string; poster?: string }
  | { kind: "image"; src: string };

export type GalleryItem =
  | {
      kind: "video";
      src: string;
      poster: string;
      title?: string;
      aspect: "9/16" | "16/9" | "1/1" | "4/5";
    }
  | {
      kind: "image";
      src: string;
      title?: string;
      aspect: "9/16" | "16/9" | "1/1" | "4/5";
    };

export type GallerySection = {
  heading: string;
  layout: "scroll" | "grid-2" | "grid-3";
  items: GalleryItem[];
};

export type CaseStudy = {
  slug: string;
  client: string;
  industry: string;
  title: string;
  summary: string;
  heroMedia: HeroMedia;
  kpis: Array<{ label: string; value: string }>;
  snapshot: {
    industry: string;
    region: string;
    services: string[];
    timeline: string;
    team: string;
  };
  challenge: string[];
  strategy: Array<{ heading: string; text: string }>;
  execution: Array<{ heading: string; text: string }>;
  gallery?: GallerySection[];
  results: {
    metrics: Array<{ label: string; value: string }>;
    narrative?: string;
  };
  testimonial?: { quote: string; author: string; role?: string };
  nextSteps?: string[];
};

const CDN = "https://video.thewidercollective.com";

export const caseStudies: Record<string, CaseStudy> = {
  airasia: {
    slug: "airasia",
    client: "AirAsia",
    industry: "Aviation",
    title: "1.1 million reached at $0.06 per lead.",
    summary:
      "A four-episode travel series turned into a full-funnel creative system — cinematic storytelling, short-form reels, and static performance assets that drove 6,000 booking requests in one month.",
    heroMedia: { kind: "youtube", id: "UH5sOdyTEpo" },
    kpis: [
      { label: "Reach", value: "1.1M" },
      { label: "Cost per lead", value: "$0.06" },
      { label: "Booking requests", value: "6K / 30 days" },
      { label: "Creatives produced", value: "100+" },
    ],
    snapshot: {
      industry: "Aviation",
      region: "South & Southeast Asia",
      services: [
        "Strategy",
        "Film production",
        "Short-form ads",
        "Static design",
        "Ad buying",
        "Campaign management",
      ],
      timeline: "6 weeks",
      team: "7 people",
    },
    challenge: [
      "AirAsia wanted to reconnect post-pandemic travelers to the joy of discovery — but at scale.",
      "They needed a content system, not just a campaign: one that could live across reels, ads, and static posts, each driving cost-efficient bookings. Static brand posts were declining in engagement, regional CPMs were rising, and creative fatigue was setting in across overused visuals.",
    ],
    strategy: [
      {
        heading: "Full-funnel storytelling",
        text: "Four cinematic episodes for the top funnel, six short-form reels for the middle, and static ad variants optimized for the bottom — one system, three pressure points.",
      },
      {
        heading: "Modular remix architecture",
        text: "Every hero cut, B-roll, and still was tagged for remix. Five hooks × three durations × four formats meant the team could version fast without re-shooting.",
      },
      {
        heading: "Creator-style storytelling",
        text: "Real travelers, real destinations, grounded camera work. The airline brand stayed in the background so the audience felt it as content, not an ad.",
      },
    ],
    execution: [
      {
        heading: "Travel series (4 episodes)",
        text: "Cinematic episodes built around destination and human story — organic launch, boosted via Meta, then cut down for performance campaigns.",
      },
      {
        heading: "Short-form reels (6 pieces)",
        text: "Designed for Meta and Instagram placement. Each reel tested a specific creative angle; CPL hit $0.06 on retargeted audiences.",
      },
      {
        heading: "Static content system (60+)",
        text: "Destination carousels, deal-based ads, quote templates, and posterized stills — all in a monochrome + red system built to retarget.",
      },
      {
        heading: "Notion ops layer",
        text: "A content pipeline the internal marketing team could run solo — tag by funnel, hook, and audience, track versioning, and iterate without us.",
      },
    ],
    gallery: [
      {
        heading: "The travel series",
        layout: "grid-2",
        items: [
          {
            kind: "image",
            src: `https://i.ytimg.com/vi/UH5sOdyTEpo/maxresdefault.jpg`,
            title: "Ep. 01 · The First Flight Back",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `https://i.ytimg.com/vi/6JsX2TzjMis/maxresdefault.jpg`,
            title: "Ep. 02 · Island Routes",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `https://i.ytimg.com/vi/jBljqpmJ1G0/maxresdefault.jpg`,
            title: "Ep. 03 · Sky Miles to Memories",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `https://i.ytimg.com/vi/x9o9eLg92Ms/maxresdefault.jpg`,
            title: "Ep. 04 · Above & Beyond",
            aspect: "16/9",
          },
        ],
      },
    ],
    results: {
      metrics: [
        { label: "Reach", value: "1.1M" },
        { label: "CPL", value: "$0.06" },
        { label: "Bookings", value: "6,000" },
        { label: "Creatives", value: "100+" },
      ],
      narrative:
        "Secondary lifts: +3× engagement vs. baseline, +28% CTR on short-form ads, +15% lift in destination search queries.",
    },
    testimonial: {
      quote:
        "From strategy to execution, The Wider Collective's speed and clarity were unmatched. They turned our campaign into a content machine.",
      author: "Regional Marketing Lead",
      role: "AirAsia",
    },
    nextSteps: [
      "Country-specific localized variants of each reel.",
      "UGC remixes to deepen personalization.",
      "Pipeline extension to TikTok and YouTube Shorts.",
    ],
  },

  mev: {
    slug: "mev",
    client: "MEV — Mango Electric Vehicles",
    industry: "Automotive / Brand",
    title: "Building Bangladesh's first homegrown EV brand — built to export.",
    summary:
      "A full brand system for Bangladesh's first homegrown electric-vehicle marque — name, identity, model architecture, and a launch platform engineered to scale from Dhaka roads to export markets.",
    heroMedia: {
      kind: "video",
      src: `/mev/hero-surge-z.mp4`,
      poster: `/mev/hero-poster.jpg`,
    },
    kpis: [
      { label: "Vehicle lineup", value: "6 models" },
      { label: "Sub-brands", value: "4 families" },
      { label: "Flagship range", value: "402 km" },
      { label: "Built for", value: "Export" },
    ],
    snapshot: {
      industry: "Automotive / Brand",
      region: "Bangladesh → Export",
      services: [
        "Brand strategy",
        "Naming & architecture",
        "Visual identity",
        "Product naming",
        "Web & launch platform",
        "Campaign direction",
      ],
      timeline: "12 weeks",
      team: "6 people",
    },
    challenge: [
      "Bangladesh had never had a homegrown passenger-vehicle brand — and \"made in Bangladesh\" carried a perception problem: capable of garments and assembly, but not premium, export-grade machines.",
      "Mango Teleservices wanted to enter mobility from zero. The job wasn't a campaign — it was an entire marque: a name, a face, a model architecture, and a launch presence credible enough to stand beside global EV brands while staying unmistakably Bangladeshi.",
    ],
    strategy: [
      {
        heading: "A name with roots",
        text: "Mango — the national fruit — became the origin story. MEV (Mango Electric Vehicles) wears its Bangladeshi heritage with pride while staying short, globally pronounceable, and export-ready on any badge.",
      },
      {
        heading: "A model architecture that scales",
        text: "One naming system spanning the whole range: SURGE for passenger (Z electric, H hybrid), ATLAS and DELTA for heavy-duty, CURRENT for commercial. From a premium SUV to a 20-tonne dump truck, the lineup reads as one family.",
      },
      {
        heading: "Premium, not provincial",
        text: "A confident design language — Volt black and Mango orange, Glacial Indifference display type, and a monospace spec voice — built to look export-grade against any global marque, not like a local first attempt.",
      },
    ],
    execution: [
      {
        heading: "Identity & logo system",
        text: "An interlocking 'M' monogram and wordmark, a disciplined color hierarchy, and a typographic system that holds up from a phone screen to a showroom wall.",
      },
      {
        heading: "Model naming & sub-brand architecture",
        text: "SURGE Z, SURGE H, ATLAS, DELTA, CURRENT 4.5T and CURRENT 8T BEV — a structured nomenclature that lets MEV add vehicles for years without the range fragmenting.",
      },
      {
        heading: "Launch & reservation platform",
        text: "A cinematic single-page launch site — hero film, animated spec storytelling, full technical sheet, and a reservation funnel that turns interest into named leads before a single unit ships.",
      },
      {
        heading: "Product & campaign direction",
        text: "Art direction for vehicle photography, the interior showcase, and the spec-led narrative — a visual toolkit that carries from the flagship SURGE Z down to the commercial fleet.",
      },
    ],
    gallery: [
      {
        heading: "The flagship — SURGE Z",
        layout: "grid-2",
        items: [
          {
            kind: "image",
            src: `/mev/surge-z-featured.jpg`,
            title: "SURGE Z · Premium Electric SUV",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/mev/surge-z-profile.jpg`,
            title: "Pure side profile",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/mev/surge-z-aerial.jpg`,
            title: "Cabin from above",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/mev/surge-z-hero.jpg`,
            title: "402 km CLTC range",
            aspect: "16/9",
          },
        ],
      },
      {
        heading: "Inside the cabin",
        layout: "grid-3",
        items: [
          {
            kind: "image",
            src: `/mev/int-comfort.jpg`,
            title: "Comfort",
            aspect: "4/5",
          },
          {
            kind: "image",
            src: `/mev/int-sunroof.jpg`,
            title: "Panoramic sunroof",
            aspect: "4/5",
          },
          {
            kind: "image",
            src: `/mev/int-tech.jpg`,
            title: "Connected controls",
            aspect: "4/5",
          },
        ],
      },
      {
        heading: "The full range",
        layout: "grid-3",
        items: [
          { kind: "image", src: `/mev/surge-h.jpg`, title: "SURGE H · Hybrid", aspect: "4/5" },
          { kind: "image", src: `/mev/atlas.jpg`, title: "ATLAS · Heavy-duty cargo", aspect: "4/5" },
          { kind: "image", src: `/mev/delta.jpg`, title: "DELTA · 20-tonne dump truck", aspect: "4/5" },
          { kind: "image", src: `/mev/current-45t.jpg`, title: "CURRENT 4.5T · Light-duty", aspect: "4/5" },
          { kind: "image", src: `/mev/current-8t.jpg`, title: "CURRENT 8T · All-electric truck", aspect: "4/5" },
          { kind: "image", src: `/mev/surge-z-hero.jpg`, title: "SURGE Z · Flagship", aspect: "4/5" },
        ],
      },
      {
        heading: "The brand in use",
        layout: "grid-2",
        items: [
          {
            kind: "image",
            src: `/mev/applications/billboard.jpg`,
            title: "Out-of-home · SURGE Z",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/mev/applications/vehicle-wrap.jpg`,
            title: "Fleet & vehicle livery",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/mev/applications/digital.jpg`,
            title: "Digital & web",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/mev/applications/apparel.jpg`,
            title: "Team apparel",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/mev/applications/stationery.jpg`,
            title: "Stationery system",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/mev/applications/merch.jpg`,
            title: "Merchandise",
            aspect: "16/9",
          },
        ],
      },
    ],
    results: {
      metrics: [
        { label: "Brand", value: "Launched" },
        { label: "Lineup", value: "6 models" },
        { label: "Sub-brands", value: "4 families" },
        { label: "Flagship range", value: "402 km" },
        { label: "Positioning", value: "Export-ready" },
      ],
      narrative:
        "MEV launched as Bangladesh's first homegrown EV marque — a complete brand and product family, from a premium electric SUV to a full commercial fleet, with an identity engineered to travel beyond home borders.",
    },
    testimonial: {
      quote:
        "TWC didn't just design a logo — they built us a brand the country could be proud of, and one that holds its own against global names. They gave Bangladeshi engineering a face worth exporting.",
      author: "Brand Lead",
      role: "MEV — Mango Electric Vehicles",
    },
    nextSteps: [
      "Localized brand and badge variants for priority export markets.",
      "Dealer and showroom retail-experience design system.",
      "Owner-app and connected-vehicle brand extension.",
    ],
  },

  manabay: {
    slug: "manabay",
    client: "Mana Bay",
    industry: "Entertainment / Hospitality",
    title: "3.5M impressions and 2× footfall in 90 days.",
    summary:
      "A 360° entertainment campaign for Bangladesh's largest water park — cinematic storytelling, influencer waves, and paid media that turned online reach into real-world crowds.",
    heroMedia: {
      kind: "video",
      src: `${CDN}/Mana%20Bay/manabay_vid.mp4`,
      poster: `${CDN}/Mana%20Bay/thumbnail.png`,
    },
    kpis: [
      { label: "Impressions", value: "3.5M+" },
      { label: "Assets created", value: "230+" },
      { label: "Influencers", value: "14" },
      { label: "Footfall growth", value: "2× / 90 days" },
    ],
    snapshot: {
      industry: "Entertainment / Hospitality",
      region: "Bangladesh",
      services: [
        "Creative strategy",
        "Influencer marketing",
        "Paid media",
        "Video production",
        "Press distribution",
      ],
      timeline: "3 months",
      team: "6 people",
    },
    challenge: [
      "Mana Bay was thriving offline but under-performing online.",
      "Fragmented visuals, inconsistent messaging, and unstructured influencer efforts meant the digital energy didn't match the real-world experience. The job was to turn the park's excitement into a measurable content system.",
    ],
    strategy: [
      {
        heading: "Identity and cadence",
        text: "A vibrant visual language built on sunlight, motion, and community — paired with a Notion-based calendar for daily execution.",
      },
      {
        heading: "Narrative pillars",
        text: "Three pillars structured the content: cinematic storytelling (90s hero film), creator waves (14 UGC influencers), and social momentum (ads and static posts).",
      },
      {
        heading: "Measure and optimize",
        text: "Iterative ad testing across Meta and TikTok, with conversions tracked via promo codes and real footfall data.",
      },
    ],
    execution: [
      {
        heading: "Hero film",
        text: "A 90-second cinematic ad — energetic, family-friendly, color-graded in turquoise and sunset orange — repurposed into 6s and 15s variants.",
      },
      {
        heading: "Influencer program",
        text: "14 creators across travel and lifestyle generated 3.5M impressions. We handled briefing, editing, and whitelisting end-to-end.",
      },
      {
        heading: "Ad campaign",
        text: "230+ assets across formats. CPA improved ~28% versus previous self-run campaigns.",
      },
      {
        heading: "Press and community",
        text: "Lifestyle press features and on-site UGC loops bridged digital and physical engagement.",
      },
    ],
    gallery: [
      {
        heading: "Short-form reels",
        layout: "scroll",
        items: [
          {
            kind: "video",
            src: `${CDN}/Mana%20Bay/magical_place.mov`,
            poster: `${CDN}/Mana%20Bay/magicalplace_thumbnail.png`,
            title: "Magical Place",
            aspect: "9/16",
          },
          {
            kind: "video",
            src: `${CDN}/Mana%20Bay/waterpark.mov`,
            poster: `${CDN}/Mana%20Bay/waterpark_thumbnail.png`,
            title: "Waterpark",
            aspect: "9/16",
          },
          {
            kind: "video",
            src: `${CDN}/Mana%20Bay/cabanalife.mov`,
            poster: `${CDN}/Mana%20Bay/cabanalife_thumbnail.png`,
            title: "Cabana Life",
            aspect: "9/16",
          },
        ],
      },
      {
        heading: "Social statics",
        layout: "grid-3",
        items: [
          { kind: "image", src: `${CDN}/Mana%20Bay/mana1.png`, aspect: "1/1" },
          { kind: "image", src: `${CDN}/Mana%20Bay/mana2.png`, aspect: "1/1" },
          { kind: "image", src: `${CDN}/Mana%20Bay/mana3.png`, aspect: "1/1" },
          { kind: "image", src: `${CDN}/Mana%20Bay/mana4.png`, aspect: "1/1" },
          { kind: "image", src: `${CDN}/Mana%20Bay/mana5.png`, aspect: "1/1" },
          { kind: "image", src: `${CDN}/Mana%20Bay/mana6.png`, aspect: "1/1" },
        ],
      },
    ],
    results: {
      metrics: [
        { label: "Social followers", value: "+900%" },
        { label: "Footfall", value: "2× in 90 days" },
        { label: "CPA", value: "−28%" },
        { label: "Engagement", value: "+172%" },
      ],
      narrative:
        "In three months Mana Bay became a national movement — 3.5M impressions, hundreds of UGC tags, and real-world growth driven by a systematic creative engine.",
    },
    testimonial: {
      quote:
        "TWC is the best company we've ever worked with — incredible communication, seamless execution, and creative vision that understood our audience better than we did.",
      author: "Marketing Manager",
      role: "Mana Bay Water Park",
    },
    nextSteps: [
      "Season 2 creator program with international influencers.",
      "Membership and loyalty initiatives driven by UGC.",
      "AI-assisted campaign forecasting for next summer.",
    ],
  },

  smarted: {
    slug: "smarted",
    client: "Smart Ed",
    industry: "Education / Brand",
    title: "A premium brand for Bangladesh's next young leaders.",
    summary:
      "A complete brand system for Smart Ed — naming architecture, a playful mascot family, visual identity, and messaging — positioning it as the trusted parent brand bringing globally proven learning programmes, starting with I Can Read, to Bangladesh.",
    heroMedia: { kind: "image", src: `/smarted/applications/keyvisual.jpg` },
    kpis: [
      { label: "Positioning", value: "Premium platform" },
      { label: "Flagship programme", value: "I Can Read" },
      { label: "Mascot family", value: "4 characters" },
      { label: "Identity", value: "Full system" },
    ],
    snapshot: {
      industry: "Education / Brand",
      region: "Bangladesh",
      services: [
        "Brand strategy",
        "Naming & architecture",
        "Visual identity",
        "Mascot design",
        "Messaging system",
        "Brand guidelines",
      ],
      timeline: "5 weeks",
      team: "5 people",
    },
    challenge: [
      "Smart Ed was outgrowing its single-product identity. With I Can Read as its flagship and more global education partnerships ahead, it needed to become a trusted parent brand — not just one programme's name.",
      "In a market crowded with coaching centres and tuition providers, the brand had to feel premium and globally credible to aspirational parents, while staying warm and child-centred for young learners. The job was a full identity that could hold both.",
    ],
    strategy: [
      {
        heading: "A parent brand built to scale",
        text: "We defined a brand architecture where Smart Ed sits above its programmes — so I Can Read and future global partners each get room to breathe under one trusted name.",
      },
      {
        heading: "Premium, but never cold",
        text: "Positioning anchored on confidence, global standards, and growth beyond grades — aspirational for parents without the pressure, warm for children without being childish.",
      },
      {
        heading: "A personality kids remember",
        text: "Four mascots — Boomba, Kiki, Zee and JeJe — embody Compassion, Creativity, Confidence and Connection, turning brand values into characters children actually bond with.",
      },
    ],
    execution: [
      {
        heading: "Identity & logo system",
        text: "A full logo suite — primary, horizontal, vertical, badge and monochrome lockups — on a vivid palette of ultramarine, magenta, golden yellow and mint, set in Cal Sans and Poppins.",
      },
      {
        heading: "The mascot family",
        text: "Boomba, Kiki, Zee and JeJe — a cast of education spirit guides with their own personalities, usable as characters, patterns, and playful brand devices across every touchpoint.",
      },
      {
        heading: "Messaging system",
        text: "A complete verbal identity: core message, parent / student / partner messaging tracks, key pillars, and a tone-of-voice guide — all under one line, 'Learn. Lead. Shine.'",
      },
      {
        heading: "Brand guidelines & launch collateral",
        text: "A practical brand manual plus launch-ready social templates, parent materials, and stationery, so the team could roll the new brand out consistently from day one.",
      },
    ],
    gallery: [
      {
        heading: "The brand in use",
        layout: "grid-2",
        items: [
          {
            kind: "image",
            src: `/smarted/applications/social-grid.jpg`,
            title: "Social system",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/smarted/applications/posters.jpg`,
            title: "Campaign posters",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/smarted/applications/editorial.jpg`,
            title: "Editorial layouts",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/smarted/applications/stationery.jpg`,
            title: "Stationery & collateral",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/smarted/applications/mobile.jpg`,
            title: "Mobile & social",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `/smarted/applications/web.jpg`,
            title: "Web direction",
            aspect: "16/9",
          },
        ],
      },
      {
        heading: "Meet the mascots — Boomba, Kiki, Zee & JeJe",
        layout: "grid-3",
        items: [
          { kind: "image", src: `/smarted/mascots/mascot-01.png`, aspect: "1/1" },
          { kind: "image", src: `/smarted/mascots/mascot-03.png`, aspect: "1/1" },
          { kind: "image", src: `/smarted/mascots/mascot-05.png`, aspect: "1/1" },
          { kind: "image", src: `/smarted/mascots/mascot-07.png`, aspect: "1/1" },
          { kind: "image", src: `/smarted/mascots/mascot-08.png`, aspect: "1/1" },
          { kind: "image", src: `/smarted/mascots/mascot-10.png`, aspect: "1/1" },
        ],
      },
    ],
    results: {
      metrics: [
        { label: "Brand", value: "Unified" },
        { label: "Architecture", value: "Parent + product" },
        { label: "Mascots", value: "4 characters" },
        { label: "Identity", value: "Full system" },
        { label: "Voice", value: "Learn. Lead. Shine." },
      ],
      narrative:
        "Smart Ed now has a premium, ownable identity — a parent brand ready to carry I Can Read and the global programmes that follow, trusted by parents and adored by kids.",
    },
    testimonial: {
      quote:
        "The Wider Collective gave us more than a logo — they gave us a brand parents trust and children adore. Smart Ed finally looks like the premium platform we always knew it could be.",
      author: "Founder",
      role: "Smart Ed Bangladesh",
    },
    nextSteps: [
      "Roll the identity across the Smart Ed website and parent-facing platform.",
      "Extend the mascot system into learning content and in-centre experiences.",
      "Co-branded identity kits for each new global education partner.",
    ],
  },

  globalmission: {
    slug: "globalmission",
    client: "Global Mission Impact Institute",
    industry: "Certification / Social impact",
    title: "A brand system built to change the world for good.",
    summary:
      "A complete brand framework and hero film — AI visuals, motion graphics, and in-house footage — to launch a purpose-driven global certification institute.",
    heroMedia: {
      kind: "video",
      src: `${CDN}/GMI/GMI_video.mp4`,
      poster: `/covers/gmi.jpg`,
    },
    kpis: [
      { label: "Brand guideline v1", value: "100 pages" },
      { label: "Hero video", value: "90s film" },
      { label: "Impact attributes", value: "6 core values" },
      { label: "Certification mark", value: "3 partners" },
    ],
    snapshot: {
      industry: "Certification / Social impact",
      region: "Global",
      services: [
        "Brand strategy",
        "Visual identity",
        "Motion design",
        "Video production",
      ],
      timeline: "8 weeks",
      team: "5 people",
    },
    challenge: [
      "GMI needed a credible yet aspirational identity — a visual system that fused profitability with purpose and could certify enterprises worldwide.",
      "Their brand lacked cohesion, symbolism, and a flagship storypiece to express \"Changing the World for Good.\"",
    ],
    strategy: [
      {
        heading: "Define the core",
        text: "Mapped six impact attributes — Innovation, Mission, Purpose, Accelerate, Community, Trust — to anchor every design decision.",
      },
      {
        heading: "Design language system",
        text: "Logo architecture, color hierarchy around Impact Red and supporting greys, typographic pairing of Inter and TT Hoves.",
      },
      {
        heading: "Brand film",
        text: "A 90-second hero video scripted and produced with AI imagery, motion graphics, and real footage to visualize purpose → action → impact.",
      },
    ],
    execution: [
      {
        heading: "Brand guideline",
        text: "A comprehensive manual covering logo systems, color palette, art direction, and certification mark usage.",
      },
      {
        heading: "Hero brand video",
        text: "A cinematic film mixing AI visuals, motion graphics, and real footage to tell GMI's story of impact.",
      },
      {
        heading: "Design system",
        text: "Figma components and templates that keep digital and print consistent across partners.",
      },
    ],
    gallery: [
      {
        heading: "Brand system",
        layout: "grid-3",
        items: [
          {
            kind: "image",
            src: `${CDN}/GMI/logothumbnail.png`,
            title: "Logo system",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `${CDN}/GMI/typography_thumbnail.png`,
            title: "Color & typography",
            aspect: "16/9",
          },
          {
            kind: "image",
            src: `${CDN}/GMI/branduse_thumbnail.png`,
            title: "Brand in use",
            aspect: "16/9",
          },
        ],
      },
    ],
    results: {
      metrics: [
        { label: "Brand system", value: "Unified" },
        { label: "Hero film", value: "Launch asset" },
        { label: "Adoption", value: "3 partners" },
        { label: "Cohesion", value: "Global" },
      ],
      narrative:
        "The new identity positioned GMI as a credible, inspiring force for impact-driven business.",
    },
    testimonial: {
      quote:
        "TWC captured our mission with precision and emotion — the brand film and guideline are foundations for our next decade.",
      author: "Director",
      role: "Global Mission Impact Institute",
    },
    nextSteps: [
      "Extend the brand system to the digital certification platform UI.",
      "Produce a mini-documentary series on certified companies.",
      "Develop an interactive Impact Dashboard for stakeholders.",
    ],
  },

  yoyoso: {
    slug: "yoyoso",
    client: "Yoyoso",
    industry: "Retail / Lifestyle",
    title: "Turning retail aisles into shareable moments.",
    summary:
      "A lifestyle retail brand brought to life through influencer storytelling, aesthetic UGC, and in-store design — connecting online trends to real-world traffic.",
    heroMedia: {
      kind: "video",
      src: `${CDN}/Yoyoso/yoyoso_cgi.mp4`,
      poster: `/covers/yoyoso.jpg`,
    },
    kpis: [
      { label: "Influencer reach", value: "2.5M+" },
      { label: "Creative assets", value: "80+" },
      { label: "Campaign length", value: "8 weeks" },
      { label: "Footfall growth", value: "+40%" },
    ],
    snapshot: {
      industry: "Retail / Lifestyle",
      region: "Bangladesh",
      services: [
        "Influencer marketing",
        "UGC production",
        "Social ads",
        "In-store visual merchandising",
      ],
      timeline: "8 weeks",
      team: "7 people",
    },
    challenge: [
      "Yoyoso wanted to connect its vibrant in-store energy with a cohesive digital identity.",
      "The brand had loyal shoppers but scattered aesthetics — influencer work felt disjointed, and store visuals weren't reinforcing the online narrative. We set out to unify its look, language, and performance.",
    ],
    strategy: [
      {
        heading: "Hero collaboration",
        text: "A top lifestyle influencer (2.5M reach) anchored the campaign with a \"Shop With Me\" hero film that embodied Yoyoso's soft, joyful aesthetic.",
      },
      {
        heading: "UGC series",
        text: "Six creators across lifestyle, beauty, and home goods — each producing a shopping haul, review, and aesthetic placement to sustain daily momentum.",
      },
      {
        heading: "Visual merchandising",
        text: "In-store displays and signage matching the pastel palette and tone of the digital campaign — bridging online inspiration with physical retail.",
      },
    ],
    execution: [
      {
        heading: "Influencer hero film",
        text: "A bright, lifestyle-driven \"Shop With Me\" video combining handheld storytelling with cinematic in-store shots.",
      },
      {
        heading: "UGC creator network",
        text: "Six creators × three formats = 18 anchor videos (plus edits). Combined reach ≈2.5M, average engagement 5.1%.",
      },
      {
        heading: "Aesthetic reels and static ads",
        text: "80+ deliverables with pastel color correction. CTR up 22%, CPA down 24% versus the previous benchmark.",
      },
      {
        heading: "In-store design system",
        text: "Modular POS kits and window visuals that made every aisle an Instagrammable moment.",
      },
    ],
    gallery: [
      {
        heading: "Social reels",
        layout: "scroll",
        items: [
          {
            kind: "video",
            src: `${CDN}/Yoyoso/yoyoso_vid1.mov`,
            poster: `${CDN}/Yoyoso/vid1thumbnail.png`,
            aspect: "9/16",
          },
          {
            kind: "video",
            src: `${CDN}/Yoyoso/yoyoso_vid2.mov`,
            poster: `${CDN}/Yoyoso/vid2thumbnail.png`,
            aspect: "9/16",
          },
          {
            kind: "video",
            src: `${CDN}/Yoyoso/yoyoso_vid3.mp4`,
            poster: `${CDN}/Yoyoso/vid3thumbnail.png`,
            aspect: "9/16",
          },
          {
            kind: "video",
            src: `${CDN}/Yoyoso/yoyoso_vid4.mp4`,
            poster: `${CDN}/Yoyoso/vid4thumbnail.png`,
            aspect: "9/16",
          },
          {
            kind: "video",
            src: `${CDN}/Yoyoso/yoyoso_vid5.mp4`,
            poster: `${CDN}/Yoyoso/vid5thumbnail.png`,
            aspect: "9/16",
          },
          {
            kind: "video",
            src: `${CDN}/Yoyoso/yoyoso_vid6.mp4`,
            poster: `${CDN}/Yoyoso/vid6thumbnail.png`,
            aspect: "9/16",
          },
        ],
      },
    ],
    results: {
      metrics: [
        { label: "Reach", value: "2.5M+" },
        { label: "Engagement", value: "+32%" },
        { label: "CTR", value: "+22%" },
        { label: "CPA", value: "−24%" },
        { label: "Footfall", value: "+40%" },
      ],
      narrative:
        "In eight weeks Yoyoso grew footfall by 40%, lifted online engagement by 32%, and unified its brand from social feeds to storefronts through design consistency and creator authenticity.",
    },
    testimonial: {
      quote:
        "TWC elevated Yoyoso into a lifestyle experience — not just a store. Their blend of influencer culture and design precision changed how we see retail marketing.",
      author: "Marketing Manager",
      role: "Yoyoso Bangladesh",
    },
    nextSteps: [
      "Seasonal creator-led drops aligned with product themes.",
      "UGC-to-ad automation for social commerce.",
      "Rollout of the retail aesthetic guide to new stores.",
    ],
  },

  deathcorp: {
    slug: "deathcorp",
    client: "Death Corp Piggies",
    industry: "Web3 / NFT",
    title: "Half a million dollars in 90 days.",
    summary:
      "A napkin sketch turned into a full web3 IP — story, lore, art direction, 3,333 NFTs, brand identity, a mint site, and a community grown from zero — that raised half a million dollars in 90 days.",
    heroMedia: {
      kind: "video",
      src: `${CDN}/Death%20Corp/NFT%20announcement.MOV`,
      poster: `/deathcorp/poster.jpg`,
    },
    kpis: [
      { label: "NFTs", value: "3,333" },
      { label: "Raised", value: "$500K" },
      { label: "Timeline", value: "90 days" },
      { label: "Secondary volume", value: "$400K+" },
    ],
    snapshot: {
      industry: "Web3 / NFT · Apocalyptic pig IP",
      region: "Global",
      services: [
        "IP & worldbuilding",
        "Art direction",
        "Brand identity",
        "NFT collection",
        "Mint site / web dev",
        "Community & social",
        "Video production",
      ],
      timeline: "90 days",
      team: "8 people",
    },
    challenge: [
      "Death Corp came to us with a napkin sketch and a name — an apocalyptic pig IP with no story, no art, and no audience.",
      "To launch in web3 it needed everything at once: a universe people believed in, art worth collecting, the tech to mint it, and a community big enough to sell through — all built from zero, and fast.",
    ],
    strategy: [
      {
        heading: "Build a universe, not a collection",
        text: "Before a single pig was drawn we wrote the world — the lore, the factions, the apocalypse — so every NFT meant something and the community had a story worth belonging to.",
      },
      {
        heading: "Art direction with a point of view",
        text: "A distinct, unapologetic visual language for the piggies — grimy, funny, and collectible — built to stand out in a sea of generic PFP projects.",
      },
      {
        heading: "Engineer the hype loop",
        text: "Trailers, teasers, and a daily content cadence on X and Discord turned strangers into a community, and the community into mint-day demand.",
      },
    ],
    execution: [
      {
        heading: "Story & lore",
        text: "A full narrative bible — the world, the characters, the conflict — giving the IP depth far beyond a profile picture.",
      },
      {
        heading: "3,333 NFTs",
        text: "A complete generative collection — traits, rarity, and art direction — produced and prepped for a clean mint.",
      },
      {
        heading: "Brand & mint site",
        text: "A full identity system plus a custom mint website with smart-contract integration, built to hold up under launch-day traffic.",
      },
      {
        heading: "Trailers & community",
        text: "Cinematic trailers and a zero-to-thousands community engine across X and Discord, all building toward the announcement.",
      },
    ],
    results: {
      metrics: [
        { label: "Primary mint", value: "$100K" },
        { label: "Secondary volume", value: "$400K+" },
        { label: "Total · 90 days", value: "$500K" },
        { label: "NFTs", value: "3,333" },
      ],
      narrative:
        "From a napkin sketch to a half-million-dollar IP in three months — a fully realized world, a sold-through collection, and a community that still carries the brand.",
    },
    testimonial: {
      quote:
        "We handed them a sketch and a name. They handed back a universe — and half a million dollars in 90 days.",
      author: "Founder",
      role: "Death Corp Piggies",
    },
    nextSteps: [
      "Season 2 art drop and lore expansion.",
      "Holder-only merch and IRL activations.",
      "Cross-chain expansion and new community quests.",
    ],
  },
};

export const caseStudySlugs = Object.keys(caseStudies);
