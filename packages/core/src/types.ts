/**
 * 도메인 타입 — 플랫폼 무관. web/mobile 공유.
 */
export type MenuCategory = "bread" | "cake" | "beverage" | "gift";

export interface MenuItem {
  id: string;
  name: string;
  category: MenuCategory;
  /** 단위: 원(KRW) */
  price: number;
  description: string;
  imageUrl: string;
  soldOut: boolean;
}

export interface CartLine {
  item: MenuItem;
  quantity: number;
}

export const CATEGORY_LABELS: Record<MenuCategory, string> = {
  bread: "빵",
  cake: "케이크",
  beverage: "음료",
  gift: "기프트",
};
