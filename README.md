# TWC Website Redesign

Award-worthy creative agency website for The Wider Collective.

## Stack

- **Framework:** Next.js 15 (App Router)
- **Styling:** Tailwind CSS
- **Animation:** Framer Motion
- **Typography:** Inter + Space Grotesk (Google Fonts)

## Color Palette (TWC Lavender)

```css
--background: #0A0A0A
--foreground: #FAFAFA
--accent: #9B8CFF (lavender)
--accent-light: #C4B8FF
--accent-dark: #7B6CD9
```

## Getting Started

```bash
# Install dependencies
npm install

# Run dev server
npm run dev

# Build for production
npm run build
```

Open [http://localhost:3000](http://localhost:3000)

## Project Structure

```
src/
├── app/
│   ├── globals.css
│   ├── layout.tsx
│   └── page.tsx
├── components/
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── Work.tsx
│   ├── Services.tsx
│   ├── Pitch.tsx (Death Corp case study)
│   ├── Clients.tsx
│   ├── Opinions.tsx
│   ├── Reel.tsx
│   ├── CTA.tsx
│   └── Footer.tsx
└── lib/
    └── utils.ts
```

## TODO

### Assets Needed
- [ ] Work images (AirAsia, Death Corp, Global Mission, Yoyoso)
- [ ] Death Corp assets (NFT art, trailer video, mint site screenshot)
- [ ] Showreel video URL
- [ ] Client logos (17 from PDF)
- [ ] Calendly booking link

### Features to Add
- [ ] Custom cursor effect (lavender splash)
- [ ] Smooth scroll (Lenis)
- [ ] Page transitions
- [ ] Mobile responsive polish
- [ ] SEO optimization
- [ ] Analytics

## Contributors

- Mehraab (@FlatTesseract)
- Winston (@twcwinston)
- Bibble (AI)

## License

Private - Wider Labs LLC
