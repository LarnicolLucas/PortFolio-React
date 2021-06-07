import {useState, useEffect} from 'react'
import styles from './content.module.sass'
import Article from './article/article.js'

import ReadArticle from './readArticle/readArticle.js'

import NewArticle from './newArticle/newArticle.js'
import ApiCallGet from '../../apiCallGet'

import Loader from '../../../utils/loader/loader.js'

export default function Content(props){

    const [readPage, setReadPage] = useState(0);
    const readArticle = (id) => {
        props.changeFilter(false, 0);
        setReadPage(id)}

    const [articleDatas, setArticleDatas] = useState([]);

    const mapListArticle = (list) => list.map(el=> <Article key={el._id} data={el} readArticle={readArticle}/>);

    const articles = props.tagFilter.tag != "" ?
        mapListArticle(articleDatas.filter(el=> el.tag === props.tagFilter.tag)) :
        mapListArticle(articleDatas);

    const test = props.newArticle ? 
        <NewArticle /> :
        props.tagFilter.active ?
            articles :
            <ReadArticle color={props.color} data={articleDatas.filter(el => el._id === readPage)[0]} />
    ;

    const [loader, setLoader] = useState(<Loader />)

    useEffect(async ()=> {
        try {
            setArticleDatas([]);
            setLoader(<Loader />);
            const res = await ApiCallGet("allArticles");
            setLoader("");
            setArticleDatas(res);

        }catch(err){
            console.log(err)
        }
    }, [props.tagFilter]);

    return <>
        <section className={styles.container_}>
            {loader}
            {test}
        </section>
    </>
}