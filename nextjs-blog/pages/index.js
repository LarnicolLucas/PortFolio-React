import {useState} from 'react'

import Layout from '../components/layout'
import NAV_container from '../components/nav/nav_container.js'
import SVG_intro_container from '../components/intro/svg_intro_container.js'
import Pres from '../components/pres/pres.js'
import styles from './index.module.sass'
import Skills from '../components/skills/skills.js'

export default function index(props){

  const [mousePos, setMousePos] = useState([0, 0]);

  const givePos = (e) => {
    const convert = (value) => (value/50)
    setMousePos([convert(e.clientX), convert(e.clientY)])
  }

  return <>
      <Layout>
          <section onMouseMove={givePos} className={styles.page}>
            <NAV_container/>
            <SVG_intro_container pos={mousePos}/>
          </section>
          <Pres/>
          <Skills />
      </Layout>
    </>
}