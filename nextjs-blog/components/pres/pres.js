import {useState, useEffect, useRef} from 'react'
import styles from './pres.module.sass'
import { gsap } from 'gsap'

export default function pres(props){

    const [scrollY, setScrollY] = useState(0);

    const elem = useRef();

    const handleScroll = () => {

        const rect_elem = elem.current.getBoundingClientRect()
        const offset_in = 300;
        const scroll_at_element = rect_elem.y < offset_in ? true : false;

        const scrolPos = window.scrollY.toFixed(0);
        const step = 40;
        const pos = (scrolPos / step).toFixed(0)

        let res = { pos: pos} ;
        if(scroll_at_element) return gsap.to(res, {duration: 0.5, pos: res.pos * step, onUpdate: ()=> pos * step == scrollY ? null : setScrollY(res.pos)})
        
    };

    useEffect( ()=> {

        window.addEventListener("scroll", handleScroll);

        return () => window.removeEventListener("scroll", handleScroll)

    });

    return <>
        <div ref={elem} className={styles.container}> {scrollY} </div>
    </>
}