import styles from './login.module.sass'

export default function PasswordInput(props){
    const clicked = () => props.clicked(true)
    return <>
        <aside className={styles.create} onClick={clicked}>
            Create account
        </aside>
    </>
}