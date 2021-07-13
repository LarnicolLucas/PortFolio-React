import styles from './portfolio.module.sass'
import Link from 'next/link'

export default function Card(props){
    return <>
        <section className={styles.card_container}>

            <Link href={props.link}>

                <article className={styles.card}>
                    <figure className={styles.figure}>
                            <img className={styles.img} src={props.src}/>
                        
                    </figure>
                    <figcaption className={styles.figcaption}>
                        <p>{props.description}</p>
                    </figcaption>
                </article>

            </Link>

        </section>
    </>
}