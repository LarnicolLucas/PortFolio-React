import {useState, useEffect, useRef} from 'react'
import styles from './pres.module.sass'
import Svg from '../intro/svg_intro.js'
import Row from '../utils/row.js'
import Col from '../utils/col.js'
import createObserver from '../utils/domObserver.js'

export default function pres(props){
    const container = useRef();

    const options_scroll_observer = {
        root: null,
        threshold: 0.9,
        rootMargin: "0px"
    };

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
    const svg_rout_list = createListOfSvg(11);

    const createChildList = (animation)=> svg_rout_list.map(el => <Svg 
        key={el.id} 
        src={el.route} 
        anime={animation}
    />);

    const [svg_childs, setSvgChilds] = useState(createChildList(false));

    const animeIn = () => setSvgChilds(createChildList(true));
    const animeOut = () => setSvgChilds(createChildList(false));

    const intersectionFunction = (entries, observer) => {
        //no Functional
        entries.forEach(el => {
            if(el.intersectionRatio > options_scroll_observer.threshold) return animeIn()
            return animeOut()
        })
    };

    useEffect( ()=> {
        createObserver(container.current, options_scroll_observer, intersectionFunction)
    }, []);
    

    return <>
        <div ref={container} className={styles.container}>
            <Row reset={true}>
                <Col size='2' />
                <Col>
                    <figure className={styles.figureContainer}>
                        {svg_childs}
                    </figure>
                </Col>
            </Row>
        </div>
    </>
}