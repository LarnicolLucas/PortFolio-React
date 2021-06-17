import styles from './login.module.sass'

export default function PasswordInput(props){
    return <>
        <section className={styles.container}>
            <figure className={styles.figure}>
                <img className={styles.img} src="/images/login/lock.svg" />
            </figure>
            
            <input className={styles.input} type="password" placeholder="Password"/>
        </section>
    </>
}