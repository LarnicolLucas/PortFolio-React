import styles from './svg_intro.module.css'

export default function SVGIntro(props){
    return <>

        <img src={props.src} className = {styles.svg} style={{left: props.posX+"px", top: props.posY+"px"}}/>

    </>
}