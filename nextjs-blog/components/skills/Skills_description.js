import {useEffect, useState, useRef} from 'react'

import createObserver from '../utils/domObserver.js'
import styles from './Skills_description.module.sass'
import Logo from './logo/logo.js'
import List from './list/list.js'

export default function skills_description(props){

    const [trig, setTrig] = useState(false);
    const container= useRef()

    const list = props.list.map(el => <List key={el.id} name={el.name} src={el.src}/>);

    const options_scroll_observer = {
        root: null,
        threshold: 0.6,
        rootMargin: "0px"
    };

    const animeIn = ()=> setTrig(true);
    const animeOut = ()=> setTrig(false);

    useEffect(()=>
        createObserver(container.current, options_scroll_observer, animeIn, animeOut)
    , [])


    return <>
            <article ref={container} className={styles.skill}>

                <h3 className={styles.title}>{props.title} </h3>

                <section className={styles.logoContainer}>
                    <Logo src={props.src} trig={trig} id={props.id_logo} anim_delay={props.anim_delay}/>
                </section>
                
                
                <section className={styles.container_description}>
                    {list}
                </section>
            </article>
    </>

}