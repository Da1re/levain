# 🥐 Levain

> web(React 19 + Vite)과 mobile(React Native / Expo)이 하나의 모노레포에서 **공통 UI 패키지와 디자인 토큰을 공유**하는 베이커리 주문 앱.

크로스플랫폼 공통 모듈 설계와 React Native 적응력을 코드로 보여주기 위한 개인 프로젝트입니다.

## 설계의 핵심

- **디자인 토큰(`@levain/tokens`)과 비즈니스 로직(`@levain/core`)을 플랫폼 무관 레이어로 격리**하고, web/mobile은 이를 _소비만_ 한다. 플랫폼별로 갈리는 건 UI 레이어뿐.
- 공통 패키지를 빌드 산출물이 아닌 **TS 소스로 직접 노출**(`exports: "./src/index.ts"`)해, Vite/Metro가 변환 — 별도 빌드 스텝 없이 즉시 공유.
- 네비게이션은 **Expo Router**(파일 기반). 루트 `Stack` + `(tabs)` 그룹 + `[id]` 동적 라우팅.

## Architecture

```
levain/
├─ apps/
│  ├─ web/         # React 19 + Vite — 공통 패키지 소비 데모
│  └─ mobile/      # Expo (managed) + Expo Router — 메인
└─ packages/
   ├─ ui/          # 공통 컴포넌트 (플랫폼 분기 .native.tsx)
   ├─ tokens/      # 디자인 토큰 — Radix Colors 스케일 기반 단일 소스
   ├─ core/        # 도메인 타입 · Mock API · 포매터 (플랫폼 무관)
   └─ tsconfig/    # 공유 TS 설정
```

## Tech Stack

| Layer    | Stack                                       |
| -------- | ------------------------------------------- |
| Web      | React 19 · Vite                             |
| Mobile   | Expo (managed) · Expo Router · React Native |
| Language | TypeScript (strict)                         |
| Data     | TanStack Query _(예정)_                     |
| State    | Zustand _(예정)_                            |
| Mock     | 로컬 Mock (`@levain/core`)                  |
| Tooling  | Turborepo · pnpm workspace                  |

## Getting Started

```bash
pnpm install

pnpm web          # web (Vite)  → http://localhost:5173
pnpm mobile       # mobile (Expo) → QR 스캔(Expo Go) / w(웹) / i(iOS 시뮬레이터)
pnpm mobile:web   # mobile을 바로 웹 브라우저로
```

## Roadmap

- [x] 모노레포 골격 (pnpm workspace · Turborepo)
- [x] 공통 패키지 `@levain/{tokens, core, ui, tsconfig}`
- [x] `apps/mobile`(Expo) · `apps/web`(Vite) 생성 + 공통 패키지 연결
- [x] Expo Router 탭·스택 네비게이션 + 메뉴 상세(`menu/[id]`) 동적 라우팅
- [ ] `FlatList` 메뉴 리스트 (가상화)
- [ ] TanStack Query + Mock 연동 (로딩 / 에러 / 빈 상태)
- [ ] 장바구니 (Zustand)
- [ ] 공통 UI 컴포넌트(`@levain/ui`)를 web/mobile 양쪽에서 공유
