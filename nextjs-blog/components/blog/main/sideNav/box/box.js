import styles from './box.module.sass'

export default function Box(props){

    const color = {
        background: props.color
    };

    return <>
        <article className={styles.container_} style={color}>

            <section className={styles.containerBut}>

                <p className={styles.para}>Somthing on your mind ?</p>

                <button 
                    className={styles.button+" "+styles["is-rounded"]+" "+styles.button_}
                    onClick={() => props.askNewArticle(true)}
                >Write Article</button>

            </section>

            <figure className={styles.figure_}>
                <img className={styles.img_} src="/images/blog/illustration.svg" />
            </figure>

        </article>
    </>
}
