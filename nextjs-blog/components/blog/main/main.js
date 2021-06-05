import styles from './main.module.sass'

import SideNav from './sideNav/sideNav.js'
import Content from './content/content.js'

export default function SideBar(props){
    return <>
        <section className={styles.container_}>

            <SideNav color={props.color}/>
            <Content color={props.color}/>

        </section>
    </>
}