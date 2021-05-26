import Dash from './dash.js'

import styles from './dashboard.module.sass'

export default function Dashnoard(props){
    return <>
        <main className={styles.container}>
            <img style={{ top: "3%", left: "2%" }} className={styles.img} src="/images/dashboard/fond/0.svg" />
            <img style={{ top: "30%", left: "66%" }} className={styles.img} src="/images/dashboard/fond/1.svg" />
            <img style={{ top: "0%", left: "35%" }} className={styles.img} src="/images/dashboard/fond/2.svg" />
            <Dash />
        </main>
    </>
}