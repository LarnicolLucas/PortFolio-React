import styles from './main.module.sass'

import SideNav from './sideNav/sideNav.js'
import Content from './content/content.js'

export default function SideBar(){
    return <>
        <aside className={styles.container_}>

            <SideNav />
            <Content />

        </aside>
    </>
}