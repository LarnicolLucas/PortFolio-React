import styles from './svg_intro.module.css'
import  {gsap} from 'gsap'
import {useRef, useEffect} from 'react'

export default function SVGIntro(props){

    const img_dom_element = useRef();
    const randomCo = (min, max)=> Math.ceil((Math.random() * (max - min)) + min);

    const anim_params_in = {x: 0, y: 0, duration: 1.5, ease: "elastic.out(1, 0.3)"};
    const anim_params_out = {x: randomCo(700, -200), y: randomCo(500, 0) , duration: 1}

    const anime = (element, anim_params)=> gsap.to(element, anim_params);

    useEffect(()=> {
        if(props.anime === true){
            anime(img_dom_element.current, anim_params_in)
        } else if(props.anime === false){
            anime(img_dom_element.current, anim_params_out)
        }
    })

    return <>

        <img 
            ref={img_dom_element}
            src={props.src} 
            className = {styles.svg} 
            style={{left: props.posX+"px", top: props.posY+"px"}}
        />

    </>
}