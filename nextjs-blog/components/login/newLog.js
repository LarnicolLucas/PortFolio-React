import styles from './login.module.sass'

export default function newLog(props){

    const styleDisplay = props.active ?
        {display: "block" } :
        {display: "none" }
    
    return <>
        <div style={styleDisplay} className={styles.button} onClick={props.clicked}>

            {props.text}

        </div>
    </>
}