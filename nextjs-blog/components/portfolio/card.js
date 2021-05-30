import styles from './portfolio.module.sass'
import Link from 'next/link'

export default function Card(props){
    return <>
        <section className={styles.card_container}>

            <Link href={props.link}>

                <article className={styles.card}>
                    <figure className={`${styles.face} ${styles.front}`}>
                            <img className={styles.img} src={props.src}/>
                        
                    </figure>
                    <figcaption className={`${styles.face} ${styles.back}`}>
                        <p className={styles.text}>{props.description}</p>
                    </figcaption>
                </article>

            </Link>

        </section>
    </>
}