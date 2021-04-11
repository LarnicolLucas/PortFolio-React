import SVGIntro from './svg_intro.js'
import React, {useState} from 'react'
import styles from './svg_intro_container.module.css'


export default function containe_SVG() {

    const [posX, setPosX] = useState(0);
    const [posY, setPosY] = useState(0);

    const givePos = (e) => {
        const convert = (value) => (value/50)
        const newPosX = convert(e.clientX);
        const newPosY = convert(e.clientY);
        setPosY(newPosY)
        setPosX(newPosX)
    }

    return(
        <section onMouseMove={givePos} className={styles.container_intro}>
            <figure className={styles.animeLogo}>
                <SVGIntro src="/images/la.svg" posX={-2*posX}></SVGIntro>
                <SVGIntro src="/images/left.svg" posX={posX} posY={posY}></SVGIntro>
                <SVGIntro src="/images/right.svg" posX={-posX} posY={-posY}></SVGIntro>
                <SVGIntro src="/images/slash.svg" posX={(-1.5) * posX} posY={1.7 * posY}></SVGIntro>
                <SVGIntro src="/images/lu.svg" posX={0.8* posX}></SVGIntro>
            </figure>
        </section>
    )

}