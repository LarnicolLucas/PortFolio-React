import {useState, useEffect} from 'react'

import styles from './nav.module.sass'
import Fond from './fond.js'

export default function Nav(props){

    const [scrolled, setScrolled] = useState("");

    const scrollAction = (e)=> window.scrollY > 0 ? setScrolled(styles.scroll_nav) : setScrolled("")

    useEffect(()=> {
            window.addEventListener('scroll', scrollAction)
            return window.removeEventListener('scroll', scrollAction)
        }
    )

    return <>
        <header className={styles.container}>
            <nav className={`${styles.nav} ${scrolled}`}>

                <figure className={styles.figure}>
                    <Fond />
                </figure>

            </nav>
        </header>
    </>
}