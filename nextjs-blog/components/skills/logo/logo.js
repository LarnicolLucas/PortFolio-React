import styles from './logo.module.sass'
import {useRef, useEffect} from 'react'
import gsap from 'gsap'

export default function logo(props){

    const svgs = [
        {
            src: `images/skills/shadow.svg`, 
            anim_propreties : {opacity: 1, delay: props.anim_delay, y: 33, duration: 1, ease: "expo.out"},
            ref: useRef()
        },
        {
            src: `images/skills/${props.src}_block.svg`, 
            anim_propreties : {opacity: 1, delay: props.anim_delay + 0.15, y: 0, duration: 1, ease: "expo.out"},
            ref: useRef()
        },
        {
            src: `images/skills/${props.src}_top.svg`, 
            anim_propreties : {opacity: 1, delay: props.anim_delay + 0.3, y: 0, duration: 1, ease: "expo.out"},
            ref: useRef()
        }
    ];

    const images = svgs.map(el => <img src={el.src} className={styles.svgs} ref={el.ref}/>);

    const animSvg = (bol)=> bol ?
        svgs.map(el => gsap.to(el.ref.current, el.anim_propreties)) :
        svgs.map(el => gsap.to(el.ref.current, {opacity: 0, y: -33, duration: 0.5, ease: "expo.out"}))
    ;

    useEffect( ()=> {
        animSvg(props.trig)
    });

    return <>
        <figure className={styles.container}>
            
            {images}

            <img src={svgs[2].src} className={styles.hide}/>

        </figure>
    </>
}