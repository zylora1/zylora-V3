const metadata = {
  id: "neo-brutal-saas",
  name: "Neo Brutal SaaS",
  slug: "neo-brutal-saas",
  category: "SaaS",
  vertical: "software",
  styleTags: ["neo-brutalism", "brutalist", "editorial-grid", "high-contrast", "geometric"],
  pageCount: 1,
  version: "1.0.0",
  responsive: true,
  accessibility: {
    semanticLandmarks: true,
    reducedMotion: true,
    keyboardFriendly: true
  },
  assets: {
    hero: "./assets/hero.webp",
    works: [
      "./assets/work-01.webp",
      "./assets/work-02.webp",
      "./assets/work-03.webp"
    ]
  },
  licensing: {
    implementation: "Original implementation created from the user-supplied visual reference.",
    bundledAssets: "Original locally generated abstract UI mockups; no third-party photography or brand artwork is bundled."
  }
} as const;

export default metadata;
