import styles from './svg_intro.module.css'

export default function SVGIntro(props){
    return <>

    <div className = {styles.container}>
        <img src={props.src} className = {styles.svg} style={{left: props.posX+"px", top: props.posY+"px"}}/>
    </div>

</>
}