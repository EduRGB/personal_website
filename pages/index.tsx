import type { NextPage } from 'next'
import Head from 'next/head'
import Image from 'next/image'
import AboutMeSection from '../components/about'
import ContactSection from '../components/contact'
import HeroSection from '../components/hero'
import Navigation from '../components/navigation'
import styles from '../styles/Home.module.css'

const css = {
  backgroundColor: '#27253f',
}

const Marker = ({ uniqueId }: any) => {
  return (
    <div id={uniqueId} css={{ width: '100%', height: 1, opacity: 0 }}>
    </div>
  )
}

const Home: NextPage = () => {
  return (
    <div css={css}>
      {/* navigation */}
      <Marker uniqueId='homeSection' />
      <div>
        <Navigation />
      </div>

      {/* hero section */}
      <HeroSection title="Hi, I'm Eduardo" subtitle="Frontend Developer 📜 & Graphic Designer 🖌️" />

      {/* about me section */}
      <Marker uniqueId='aboutSection' />
      <AboutMeSection />

      {/* contact section */}
      <Marker uniqueId='contactSection' />
      <ContactSection />
    </div>
  )
}

export default Home
