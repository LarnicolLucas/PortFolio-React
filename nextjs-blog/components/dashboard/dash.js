import styles from './dash.module.sass'
import glass from './glass.module.sass'
import Sidenav from './sidenav/sidenav.js'
import Content from './content/content.js'

export default function Dash(prop){
    return <>
        <section className={`${styles.container} `}>
            <img style={{ top: "-10%", left: "2%" }} className={styles.img} src="/images/dashboard/fond/0.svg" />
            <img style={{ top: "15%", left: "80%" }} className={styles.img} src="/images/dashboard/fond/1.svg" />
            <img style={{ top: "-20%", left: "35%" }} className={styles.img} src="/images/dashboard/fond/2.svg" />
            <img style={{ top: "70%", left: "50%" }} className={styles.img} src="/images/dashboard/fond/0.svg" />
            <section className={`${styles.glassMorphFond} ${glass.glass}`}></section>
            <aside className={styles.sideNav}>
                <Sidenav />
            </aside>
            <article className={styles.content}>
                <Content />
            </article>
        </section>
    </>
}