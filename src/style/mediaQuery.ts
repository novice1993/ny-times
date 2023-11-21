const LAYOUT_BREAK_POINT = {
  iPhoneSE: 375,
};

const createMediaQuery = (mediaPx: number): string => {
  return `@media(max-width: ${mediaPx}px)`;
};

// mediaQuery
export const mediaQuery = {
  iPhoneSE: createMediaQuery(LAYOUT_BREAK_POINT.iPhoneSE),
};
