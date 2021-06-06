import {useState} from 'react'
import styles from './content.module.sass'
import Article from './article/article.js'

import ReadArticle from './readArticle/readArticle.js'

import NewArticle from './newArticle/newArticle.js'

export default function Content(props){

    //props.tagFilter , props.newArticle , readArticle

    const [readPage, setReadPage] = useState(0);
    const readArticle = (id) => {
        props.changeFilter(false, 0);
        setReadPage(id)}

    const articleDatas = [{
        id: 0,
        _id: "B0X4f4g6",
        src: "/images/blog/articles/0.jpg",
        tag: "codeDiary",
        title: "The day where i code my own BLOG... And everything goes fine",
        date: "10/12/2012",
        name: "Lucas Larnicol",
        img: "/images/face/total.svg",
        content: "Contenu ici. Lorem BLABLABAL"      
    }];

    const mapListArticle = (list) => list.map(el=> <Article key={el.id} data={el} readArticle={readArticle}/>);

    const articles = props.tagFilter.tag != "" ?
        mapListArticle(articleDatas.filter(el=> el.tag === props.tagFilter.tag)) :
        mapListArticle(articleDatas);

    const test = props.newArticle ? 
        <NewArticle /> :
        props.tagFilter.active ?
            articles :
            <ReadArticle color={props.color} data={articleDatas.filter(el => el._id === readPage)[0]} />
    ;
    return <>
        <section className={styles.container_}>
            {test}
        </section>
    </>
}