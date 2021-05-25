import Dash from './dash.js'

import styles from './dashboard.module.sass'

export default function Dashnoard(props){
    return <>
        <main className={styles.container}>
            <Dash />
        </main>
    </>
}