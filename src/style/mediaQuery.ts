const LAYOUT_BREAK_POINT = {
  samsungGalaxyS8: 360,
  samsungGalaxyFold: 280,
  maxWidth370: 370,
  maxWidth330: 330,
  maxWidth310: 310,
  maxWidth295: 295,
};

const createMediaQuery = (mediaPx: number): string => {
  return `@media(max-width: ${mediaPx}px)`;
};

export const mediaQuery = {
  samsungGalaxyS8: createMediaQuery(LAYOUT_BREAK_POINT.samsungGalaxyS8),
  samsungGalaxyFold: createMediaQuery(LAYOUT_BREAK_POINT.samsungGalaxyFold),
  maxWidth370: createMediaQuery(LAYOUT_BREAK_POINT.maxWidth370),
  maxWidth330: createMediaQuery(LAYOUT_BREAK_POINT.maxWidth330),
  maxWidth310: createMediaQuery(LAYOUT_BREAK_POINT.maxWidth310),
  maxWidth295: createMediaQuery(LAYOUT_BREAK_POINT.maxWidth295),
};
