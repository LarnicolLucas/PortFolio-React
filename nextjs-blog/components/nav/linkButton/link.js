import styles from './style.module.sass'

export default function butLink(props){

    return <>
        <a className={styles.butLink} onClick={()=> props.aboutButtonClicked(true)} >{props.name}</a>
    </>
}