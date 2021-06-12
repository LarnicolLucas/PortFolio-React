import styles from './articles.module.sass'

export default function Articles(props){

    return <>
        <article className={styles.container_}>
            <figure className={styles.figure_}>
                <img src={props.data.src} className={styles.img_}/>
            </figure>
            <figcaption className={styles.figcaption_}>
                <p className={styles.p_}>
                    {props.data.title}
                </p>
            </figcaption>
        </article>
    </>
}