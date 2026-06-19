export const SITE = {
  name: 'ValorantCheats',
  title: 'Valorant Cheats 2026 — Best Undetected Hacks | ValorantCheats.org',
  description:
    'Download the best Valorant cheats of 2026 — undetected aimbot, ESP, wallhack, triggerbot & radar hack. Full cheat suite bypasses Vanguard. Free 24h trial at valorantcheats.org.',
  url: 'https://valorantcheats.org',
  locale: 'en_US',
  author: 'ValorantCheats',
  published: '2026-06-18',
  modified: '2026-06-18',
} as const;

export const SITE_STATS = [
  { value: '12,000+', label: 'Active Users' },
  { value: '4.9★', label: 'Community Rating' },
  { value: '97.2%', label: 'Undetected Rate' },
  { value: '<2h', label: 'Patch Turnaround' },
] as const;

export const PRICING = [
  { plan: 'Free Trial', price: '$0', period: '24 hours', includes: 'Full Valorant cheats suite — all 7 modules' },
  { plan: 'Weekly', price: '$9.99', period: 'per week', includes: 'All cheats + HWID spoofer + Discord support' },
  { plan: 'Monthly', price: '$24.99', period: 'per month', includes: 'Everything + priority patches & support' },
  { plan: 'Lifetime', price: '$59.99', period: 'one-time', includes: 'Permanent access to all current & future cheats' },
] as const;

export const CHEAT_MODULES = [
  {
    id: 'esp',
    name: 'ESP & Wallhack',
    tag: 'Most Popular',
    description:
      'See every enemy through walls with player boxes, skeleton overlay, health bars, weapon tags, and chams wallhack. The safest Valorant cheat for ranked — lowest ban rate in our suite.',
  },
  {
    id: 'aimbot',
    name: 'Aimbot',
    tag: 'Rank Boost',
    description:
      'Smooth aim assist with customizable FOV, bone targeting, recoil compensation, and humanized curves. Per-weapon profiles keep headshots looking legit on death cam.',
  },
  {
    id: 'triggerbot',
    name: 'Triggerbot',
    tag: 'Legit Mode',
    description:
      'Auto-fires when your crosshair hits an enemy hitbox. Adjustable reaction delay (50–200ms) mimics human reflexes — ideal for Operator and angle holds.',
  },
  {
    id: 'radar',
    name: 'Radar Hack',
    tag: 'Tactical',
    description:
      'Live 2D minimap radar with every player position, distance filters, and team-only mode. Never get flanked in ranked again.',
  },
  {
    id: 'recoil',
    name: 'Recoil Control',
    tag: 'Utility',
    description:
      'Eliminates spray patterns on Vandal, Phantom, Spectre, and every automatic weapon. Zero vertical climb — looks like thousands of hours of practice.',
  },
  {
    id: 'skins',
    name: 'Skin Changer',
    tag: 'Cosmetic',
    description:
      'Unlock every Valorant skin, knife, and buddy client-side. Cosmetic-only — zero gameplay advantage and zero Vanguard detection risk.',
  },
  {
    id: 'spoofer',
    name: 'HWID Spoofer',
    tag: 'Included Free',
    description:
      'Bypass hardware bans and protect your PC identity. Included with every Valorant cheats plan — one-click spoof before each session.',
  },
] as const;

export type CheatFeature = { name: string; desc: string };

