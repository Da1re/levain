import type { MenuItem } from "./types";

/**
 * Mock 메뉴 데이터. 백엔드 없이 프론트에 집중하기 위한 시드.
 * 이미지는 placeholder URL — Day별 작업 중 교체 가능.
 */
export const MOCK_MENU: MenuItem[] = [
  {
    id: "soft-baguette",
    name: "소프트 바게트",
    category: "bread",
    price: 3500,
    description: "겉은 바삭, 속은 촉촉한 데일리 바게트.",
    imageUrl: "https://placehold.co/600x400/ffb224/4e2009?text=Baguette",
    soldOut: false,
  },
  {
    id: "butter-croissant",
    name: "버터 크루아상",
    category: "bread",
    price: 3200,
    description: "겹겹이 살아있는 결, 진한 버터 향.",
    imageUrl: "https://placehold.co/600x400/ffd386/4e2009?text=Croissant",
    soldOut: false,
  },
  {
    id: "pain-au-levain",
    name: "팽 오 르뱅",
    category: "bread",
    price: 6800,
    description: "천연발효종으로 48시간 저온 숙성한 시그니처.",
    imageUrl: "https://placehold.co/600x400/ad7f58/ffffff?text=Levain",
    soldOut: false,
  },
  {
    id: "strawberry-shortcake",
    name: "딸기 생크림 케이크",
    category: "cake",
    price: 32000,
    description: "제철 딸기와 부드러운 생크림.",
    imageUrl: "https://placehold.co/600x400/e5484d/ffffff?text=Cake",
    soldOut: false,
  },
  {
    id: "basque-cheesecake",
    name: "바스크 치즈케이크",
    category: "cake",
    price: 6500,
    description: "겉은 캐러멜라이즈, 속은 크리미.",
    imageUrl: "https://placehold.co/600x400/ee9d2b/ffffff?text=Cheese",
    soldOut: true,
  },
  {
    id: "flat-white",
    name: "플랫 화이트",
    category: "beverage",
    price: 4800,
    description: "리스트레토 샷에 벨벳 우유.",
    imageUrl: "https://placehold.co/600x400/3e332e/ffffff?text=Coffee",
    soldOut: false,
  },
  {
    id: "earl-grey",
    name: "얼그레이 티",
    category: "beverage",
    price: 4500,
    description: "베르가못 향이 은은한 홍차.",
    imageUrl: "https://placehold.co/600x400/815e46/ffffff?text=Tea",
    soldOut: false,
  },
  {
    id: "gift-box-s",
    name: "기프트 박스 (S)",
    category: "gift",
    price: 24000,
    description: "인기 빵 4종 + 카드 구성.",
    imageUrl: "https://placehold.co/600x400/dcbc9f/3e332e?text=Gift",
    soldOut: false,
  },
];
