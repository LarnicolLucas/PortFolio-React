import Layout from '../components/layout'
import NAV_container from '../components/nav/nav_container.js'
import SVG_intro_container from '../components/intro/svg_intro_container.js'
import Pres from '../components/pres/pres.js'

export default function index(props){

  return <>
      <Layout>
          <NAV_container></NAV_container>
          <SVG_intro_container></SVG_intro_container>
          <Pres></Pres>
      </Layout>
    </>
}