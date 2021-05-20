import {useState, useEffect} from 'react'

import styles from './nav.module.sass'
import Fond from './fond.js'

export default function Nav(props){

    const [scrolled, setScrolled] = useState("");

    const scrollAction = (e)=> window.scrollY > 0 ? setScrolled(styles.scroll_nav) : setScrolled("")

    useEffect(()=> {
            window.addEventListener('scroll', scrollAction);
            return () => window.removeEventListener('scroll', scrollAction);
        }
    )

    return <>
        <section className={styles.block}>
            <nav className={`${styles.container} ${scrolled}`}>

                <h1 className={styles.title}>L'institut de Pauline</h1>

                <figure className={styles.figure}>
                        
                    <Fond />

                </figure>

            </nav>
        </section>
    </>
}