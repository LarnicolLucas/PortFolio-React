import styles from './logo.module.sass'
import {useRef, useEffect} from 'react'
import gsap from 'gsap'

import Animate from '../animation.js'

export default function logo(props){

    const fond = useRef();
    const svg = useRef();

    const animFond = (bol)=> bol ? 
        gsap.to(fond.current, {x: -25, duration: 1, ease: "expo.out"}) :
        gsap.to(fond.current, {x: 0, duration: 1, ease: "expo.out"})
    ;

    const animSvg = (bol)=> bol ? 
        gsap.to(svg.current, {x: 25, duration: 1, ease: "expo.out"}) :
        gsap.to(svg.current, {x: 0, duration: 1, ease: "expo.out"})
    ;

    useEffect( ()=> {
        animFond(props.trig);
        animSvg(props.trig);
    });

    //<Animate dur="1s" path0={svgPath0} path1={svgPath1} target="fond0_0"/>

    return <>
        <figure className={styles.container}>
            
            <img src="images/skills/fond.svg" className={styles.svgs} ref={fond}/>
            <img src={props.src} className={styles.svgs} ref={svg}/>
            <img src="images/skills/fond.svg" className={styles.hide}/>
    
        </figure>
    </>
}