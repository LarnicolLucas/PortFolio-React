import styles from './portfolio.module.sass'
import Link from 'next/link'

export default function Card(props){
    return <>
        <Link href={props.link} passHref>
            <article className={styles.card} ref={props.refCompo}>
                
                <figure className={styles.figure}>
                    
                    <img className={styles.img} src={props.src}/>
                    
                </figure>
                <figcaption className={styles.figcaption}>
                    <p>{props.description}</p>
                </figcaption> 
            </article>
        </Link>
    </>
}