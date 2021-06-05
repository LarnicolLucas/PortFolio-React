import styles from './article.module.sass'
import Author from './author.js'

export default function Article(props){

    const styleTag = {
        color: "#81878B"
    };

    return <>
        <article className={styles.container_}>

            <figure className={styles.figure_}>

                <img className={styles.img_} src={props.data.src} />

            </figure>

            <figcaption className={styles.figcaption_}>

                <p style={styleTag} className={styles.tag_}>
                    {props.data.tag}
                </p>

                <h5>

                    {props.data.title}

                </h5>

                <Author date={props.data.date} author={props.data.author}/>
            </figcaption>


        </article>
    </>
}