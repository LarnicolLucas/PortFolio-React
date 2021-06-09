import styles from './author.module.sass'


export default function author(props){

    const dateFormat = (raw) => {

        const ymd = raw.split("T");
        const array = ymd[0].split("-")

        return `${array[2]}/${array[1]}/${array[0]}`
    }

    return <>
        <article style={props.style} className={styles.container_}>

            <img className={styles.img_} src={props.img} />

            <figcaption className={styles.figcaption_}>
                <h5 className={styles.title}> {props.name} </h5>
            </figcaption>
        </article>
        <p className={styles.date}>{dateFormat(props.date)}</p>
    </>
}