import {useState, useEffect, useRef} from 'react'
import styles from './pres.module.sass'
import { gsap } from 'gsap'
import Svg from '../intro/svg_intro.js'

export default function pres(props){

    const container = useRef();

    const options_scroll_observer = {
        root: null,
        threshold: 0.5,
        rootMargin: "0px"
    };

    const randomGSAP = gsap.utils.random(-200, 200, 5, true);

    const animeIn = (list_elements)=> list_elements.forEach(el => gsap.to(el.current, {x: 100, duration: 1, ease: "elastic.out(1, 0.3)"}) );
    const animeOut = (list_elements)=> list_elements.forEach(el => gsap.to(el.current, {x: 0, duration: 1}));

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
    const svg_dom_ref = svg_rout_list.map(el => useRef())
    const svg_childs = svg_rout_list.map(el => <Svg ref={svg_dom_ref[el.id]} key={el.id} src={el.route} />);


    const intersectionFunction = (entries, observer) => {
        //no Functional
        entries.forEach(el => {
            if(el.intersectionRatio > options_scroll_observer.threshold) return animeIn(svg_dom_ref)
            return animeOut(svg_dom_ref)
            
        })
    }

    useEffect( ()=> {
        const observer = new IntersectionObserver(intersectionFunction, options_scroll_observer);
        observer.observe(container.current)

    });
    

    return <>
        <div ref={container} className={styles.container}>
            {svg_childs}
            {console.log(svg_childs)}
        </div>
    </>
}