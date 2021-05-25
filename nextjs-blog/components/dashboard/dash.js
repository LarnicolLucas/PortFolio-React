import styles from './dash.module.sass'
import glass from './glass.module.sass'
import Sidenav from './sidenav/sidenav.js'
import Content from './content/content.js'

export default function Dash(prop){
    return <>
        <section className={`${styles.container} ${glass.glass}`}>
            <aside className={styles.sideNav}>
                <Sidenav />
            </aside>
            <article className={styles.content}>
                <Content />
            </article>
        </section>
    </>
}