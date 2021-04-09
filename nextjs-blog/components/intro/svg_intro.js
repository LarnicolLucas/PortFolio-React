import styles from './svg_intro.module.css'
import  {gsap} from 'gsap'
import {useRef, useEffect} from 'react'

export default function SVGIntro(props){

    const img_dom_element = useRef();

    useEffect(()=> {
        if(props.anime === undefined) return ;
        props.animation(img_dom_element.current, props.anime)
    }, [props.anime])

    return <>

        <img 
            ref={img_dom_element}
            src={props.src} 
            className = {styles.svg} 
            style={{left: props.posX+"px", top: props.posY+"px"}}
        />

    </>
}