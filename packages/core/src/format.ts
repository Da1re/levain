/**
 * 공통 포매터 — web/mobile 공유 유틸.
 */
export function formatPrice(won: number): string {
  return `₩${won.toLocaleString("ko-KR")}`;
}
