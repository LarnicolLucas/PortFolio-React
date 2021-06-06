import {useState, useEffect} from 'react'
import styles from './content.module.sass'
import Article from './article/article.js'

import ReadArticle from './readArticle/readArticle.js'

import NewArticle from './newArticle/newArticle.js'
import ApiCallGet from '../../apiCallGet'

export default function Content(props){

    

    const [readPage, setReadPage] = useState(0);
    const readArticle = (id) => {
        props.changeFilter(false, 0);
        setReadPage(id)}

    const [articleDatas, setArticleDatas] = useState([]);

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

    useEffect(async ()=> {
        try {
            const res = await ApiCallGet("allArticles");

            setArticleDatas(res);

        }catch(err){
            console.log(err)
        }
    });

    return <>
        <section className={styles.container_}>
            {test}
        </section>
    </>
}