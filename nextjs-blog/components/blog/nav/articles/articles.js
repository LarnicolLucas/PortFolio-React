import styles from './articles.module.sass'

export default function Articles(props){

    const underlineArray = [
        props.data.title.slice(0, props.data.index),
        props.data.title.slice(props.data.index, props.data.index+props.data.lengthWord),
        props.data.title.slice(props.data.index+props.data.lengthWord, props.data.title.length),
    ];

    const articleClicked = () => {
        const selector = {
            home: {
                active: false,
                filter: ""
            },
            read: {
                active: true,
                id: props.data._id
            },
            write: {
                active: false
            },
            update: {
                active: false,
                id: null
            },
            refresh: false
        };
        props.handleChangeContent(selector);
    }

    return <>
        <article className={styles.container_} onMouseDown={articleClicked}>
            <figure className={styles.figure_}>
                <img src={props.data.src} className={styles.img_}/>
            </figure>
            <figcaption className={styles.figcaption_}>
                <p className={styles.p_}>

                    {underlineArray[0]}

                    <span className={styles.word_}>

                        {underlineArray[1]}
                    </span>
                    {underlineArray[2]}
                </p>
            </figcaption>
        </article>
    </>
}