import { SiJavascript, SiHtml5, SiCss3, SiReact, SiGithub, SiFigma, SiAdobephotoshop, SiGit, SiNotion } from 'react-icons/si'

/** @type {import("@emotion/react").CSSObject} */
const css = {
  padding: 100,
  display: 'grid',
  gridTemplateColumns: '1fr 1fr',
  gap: 20,
}

/** @type {import("@emotion/react").CSSObject} */
const panelCss = {
  backgroundColor: 'white',
  boxShadow: '2px 2px 10px 0 rgb(255 255 255 / 15%)',
  borderRadius: 4,
  padding: '40px 30px 10px 30px',
  color: '#6741D9',

  'h2': {
    textTransform: 'uppercase',
    fontSize: 14,
    fontWeight: '500',
    borderBottom: '1px solid #D0BFFF',
    paddingBottom: 10,
  },

  'p': {
    color: '#5C5F66',
    margin: '30px 0',
  },
}

const Panel = ({ children, transparent = false }) => {
  let style = { ...panelCss }
  if (transparent) {
    style = {
      ...panelCss,
      boxShadow: undefined,
      backgroundColor: undefined,
      color: '#B197FC',

      'p': {
        color: '#F3F0FF',
        margin: '30px 0',
        fontSize: 40,

        'svg': {
          marginRight: 20,
        }
      },
    }
  }
  return (
    <div css={style}>
      {children}
    </div>
  )
}

const AboutMeSection = () => {
  return (
    <div css={css}>
      <Panel>
        <h2>About me</h2>
        <p>
          I&lsquo;m Eduardo, a self taught frontend developer and graphic designer
          who loves to create visually endearing and functional visual experiences.
        </p>

        <h2>What do I bring to the table</h2>
        <p>
          Apart from my experience as a frontend developer and graphic designer,
          I have worked in a wide range of fields from UI/UX to application
          development.
        </p>

        <h2>When I&lsquo;m not coding</h2>
        <p>
          I like to spend time with friends and play the guitar, I think part of
          my expertise as a frontend developer gets complemented by my love for
          music.
        </p>
      </Panel>

      <Panel transparent>
        <div>
          <h2>Languages and frameworks</h2>
          <p>
            <SiJavascript title='JavaScript' />
            <SiHtml5 title='HTML5' />
            <SiCss3 title='CSS3' />
            <SiReact title='React' />
          </p>

          <h2>Other technologies</h2>
          <p>
            <SiGit title='Git' />
            <SiGithub title='GitHub' />
            <SiFigma title='Figma' />
          </p>

          <h2>Additional skills</h2>
          <p>
            <SiNotion title='Notion' />
            <SiAdobephotoshop title='Photoshop' />
          </p>
        </div>
      </Panel>
    </div>
  )
}

export default AboutMeSection
