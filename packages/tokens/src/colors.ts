/**
 * Color palette — Radix Colors 스케일 컨벤션(1–12 단계)을 채택.
 * shadcn/ui와 동일한 "raw scale → semantic token" 2단 구조.
 * 순수 hex 문자열이므로 web(Tailwind/CSS var)과 mobile(RN StyleSheet) 양쪽에서 소비 가능.
 *
 * 베이커리 톤:
 *   - sand   : 중성(배경/텍스트/보더)
 *   - amber  : primary (빵 크러스트의 골드)
 *   - brown  : secondary (커피·초콜릿)
 */

export const palette = {
  white: "#ffffff",
  black: "#000000",

  // 중성 — Radix "sand"
  sand: {
    1: "#fdfdfc",
    2: "#f9f9f8",
    3: "#f1f0ef",
    4: "#e9e8e6",
    5: "#e2e1de",
    6: "#dad9d6",
    7: "#cfceca",
    8: "#bcbbb5",
    9: "#8d8d86",
    10: "#82827c",
    11: "#63635e",
    12: "#21201c",
  },

  // primary — Radix "amber"
  amber: {
    1: "#fefdfb",
    2: "#fff9ed",
    3: "#fff4d5",
    4: "#ffecbc",
    5: "#ffe3a2",
    6: "#ffd386",
    7: "#f3ba63",
    8: "#ee9d2b",
    9: "#ffb224",
    10: "#ffa01c",
    11: "#ad5700",
    12: "#4e2009",
  },

  // secondary — Radix "brown"
  brown: {
    1: "#fefdfc",
    2: "#fcf9f6",
    3: "#f6eee7",
    4: "#f0e4d9",
    5: "#ebdaca",
    6: "#e4cdb7",
    7: "#dcbc9f",
    8: "#cea37e",
    9: "#ad7f58",
    10: "#a07553",
    11: "#815e46",
    12: "#3e332e",
  },

  // 상태 색
  red: { 9: "#e5484d", 11: "#cd2b31" },
  green: { 9: "#30a46c", 11: "#18794e" },
} as const;

/**
 * Semantic tokens — 컴포넌트는 이 시맨틱 토큰만 참조한다(raw palette 직접 참조 금지).
 * 추후 dark 모드는 동일 키를 dark 스케일로 매핑해 추가.
 */
export const colors = {
  background: palette.sand[1],
  surface: palette.sand[2],
  surfaceMuted: palette.sand[3],
  border: palette.sand[6],
  borderStrong: palette.sand[8],

  text: palette.sand[12],
  textMuted: palette.sand[11],
  textSubtle: palette.sand[10],

  primary: palette.amber[9],
  primaryActive: palette.amber[10],
  onPrimary: palette.sand[12],

  secondary: palette.brown[9],
  secondaryActive: palette.brown[10],
  onSecondary: palette.sand[1],

  danger: palette.red[9],
  success: palette.green[9],
} as const;

export type ColorToken = keyof typeof colors;
