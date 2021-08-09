import SVGIntro from './svg_intro.js'
import styles from './svg_intro_container.module.sass'


export default function containe_SVG(props) {

    return(
        <section className={styles.container_intro}>
            <figure className={styles.animeLogo}>
                <figcaption className={styles.caption} style={
                    {
                        top: 0.5*props.pos[0] - 70+"px",
                        left: -0.5*props.pos[1]+"px"
                    }}>
                    <h1>Larnicol</h1>
                </figcaption>
                <SVGIntro src="/images/left.svg" posX={props.pos[0]} posY={props.pos[1]}></SVGIntro>
                <SVGIntro src="/images/right.svg" posX={-props.pos[0]} posY={-props.pos[1]}></SVGIntro>
                <SVGIntro src="/images/slash.svg" posX={(-1.5) * props.pos[0]} posY={1.7 * props.pos[1]}></SVGIntro>
                <figcaption className={styles.caption} style={
                    {
                        right: 0.3*props.pos[0]+"px",
                        bottom: -0.5*props.pos[1]+"px"
                    }}>
                    <h1>Lucas</h1>
                </figcaption >
            </figure>
        </section>
    )

}