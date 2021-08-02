import styles from './style.module.sass'

export default function butLink(props){

    return <>
        <a className={styles.butLink} onClick={()=> props.buttonClicked(true)} >{props.name}</a>
    </>
}