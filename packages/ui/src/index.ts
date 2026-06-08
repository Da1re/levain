/**
 * 공통 UI 컴포넌트.
 *
 * 플랫폼 분기 전략:
 *   - 양 플랫폼에서 동일 구현 가능한 것 → Foo.tsx 한 파일
 *   - DOM/Native 구현이 갈리는 것 → Foo.tsx (web) + Foo.native.tsx (mobile)
 *     번들러(Next / Metro)가 확장자를 보고 자동 선택한다.
 *
 * 모든 컴포넌트는 @levain/tokens의 *시맨틱 토큰*만 참조한다(raw palette 직접 참조 금지).
 *
 * Day 5에 PriceTag / Badge 등 공통 컴포넌트를 여기에 추가:
 *   export { PriceTag } from "./price-tag";
 */
export {};
