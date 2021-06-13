import styles from './box.module.sass'

export default function Box(props){

    const color = {
        background: props.color
    };

    const newArticleClicked = () => {
        const selector = {
            home: {
                active: false,
                filter: ""
            },
            read: {
                active: false,
                id: null
            },
            write: {
                active: true
            },
            update: {
                active: false,
                id: null
            }
        };
        props.handleChangeContent(selector);
    }

    return <>
        <article className={styles.container_} style={color}>

            <section className={styles.containerBut}>

                <p className={styles.para}>Somthing on your mind ?</p>

                <button 
                    className={styles.button+" "+styles["is-rounded"]+" "+styles.button_}
                    onClick={newArticleClicked}
                >Write Article</button>

            </section>

            <figure className={styles.figure_} onClick={newArticleClicked}>
                <img className={styles.img_+" "+styles.img1} src="/images/blog/illustration1.svg" />
                <img className={styles.img_+" "+styles.img0} src="/images/blog/illustration0.svg" />
            </figure>

        </article>
    </>
}
