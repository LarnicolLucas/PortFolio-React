import {useState, useEffect, useRef} from 'react'
import styles from './pres.module.sass'
import { gsap } from 'gsap'
import Svg from '../intro/svg_intro.js'

export default function pres(props){

    const elem = useRef();

    const options_scroll_observer = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px"
    };

    const anime = (el)=> gsap.to(el, {x: 100, duration: 1, ease: "elastic.out(1, 0.3)"});
    const anime2 = (el)=> gsap.to(el, {x: 0, duration: 1});

    const intersectionFunction = (entries, observer) => {
        entries.forEach(el => {
            if(el.intersectionRatio > options_scroll_observer.threshold) return anime(el.target)
            return anime2(el.target)
            
        })
    }

    useEffect( ()=> {
        const observer = new IntersectionObserver(intersectionFunction, options_scroll_observer);
        observer.observe(elem.current)

    });
    

    return <>
        <div ref={elem} className={styles.container}>
            <Svg src="/images/me.svg" />
        </div>
    </>
}