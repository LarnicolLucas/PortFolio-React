import Layout from '../components/layout'
import NAV_container from '../components/nav/nav_container.js'
import SVG_intro_container from '../components/intro/svg_intro_container.js'
import Pres from '../components/pres/pres.js'
import styles from './index.module.sass'

export default function index(props){

  return <>
      <Layout>
          <section className={styles.page}>
            <NAV_container/>
            <SVG_intro_container/>
          </section>
          <Pres/>
      </Layout>
    </>
}