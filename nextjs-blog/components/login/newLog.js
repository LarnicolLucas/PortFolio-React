import styles from './login.module.sass'

export default function newLog(props){

    
    return <>
        <div className={styles.button} onClick={props.clicked}>

            {props.text}

        </div>
    </>
}