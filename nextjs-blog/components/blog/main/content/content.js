import styles from './content.module.sass'
import Article from './article/article.js'

import NewArticle from './newArticle/newArticle.js'

export default function Content(props){

    const articleDatas = [{
        id:0,
        src:"/images/blog/articles/0.jpg",
        tag:"codeDiary",
        title:"The day where i code my own BLOG... And everything goes fine",
        date:"10/12/2012",
        author:{ 
            name: "Lucas Larnicol",
            img: "/images/face/total.svg"
        }      
    }]

    const articles = props.tagFilter != "" ?
        articleDatas.filter(el=> el.tag === props.tagFilter).map(el=> <Article key={el.id} data={el} />) :
        articleDatas.map(el=> <Article key={el.id} data={el} />) 

    const test = props.newArticle ? 
        <NewArticle /> :
        articles
    ;
    return <>
        <section className={styles.container_}>
            {test}
        </section>
    </>
}