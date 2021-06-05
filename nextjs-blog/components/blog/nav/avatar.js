import styles from './avatar.module.sass'

export default function Avatar(props){
    return <>
        <section className={styles.container_}>
            <figure className={styles.image+" "+styles["is-64x64"]+" "+styles.reset}>
                <img className={styles["is-rounded"]} src="/images/face/total.svg" />
            </figure>
        </section>

    </>
}