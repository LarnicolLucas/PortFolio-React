import styles from './readArticle.module.sass'
import Author from '../article/author.js'

export default function Read(props){

    return <>
        <article className={styles.container_}>
        
            <h1 className={styles.title_}> {props.data.title} </h1>

            <figure className={styles.figure_}>
                <img className={styles.img_} src={props.data.src} />
            </figure>
            <Author style={{justifyContent: "right", paddingRight: "3%"}} author={props.data.author} date={props.data.date}/>
            
            <p className={styles.para_}>{props.data.content}</p>

            <section className={styles.buttons_} >

                <button className={styles["button"]+" "+styles["is-outlined"]}>Delete</button>
                <button style={{background: props.color}} className={styles["button"]}>Modify</button>

            </section>
            

        </article>
    </>
}