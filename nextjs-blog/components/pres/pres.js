import {useState, useEffect, useRef} from 'react'

import styles from './pres.module.sass'

import Svg from '../intro/svg_intro.js'
import Text_pres from './text_pres.js'
import Row from '../utils/row.js'
import Col from '../utils/col.js'

import createObserver from '../utils/domObserver.js'
import animationSvg from './animation_svg.js'
import animationText from './animation_text.js'

export default function pres(props){
    const container = useRef();

    //creation d'une liste avec les données de routes (src="face0")
    const createListOfSvg = (number_of_svg) => {

        const addRouteNameList = (list, number) => {
            const svg_name_type = "face";
            const route = "/images/face/";
            return list.concat({
                route :`${route}${svg_name_type + number}.svg`, 
                id: number
            })
        };

        const recursiveFunction = (nb, iteration, res, fn) => iteration > nb ? res : recursiveFunction(nb, iteration + 1, fn(res, iteration), fn);

        return recursiveFunction(number_of_svg, 0, [], addRouteNameList)
    };
    //enregitrement du tableau dans la variable svg_rout_list
    const svg_rout_list = createListOfSvg(13);

    //fonction de creation de JSX avec pour argument l'existance d'une animation (Bolean)
    const createChildList = (animation)=> svg_rout_list.map(el => <Svg 
        key={el.id} 
        src={el.route} 
        anime={animation}
        animation={animationSvg}
    />);

    //ecouteru d'état sur la liste JSX SVG
    const [svg_childs, setSvgChilds] = useState(createChildList(false));
    const [text, setText] = useState(<Text_pres animation={animationText} anime={false}/>)

    //mise à jour de l'état de l'animation (in - out)
    const animeIn = () => {setSvgChilds(createChildList(true)); setText(<Text_pres animation={animationText} anime={true}/>)};
    const animeOut = () => {setSvgChilds(createChildList(false)); setText(<Text_pres animation={animationText} anime={false}/>)};

    //parametre de l'observer
    const options_scroll_observer = {
        root: null,
        threshold: 0.8,
        rootMargin: "0px"
    };

    //à la création du composant UNIQUEMENT (...,[]) creation de l'observer (element, options, fnIn, fnOut)
    useEffect( ()=> {
        createObserver(container.current, options_scroll_observer, animeIn, animeOut)
    }, []);
    

    return <>
        <div ref={container} className={styles.container}>
            <Row reset={true} height={100}>
                <Col size='2' />
                <Col>
                    <figure className={styles.figureContainer}>
                        {svg_childs}
                    </figure>
                </Col>
                <Col align={"flex-end"}>
                    {text}
                </Col>
                <Col size='2' />
            </Row>
        </div>
    </>
}