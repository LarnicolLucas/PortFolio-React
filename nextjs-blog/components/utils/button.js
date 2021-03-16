import styles from './button.module.sass'

export default function Bulma_button(props){

    return <>
            <button className={`${styles['button']} ${styles['is-large']} ${styles[props.color]}`}>{props.text}</button>
        </>
}