export const AIMBOT_FEATURES: readonly CheatFeature[] = [
  { name: 'Enable Aimbot', desc: 'Master toggle for aim assistance. Hold your aim key or leave always-on with per-weapon profiles.' },
  { name: 'Aim Key (First, Second)', desc: 'Bind two separate keys for aim activation — e.g. Mouse2 for rifles, Shift for Operator holds.' },
  { name: 'Prediction', desc: 'Predicts enemy movement trajectories and peek timing so crosshair leads strafes and Jett dashes.' },
  { name: 'Visible Check', desc: 'Aim only at targets with line of sight. Skips enemies behind smokes, walls, and Sage barriers.' },
  { name: 'FOV', desc: 'Set the radius where aimbot engages. Tighter FOV looks more legit on death cam replays.' },
  { name: 'Show FOV', desc: 'Draw the active aim zone on screen as a circle so you can tune settings in real time.' },
  { name: 'FOV Color', desc: 'Pick any color for the on-screen FOV circle — match your overlay theme or keep it subtle.' },
  { name: 'Dynamic FOV', desc: 'FOV shrinks or expands based on weapon, zoom state, and distance to the nearest threat.' },
  { name: 'Ignore Dead', desc: 'Disable aim on eliminated players and death orbs so the lock never snaps to corpses.' },
  { name: 'Ignore Knife', desc: 'Turn off aimbot while holding your melee — no accidental locks during eco rounds or rotates.' },
  { name: 'Smooth', desc: 'Smoothing strength for aim movement. Higher values = weaker, more humanized tracking.' },
  {
    name: 'Custom Settings (Sniper, Sidearm, SMG, Shotgun, Rifle)',
    desc: 'Separate aim profiles per weapon class — Operator/Marshal, Sheriff/Ghost, Spectre/Stinger, Bucky/Judge, Vandal/Phantom.',
  },
];

export const ESP_FEATURES: readonly CheatFeature[] = [
  { name: 'Enable ESP', desc: 'Master toggle for all wallhack visuals. Run info-only in ranked or full ESP in unrated.' },
  { name: 'Box — Square, Corners, Fill', desc: '2D box styles: full square, corner brackets, or filled background with adjustable opacity.' },
  { name: 'Visible Check', desc: 'Different colors for visible enemies vs. those behind walls — green in LOS, red occluded.' },
  { name: 'Skeleton', desc: 'Full bone overlay showing crouch, jump, and peek pose through any surface.' },
  { name: 'Distance', desc: 'Live distance to each enemy in meters — prioritize the closest threat on site retakes.' },
  { name: 'Nickname', desc: 'Riot ID and agent name above every player. Track who is holding which angle.' },
  { name: 'Kills', desc: 'Round kill count pulled from the scoreboard — spot the enemy fragger before you peek.' },
  { name: 'Weapon', desc: 'See Operator, Vandal, or Sheriff before you commit — adjust timing to their loadout.' },
  { name: 'Minimap', desc: 'Enemy positions on the in-game minimap and a separate 2D radar overlay with distance filters.' },
  { name: 'Outlines', desc: 'Extra outline pass on ESP elements — thickness, glow, and per-element color control.' },
  { name: 'Arrows', desc: 'Off-screen directional arrows pointing toward enemies outside your FOV.' },
  { name: 'Platform', desc: 'Player input device shown as icon or text — PC vs. console controller players.' },
  { name: 'Health & Shield Bars', desc: 'Real-time HP and armor above every enemy — know exactly when to push.' },
  { name: 'Spike Carrier ESP', desc: 'Instantly spot who has the spike for smarter retakes and post-plants.' },
];

export const TRIGGERBOT_FEATURES: readonly CheatFeature[] = [
  { name: 'Enable Triggerbot', desc: 'Auto-fires when your crosshair hits an enemy hitbox. Adjustable reaction delay mimics human reflexes.' },
  { name: 'Only Operator', desc: 'Triggerbot active only while holding a sniper — ideal for angle holds and one-tap lineups.' },
  { name: 'Always Active', desc: 'Triggerbot runs without holding a key. Pair with delay settings for passive angle play.' },
  { name: 'Use Keybind', desc: 'Hold a chosen key to activate triggerbot — full manual control over when it engages.' },
];

export const MISC_FEATURES: readonly CheatFeature[] = [
  { name: 'Spectator List', desc: 'Live list of players spectating you — know when to play clean for streamers or overwatch.' },
  { name: 'Configs (Create, Delete, Load)', desc: 'Save, manage, and swap full setting profiles — legit ranked, Operator-only, full rage, and more.' },
  { name: 'Custom Colors', desc: 'Change colors for every ESP element, FOV circle, radar dots, and outline glow independently.' },
];

export const DETAILED_FEATURE_SECTIONS = [
  { id: 'aimbot-settings', title: 'Combat (Aimbot)', features: AIMBOT_FEATURES },
  { id: 'esp-settings', title: 'ESP (Wallhack)', features: ESP_FEATURES },
  { id: 'triggerbot-settings', title: 'Triggerbot', features: TRIGGERBOT_FEATURES },
  { id: 'misc-settings', title: 'Misc', features: MISC_FEATURES },
] as const;

