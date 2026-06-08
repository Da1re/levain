import { MOCK_MENU } from "./mock-data";
import type { MenuCategory, MenuItem } from "./types";

/**
 * Mock API 클라이언트. 네트워크 지연을 흉내내 로딩/에러 UI를 검증할 수 있게 한다.
 * Day 4에서 TanStack Query 훅이 이 함수들을 호출한다.
 * 실제 백엔드로 교체하려면 이 파일만 바꾸면 된다(나머지 레이어 영향 없음).
 */
const NETWORK_DELAY_MS = 400;

const delay = (ms: number) => new Promise((resolve) => setTimeout(resolve, ms));

export async function fetchMenu(category?: MenuCategory): Promise<MenuItem[]> {
  await delay(NETWORK_DELAY_MS);
  if (!category) return MOCK_MENU;
  return MOCK_MENU.filter((item) => item.category === category);
}

export async function fetchMenuItem(id: string): Promise<MenuItem> {
  await delay(NETWORK_DELAY_MS);
  const found = MOCK_MENU.find((item) => item.id === id);
  if (!found) throw new Error(`Menu item not found: ${id}`);
  return found;
}
