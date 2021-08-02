import {useState} from 'react'

import Layout from '../components/layout'
import NAV_container from '../components/nav/nav_container.js'
import SVG_intro_container from '../components/intro/svg_intro_container.js'
import Pres from '../components/pres/pres.js'
import styles from './index.module.sass'
import Skills from '../components/skills/skills.js'
import Portfolio from '../components/portfolio/portfolio.js'
import About from '../components/about/about'
import ContainerMedia from '../components/socialMedia/container'
import Modal from '../components/modal/modal'

export default function index(props){

  const [mousePos, setMousePos] = useState([0, 0]);
  const [zoomAbout, setZoomAbout] = useState(false);
  const [modal, setModal] = useState(false);

  const aboutButtonClicked = (bol)=> setZoomAbout(bol);
  const openModal = (bol) => setModal(bol);

  const givePos = (e) => {
    const convert = (value) => (value/50)
    setMousePos([convert(e.clientX), convert(e.clientY)])
  }

  return <>
      <Layout>
        <Modal closeModal={openModal} modalState={modal}/>
          <section onMouseMove={givePos} className={styles.page}>
            <NAV_container aboutButtonClicked={aboutButtonClicked} setModal={openModal}/>
            <SVG_intro_container pos={mousePos}/>
          </section>
          <Pres/>
          <Skills />
          <Portfolio />
          <About aboutButtonClicked={aboutButtonClicked} zoomAbout={zoomAbout} />
          <ContainerMedia />
      </Layout>
    </>
}