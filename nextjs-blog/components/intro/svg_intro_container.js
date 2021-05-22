import SVGIntro from './svg_intro.js'
import styles from './svg_intro_container.module.sass'


export default function containe_SVG(props) {

    return(
        <section className={styles.container_intro}>
            <figure className={styles.animeLogo}>
                <SVGIntro src="/images/la.svg" posX={-2*props.pos[0]}></SVGIntro>
                <SVGIntro src="/images/left.svg" posX={props.pos[0]} posY={props.pos[1]}></SVGIntro>
                <SVGIntro src="/images/right.svg" posX={-props.pos[0]} posY={-props.pos[1]}></SVGIntro>
                <SVGIntro src="/images/slash.svg" posX={(-1.5) * props.pos[0]} posY={1.7 * props.pos[1]}></SVGIntro>
                <SVGIntro src="/images/lu.svg" posX={0.8* props.pos[0]}></SVGIntro>
            </figure>
        </section>
    )

}