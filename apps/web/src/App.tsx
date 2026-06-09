import { colors, spacing, radius, fontSize, fontWeight } from '@levain/tokens'
import { MOCK_MENU, formatPrice, CATEGORY_LABELS } from '@levain/core'

/**
 * Day 1 검증 화면 — web(Vite)이 @levain/tokens · @levain/core를
 * 그대로 import해 소비함을 보여주는 최소 메뉴 리스트.
 * 실제 스타일링(Tailwind)은 Day 5에서. 여기선 토큰 직접 소비로 공유를 증명.
 */
function App() {
  return (
    <main style={pageStyle}>
      <header style={headerStyle}>
        <h1 style={titleStyle}>Levain</h1>
        <p style={subtitleStyle}>web · React 19 + Vite — 공통 패키지 소비 데모</p>
      </header>

      <ul style={listStyle}>
        {MOCK_MENU.map((item) => (
          <li key={item.id} style={cardStyle}>
            <div>
              <p style={categoryStyle}>{CATEGORY_LABELS[item.category]}</p>
              <p style={nameStyle}>{item.name}</p>
            </div>
            <span style={priceStyle}>{formatPrice(item.price)}</span>
          </li>
        ))}
      </ul>
    </main>
  )
}

const pageStyle: React.CSSProperties = {
  maxWidth: 480,
  margin: '0 auto',
  padding: spacing[5],
  background: colors.background,
  minHeight: '100vh',
  fontFamily: 'system-ui, sans-serif',
}
const headerStyle: React.CSSProperties = { marginBottom: spacing[5] }
const titleStyle: React.CSSProperties = {
  color: colors.primary,
  fontSize: fontSize['3xl'],
  fontWeight: fontWeight.bold,
  margin: 0,
}
const subtitleStyle: React.CSSProperties = { color: colors.textMuted, fontSize: fontSize.sm }
const listStyle: React.CSSProperties = {
  listStyle: 'none',
  padding: 0,
  margin: 0,
  display: 'flex',
  flexDirection: 'column',
  gap: spacing[3],
}
const cardStyle: React.CSSProperties = {
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  padding: spacing[4],
  background: colors.surface,
  border: `1px solid ${colors.border}`,
  borderRadius: radius.lg,
}
const categoryStyle: React.CSSProperties = {
  color: colors.secondary,
  fontSize: fontSize.xs,
  margin: 0,
}
const nameStyle: React.CSSProperties = {
  color: colors.text,
  fontSize: fontSize.base,
  fontWeight: fontWeight.medium,
  margin: 0,
}
const priceStyle: React.CSSProperties = { color: colors.text, fontWeight: fontWeight.semibold }

export default App
