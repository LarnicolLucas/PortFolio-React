import styles from './login.module.sass'

export default function LoginInput(props){
    return <>
        <section className={styles.container}>
            <figure className={styles.figure}>
                <img src="/images/login/user.svg" />
            </figure>
            
            <input className={styles.input} placeholder="Login"/>
        </section>
    </>
}