import {useRef, useEffect, useState} from 'react'

import matchesQuery from '../utils/matchesQuery/matches.js'

import createObserver from '../utils/domObserver.js'

import styles from './block_institut.module.sass'

export default function Block_institut(props) {

    const [trig, setTrig] = useState("");
    const matches = matchesQuery(props.size_responsive)

    const options_scroll_observer = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px"
    };

    const block = useRef();

    const animIn = () => setTrig(styles.appear);
    const animOut = () => setTrig("")

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
            >
                <h3> {props.label} </h3>
                <figure className={styles.figure}>
                    <img src={props.src} alt={props.alt}/>
                </figure>
            </article>
        </>
    )
}