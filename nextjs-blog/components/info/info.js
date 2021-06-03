import styles from './info.module.sass'

export default function Info(props){
    return <>
        <article className={styles.parent}>
            <div className={styles.button}>About</div>
            <section className={styles.container}>

                <h3>{props.text.intro}</h3>
                <p>{props.text.detail}</p>
                <p>{props.text.front}</p>
                <p>{props.text.back}</p>

            </section>
        </article>
    </>
}