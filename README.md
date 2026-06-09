# 🥐 Levain

> **web(React 19 + Vite)과 mobile(React Native / Expo)이 하나의 모노레포에서 공통 UI 패키지와 디자인 토큰을 공유하는 베이커리 주문 앱.**

크로스플랫폼 공통 모듈 설계와 React Native 적응력을 코드로 보여주기 위한 개인 프로젝트입니다.
프로젝트의 목적·범위·설계 원칙은 [PROJECT_BRIEF.md](./PROJECT_BRIEF.md)에 정리되어 있습니다.

## Architecture

```
levain/
├─ apps/
│  ├─ web/         # React 19 + Vite — 공통 패키지 소비 데모   (Day 1에 생성)
│  └─ mobile/      # Expo + Expo Router — 메인                (Day 1에 생성)
└─ packages/
   ├─ ui/          # 공통 컴포넌트 (플랫폼 분기 .native.tsx)
   ├─ tokens/      # 디자인 토큰 — Radix Colors 스케일 기반 단일 소스
   ├─ core/        # 도메인 타입 · Mock API · 포매터 (플랫폼 무관)
   └─ tsconfig/    # 공유 TS 설정
```

**설계의 핵심**: 디자인 토큰(`@levain/tokens`)과 비즈니스 로직(`@levain/core`)을 플랫폼 무관 레이어로 격리하고, web/mobile은 이를 **소비만** 한다. UI 레이어만 플랫폼별로 갈린다.

## Tech Stack

| Layer    | Stack                                    |
| -------- | ---------------------------------------- |
| Web      | React 19 · Vite · Tailwind               |
| Mobile   | Expo (managed) · Expo Router · React Native |
| Language | TypeScript 5 (strict)                    |
| Data     | TanStack Query                           |
| State    | Zustand                                  |
| Mock     | MSW / 로컬 JSON                          |
| Tooling  | Turborepo · pnpm workspace               |

## Getting Started

```bash
pnpm install
pnpm dev
```

> apps/web · apps/mobile은 Day 1 셋업에서 생성됩니다. 진행 절차는 [HANDOFF.md](./HANDOFF.md) 참조.

## Status

- [x] 모노레포 골격 (pnpm workspace · turbo)
- [x] `@levain/tokens` · `@levain/core` · `@levain/ui`(stub) · `@levain/tsconfig`
- [ ] `apps/mobile` (Expo) — Day 1
- [ ] `apps/web` (Vite) — Day 1
- [ ] 메뉴 리스트 / 상세 / 장바구니 — Day 2~6
