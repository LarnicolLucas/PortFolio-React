import styles from './items.module.sass'
import {useEffect, useRef} from 'react'
import gsap from 'gsap'

export default function load(props){

    const loadBarDom = useRef();

    const style = {
        width: "50%",
        height: "7px",
        boxShadow: "2px 2px 2px #515151"
    };
    const styleBar = {
        width: `0%`,
        height: "100%",
        background: props.color
    };

    useEffect(()=> {
        gsap.fromTo(loadBarDom.current, {width: `0%`}, {width: `${props.value}%`, duration: 2, ease: "elastic.out( 1, 0.3)",})
    }, [props.value])


    return <>
        <article className={styles.containerLoad} style={style}>

            <div className={styles.containerLoad} style={styleBar} ref={loadBarDom}></div>

        </article>
    </>
}