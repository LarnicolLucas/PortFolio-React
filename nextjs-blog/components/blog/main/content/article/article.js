import styles from './article.module.sass'
import Author from './author.js'

export default function Article(props){

    const styleTag = {
        color: "#81878B"
    };

    const toUpperFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return <>
        <article className={styles.container_} onClick={()=> props.readArticle(props.data._id)}>

            <figure className={styles.figure_}>

                <img className={styles.img_} src={props.data.src} />

            </figure>

            <figcaption className={styles.figcaption_}>

                <p style={styleTag} className={styles.tag_}>
                    {toUpperFirst(props.data.tag)}
                </p>

                <h5>

                    {props.data.title}

                </h5>

                <Author date={props.data.date} name={props.data.name} img={props.data.img}/>
            </figcaption>


        </article>
    </>
}