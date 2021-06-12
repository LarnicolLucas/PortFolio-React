import {useState, useEffect} from 'react'
import styles from './content.module.sass'
import Article from './article/article.js'

import ReadArticle from './readArticle/readArticle.js'

import NewArticle from './newArticle/newArticle.js'
import ApiCallGet from '../../apiCallGet'

import Loader from '../../../utils/loader/loader.js'

export default function Content(props){

    const [readPage, setReadPage] = useState(0);
    const [updateArticle, setUpdateArticle] = useState({active: false, id: null});

    const readArticle = (id) => {
        setReadPage(id)
        props.changeFilter(false, 0);
    };

    const redirectionAfterAction = () => {

        props.changeFilter(true, "");
        props.askNewArticle(false);
    };

    const askUpdateArticle = (id) => {
        setUpdateArticle({active: true, id: id})
        props.askUpdateArticle(true);
    };

    const [articleDatas, setArticleDatas] = useState([]);

    const mapListArticle = (list) => list.map(el=> <Article key={el._id} data={el} readArticle={readArticle}/>);

    const articles = props.tagFilter.tag != "" ?
        mapListArticle(articleDatas.filter(el=> el.tag === props.tagFilter.tag)) :
        mapListArticle(articleDatas);

    const readArticles = <ReadArticle 
        color={props.color} 
        data={articleDatas.filter(el => el._id === readPage)[0]} 
        changeFilter={redirectionAfterAction}
        askUpdateArticle={askUpdateArticle}
    />

    const [loader, setLoader] = useState(<Loader />);

    const test = props.newArticle.active ? 
        props.newArticle.new_ ?
        <NewArticle changeFilter={redirectionAfterAction} updateArticle={{active: false, id: null}}/> :
        <NewArticle changeFilter={redirectionAfterAction} updateArticle={updateArticle}/> :
    props.tagFilter.active ?
        articles :
        readArticles
    ;   


    useEffect(async ()=> {
        try {
            setLoader(<Loader />);
            const res = await ApiCallGet("allArticles");
            setLoader("");
            setArticleDatas(res);
            props.upStateDatas(res)

        }catch(err){
            console.log(err)
        }
    }, [props.newArticle, props.tagFilter]);

    return <>
        <section className={styles.container_}>
            {loader}
            {test}
        </section>
    </>
}