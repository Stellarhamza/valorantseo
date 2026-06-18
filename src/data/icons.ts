export const MODULE_ICONS = {
  esp: 'eye',
  aimbot: 'crosshair',
  triggerbot: 'target',
  radar: 'radar',
  recoil: 'zap',
  skins: 'sparkles',
  spoofer: 'shield',
} as const;

export type ModuleIconName = (typeof MODULE_ICONS)[keyof typeof MODULE_ICONS];
