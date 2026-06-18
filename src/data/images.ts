export interface SiteImage {
  id: string;
  alt: string;
  caption?: string;
  /** Filename under /images/ (includes extension) */
  filename: string;
}

function img(filename: string, alt: string, caption?: string): SiteImage {
  return { id: filename.replace(/\.[^.]+$/, ''), alt, caption, filename };
}

/** Primary Valorant media from Riot Games (playvalorant.com) */
export const HERO_IMAGE = img(
  'hero.jpg',
  'Valorant competitive match — agents engaging in tactical combat',
  'Official Valorant gameplay from Riot Games',
);

export const COVER_IMAGE = img('cover.png', 'Valorant key art', 'VALORANT — Riot Games');

export const OG_IMAGE = img(
  'og-cover.png',
  'Valorant Cheats 2026 — Best Undetected Hacks at ValorantCheats.org',
);

export const GALLERY_IMAGES: SiteImage[] = [
  img('gallery-01.jpg', 'Valorant agents in competitive gameplay'),
  img('gallery-02.jpg', 'Valorant tactical firefight with abilities'),
  img('gallery-03.jpg', 'Valorant map — Ascent gameplay overview'),
  img('gallery-04.jpg', 'Valorant map — Bind tactical overview'),
  img('gallery-05.jpg', 'Valorant map — Haven site control'),
  img('gallery-06.jpg', 'Valorant key art — Defy the Limits'),
  img('gallery-07.png', 'Valorant agents lineup — official Riot artwork'),
  img('gallery-08.png', 'Valorant episode key art from Riot Games'),
];

export const CHEAT_MODULE_IMAGES: Record<string, SiteImage> = {
  esp: img('module-esp.jpg', 'ESP and wallhack — Valorant map awareness overlay', 'See enemies through walls'),
  aimbot: img('module-aimbot.jpg', 'Aimbot — precision Valorant gunfight screenshot', 'Precision combat advantage'),
  triggerbot: img('module-triggerbot.jpg', 'Triggerbot — Valorant Operator angle hold', 'Instant reaction on crosshair contact'),
  radar: img('module-radar.jpg', 'Radar hack — Valorant minimap and buy phase', 'Full map radar awareness'),
  recoil: img('module-recoil.jpg', 'Recoil control — Valorant spray transfer combat', 'Zero vertical climb'),
  skins: img('module-skins.png', 'Skin changer — Valorant weapon skin collection', 'Every skin unlocked client-side'),
  spoofer: img('module-spoofer.png', 'HWID spoofer — Valorant agent select screen', 'Hardware identity protection'),
};

export const SECTION_IMAGES = {
  overview: img('section-overview.png', 'Valorant competitive overview — full cheat suite context', 'Built for Valorant ranked'),
  howItWorks: img('section-how-it-works.png', 'Valorant in-game HUD and overlay integration', 'Kernel-protected pipeline'),
  safety: img('section-safety.png', 'Valorant Vanguard-protected competitive match', 'Undetected Vanguard bypass'),
  setup: img('section-setup.png', 'Valorant agent selection — ready to inject and play', '5-minute setup flow'),
  editorial: img('section-editorial.jpg', 'Valorant tactical round with team coordination', 'Premium cheat experience'),
} as const;

export function resolveImageSrc(image: SiteImage): string {
  return `/images/${image.filename}`;
}

/** @deprecated Use resolveImageSrc — kept for compatibility */
export function resolveImageFallback(image: SiteImage): string {
  return resolveImageSrc(image);
}

export function resolveImageSrcSet(_image: SiteImage): string | undefined {
  return undefined;
}
