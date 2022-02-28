import { keyframes, Keyframes } from '@emotion/react'
import { VscChevronDown } from 'react-icons/vsc'

/** @type {import("@emotion/react").CSSObject} */
const css = {
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  // gap: 50,
  flexDirection: 'column',
  margin: '250px 20px',
}

/** @type {import("@emotion/react").CSSObject} */
const titleCss = {
  margin: 30,
  background: '#7950F2',
  color: 'white',
  fontSize: 36,
  fontWeight: '300',
  padding: 20,
  transform: 'skew(-15deg, 0)'
}

/** @type {import("@emotion/react").CSSObject} */
const subtitleCss = {
  color: '#E5DBFF',
  fontSize: 20,
  margin: 10,
}

// https://emotion.sh/docs/keyframes
const bounce = keyframes`
  from, 20%, 53%, 80%, to {
    transform: translate3d(0,0,0);
  }

  40%, 43% {
    transform: translate3d(0, -30px, 0);
  }

  70% {
    transform: translate3d(0, -15px, 0);
  }

  90% {
    transform: translate3d(0,-4px,0);
  }
`

/** @type {import("@emotion/react").CSSObject} */
const arrowCss = {
  color: '#E5DBFF',
  fontSize: 42,
  margin: '120px 20px 50px',
  animation: `${bounce} 2s ease 1s infinite both`,
}

const HeroSection = ({ title, subtitle }) => {
  return (
    <div css={css}>
      <div css={titleCss}>
        {title}
      </div>
      <div css={subtitleCss}>
        {subtitle}
      </div>
      <div css={arrowCss}>
        <VscChevronDown />
      </div>
    </div>
  )
}

export default HeroSection
