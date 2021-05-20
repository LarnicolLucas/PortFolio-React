import {useRef, useEffect, useState} from 'react'

import matchesQuery from '../utils/matchesQuery/matches.js'

import createObserver from '../utils/domObserver.js'

import styles from './block_institut.module.sass'

export default function Block_institut(props) {

    const [trig, setTrig] = useState("");
    const [svg_overed, setSvg_overed] = useState("")
    const [text_overed, setText_overed] = useState("")
    const matches = matchesQuery(props.size_responsive)

    const options_scroll_observer = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px"
    };

    const block = useRef();

    const animIn = () => setTrig(styles.appear);
    const animOut = () => setTrig("");

    const overedBlock = (bol) => {
        if(bol){
            setSvg_overed(styles.svg_over);
            setText_overed(styles.text_over);
        } else {
            setSvg_overed("");
            setText_overed("");
        }
    }

    useEffect( ()=> {
        createObserver(block.current, options_scroll_observer, animIn, animOut)
    }, []);

    const style = (matches) => matches ?
        {gridColumn: props.col, gridRow: props.row } :
        {gridColumn: 1, gridRow: props.responsive }

    return (
        <>
            <article 
                className={`${styles.block} ${trig}`} 
                style={ style(matches) }
                ref={block}
                onMouseOver={()=> overedBlock(true)}
                onMouseOut={()=> overedBlock(false)}
            >
                <h3> {props.label} </h3>
                <figure className={styles.figure}>
                    <img className={`${styles.svg} ${svg_overed}`} src={props.src} alt={props.alt}/>
                    <figcaption className={`${styles.svg} ${styles.text} ${text_overed}`}>
                        {props.description}
                    </figcaption>
                </figure>
            </article>
        </>
    )
}