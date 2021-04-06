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

    const animeIn = (el)=> gsap.to(el, {x: 100, duration: 1, ease: "elastic.out(1, 0.3)"});
    const animeOut = (el)=> gsap.to(el, {x: 0, duration: 1});

    const createListOfSvg = (number_of_svg) => {

        const addRouteNameList = (list, number) => {
            const svg_name_type = "face";
            const route = "/images/face/";
            return list.concat({route :`${route}${svg_name_type + number}.svg`, id: number})
        };

        const recursiveFunction = (nb, iteration, res, fn) => iteration > nb ? res : recursiveFunction(nb, iteration + 1, fn(res, iteration), fn);

        return recursiveFunction(number_of_svg, 0, [], addRouteNameList)
    }

    const svg_rout_list = createListOfSvg(11);
    const svg_childs = svg_rout_list.map(el => <Svg key={el.id} src={el.route} />)

    const intersectionFunction = (entries, observer) => {
        entries.forEach(el => {
            if(el.intersectionRatio > options_scroll_observer.threshold) return animeIn(el.target)
            return animeOut(el.target)
            
        })
    }

    useEffect( ()=> {
        const observer = new IntersectionObserver(intersectionFunction, options_scroll_observer);
        observer.observe(elem.current)

    });
    

    return <>
        <div ref={elem} className={styles.container}>
            {svg_childs}
        </div>
    </>
}