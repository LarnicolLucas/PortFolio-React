import styles from './article.module.sass'
import Author from './author.js'

export default function Article(props){

    const styleTag = {
        color: "#81878B"
    };

    const toUpperFirst = (string) => string.charAt(0).toUpperCase() + string.slice(1);

    return <>
        <article className={styles.container_} onClick={()=> props.readArticle(props.data._id)}>
            
            <h5 className={styles.title_}>

                {props.data.title}

            </h5>

            <section className={styles.container_2} >

                <figure className={styles.figure_}>

                    <img className={styles.img_} src={props.data.src} />

                </figure>

                <figcaption className={styles.figcaption_}>

                    <p style={styleTag} className={styles.tag_}>
                        {toUpperFirst(props.data.tag)}
                    </p>

                    <Author date={props.data.date} name={props.data.name} img={props.data.img}/>
                </figcaption>
            </section>


        </article>
    </>
}