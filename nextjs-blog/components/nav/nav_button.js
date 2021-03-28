import styles from './nav_button.module.sass'

export default function nav_button(props){
    return <>
        <div className={styles.nav_button} > 
            <a>{props.titre}</a>
        </div>
    </>
}