import styles from './logo.module.sass'
import {useRef, useEffect, useState} from 'react'
import gsap from 'gsap'

import Fond from './fond.js'

export default function logo(props){

    const svg = useRef();
    const [trigFond, setTrigFond] = useState(false)

    const animSvg = (bol)=> bol ? 
        gsap.to(svg.current, {x: 25, duration: 1, ease: "expo.out"}) :
        gsap.to(svg.current, {x: 0, duration: 1, ease: "expo.out"})
    ;

    useEffect( ()=> {
        animSvg(props.trig);
    });

    return <>
        <figure className={styles.container} onMouseOver={()=> setTrigFond(true)}>
            
            <Fond  trig={trigFond} id={props.id}/>
            <img src={props.src} className={styles.svgs} ref={svg}/>
            <img src="images/skills/fond.svg" className={styles.hide}/>
    
        </figure>
    </>
}