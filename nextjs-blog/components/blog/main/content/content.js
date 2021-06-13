import {useState, useEffect} from 'react'
import styles from './content.module.sass'
import Article from './article/article.js'

import ReadArticle from './readArticle/readArticle.js'

import NewArticle from './newArticle/newArticle.js'
import ApiCallGet from '../../apiCallGet'

import Loader from '../../../utils/loader/loader.js'

export default function Content(props){

    const [loader, setLoader] = useState(<Loader />);

    const handleChangeContent = (selector) => props.handleChangeContent(selector);

    const [articleDatas, setArticleDatas] = useState([]);

    const mapListArticle = (list) => list.map(el=> <Article 
        key={el._id} 
        data={el} 
        handleChangeContent={handleChangeContent}
    />);

    const createArticles = (list, tag) => {
        if(tag === "") return mapListArticle(list);
        return mapListArticle(list.filter(el=> el.tag === tag));
    };

    const createReadeArticles = (list, id) => <ReadArticle 
            color={props.color} 
            data={list.filter(el => el._id == id)[0]} 
            handleChangeContent={handleChangeContent}
        />


    const createNewArticle = (object) => <NewArticle handleChangeContent={handleChangeContent} updateArticle={object}/> 

    const selectContent = () => {

        if(props.contentElements.home.active) return createArticles(articleDatas, props.contentElements.home.filter);
        if(props.contentElements.read.active) return createReadeArticles(articleDatas, props.contentElements.read.id);
        if(props.contentElements.write.active) return createNewArticle({active: false, id: null});
        if(props.contentElements.update.active) return createNewArticle({active: true, id: props.contentElements.update.id});

    };

    const content = selectContent();

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
    }, []);

    return <>
        <section className={styles.container_}>
            {loader}
            {content}
        </section>
    </>
}