export const NAV_SECTIONS = [
  { id: 'overview', label: 'Overview' },
  { id: 'gallery', label: 'Gallery' },
  { id: 'guide', label: 'Guide' },
  { id: 'cheats', label: 'Cheat Suite' },
  { id: 'how-it-works', label: 'How It Works' },
  { id: 'safety', label: 'Undetected' },
  { id: 'setup', label: 'Download' },
  { id: 'compare', label: 'Compare' },
  { id: 'faq', label: 'FAQ' },
] as const;

export const FAQ_ITEMS = [
  {
    question: 'What are Valorant cheats?',
    answer:
      'Valorant cheats are third-party software that give you advantages in Riot\'s FPS — ESP wallhack, aimbot, triggerbot, radar hack, recoil control, and skin changers. ValorantCheats.org bundles all modules into one undetected loader that bypasses Vanguard anti-cheat.',
  },
  {
    question: 'Where can I download Valorant cheats?',
    answer:
      'Download Valorant cheats directly from valorantcheats.org. Create a free account, grab the loader, and start your 24-hour trial instantly. No surveys, no password sharing — one download gives you every cheat module.',
  },
  {
    question: 'Are these Valorant cheats undetected?',
    answer:
      'Yes. Our Valorant cheats use a kernel-level driver with daily signature rotation to stay ahead of Riot Vanguard. We patch within 2 hours of every Valorant update and monitor ban waves in real time. 97.2% of users running info-mode cheats reported no bans over 90 days.',
  },
  {
    question: 'What cheats are included in the Valorant cheats package?',
    answer:
      'Every plan includes: ESP & wallhack, aimbot, triggerbot, radar hack, recoil control, skin changer, and HWID spoofer. Toggle any module on or off independently — run a minimal setup for ranked safety or enable everything for unrated.',
  },
  {
    question: 'How much do Valorant cheats cost?',
    answer:
      'Free 24-hour trial, then $9.99/week, $24.99/month, or $59.99 lifetime. All plans include every Valorant cheat module, HWID spoofer, auto-updates, and 24/7 Discord support. Lifetime is the best value for long-term players.',
  },
  {
    question: 'What is the safest Valorant cheat for ranked?',
    answer:
      'ESP and radar hack are the safest Valorant cheats for ranked — they give map awareness without altering your aim or movement. Death cam replays look completely natural. Add triggerbot with 80–120ms delay for extra edge while staying low-profile.',
  },
  {
    question: 'Do Valorant cheats work on Windows 11?',
    answer:
      'Yes. Valorant cheats from valorantcheats.org support Windows 10 (21H2+) and Windows 11 (22H2, 23H2). Secure Boot and TPM 2.0 must be enabled. The loader auto-detects your game version and applies patches after every Riot update.',
  },
  {
    question: 'Can I get banned using Valorant cheats?',
    answer:
      'Any cheat carries risk — Vanguard is aggressive. Minimize it by enabling HWID spoofer always, using info-mode cheats in ranked, and avoiding rage settings on your main account. Never stream with overlays visible.',
  },
  {
    question: 'How fast are Valorant cheats updated after patches?',
    answer:
      'We push Valorant cheats updates within 2 hours of every Riot patch. Discord alerts notify you instantly when the loader is ready. If cheats are down longer than 24 hours, subscribers receive a free extension or refund.',
  },
  {
    question: 'Is valorantcheats.org better than other Valorant cheat sites?',
    answer:
      'ValorantCheats.org is built around the exact-match domain valorantcheats.org — purpose-built for Valorant only. You get 7 modules in one loader, kernel Vanguard bypass, HWID spoofer included free, transparent status updates, 24/7 Discord support, and faster patch times than generic multi-game cheat providers.',
  },
] as const;

export const META_KEYWORDS = [
  'valorant cheats',
  'valorant cheat',
  'valorant hacks',
  'valorant hack',
  'valorant cheats download',
  'valorant cheats 2026',
  'best valorant cheats',
  'undetected valorant cheats',
  'free valorant cheats',
  'valorant cheats free trial',
  'valorant aimbot',
  'valorant esp',
  'valorant wallhack',
  'valorant triggerbot',
  'valorantcheats.org',
].join(', ');
