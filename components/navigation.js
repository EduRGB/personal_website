/** @type {import("@emotion/react").CSSObject} */
const css = {
  width: '100%',
  color: '#E5DBFF',
  textTransform: 'uppercase',
  fontSize: 14,
  textAlign: 'center',
  fontWeight: '400',
  // marginBottom: 20,
  position: 'fixed',
  top: 0,
  zIndex: 99,
  backgroundColor: 'rgb(39 37 63 / 88%)',
  backdropFilter: 'blur(4px)',

  'a': {
    display: 'inline-block',
    padding: '20px 30px',
    textShadow: '2px 2px 8px rgba(255,255,255,0)',
    fontWeight: 500,

    '&:hover': {
      textShadow: '2px 2px 8px rgba(255,255,255,0.4)'
    }
  }
}

const Navigation = () => {
  return (
    <nav css={css}>
      <a href='#homeSection'>Home</a>
      <a href='#aboutSection'>About</a>
      <a href='#contactSection'>Contact</a>
    </nav>
  )
}

export default Navigation
