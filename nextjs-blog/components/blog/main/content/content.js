import styles from './content.module.sass'
import Article from './article/article.js'

import NewArticle from '../newArticle/newArticle.js'

export default function Content(props){

    const test = props.newArticle ? <NewArticle /> :
    <Article 
        src="/images/blog/articles/0.jpg"
        tag="CodeDiary"
        title="The day where i code my own BLOG... And everything goes fine"
        date="10/12/2012"
        author={ {
            name: "Lucas Larnicol",
            img: "/images/face/total.svg"
        } }
    />;
    return <>
        <section className={styles.container_}>
            {test}
        </section>
    </>
}