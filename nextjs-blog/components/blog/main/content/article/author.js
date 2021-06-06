import styles from './author.module.sass'


export default function author(props){

    return <>
        <article style={props.style} className={styles.container_}>

                <img className={styles.img_} src={props.img} />

            <figcaption className={styles.figcaption_}>
                <h5 className={styles.title}> {props.name} </h5>
                <p className={styles.date}>{props.date}</p>
            </figcaption>
        </article>
    </>
}