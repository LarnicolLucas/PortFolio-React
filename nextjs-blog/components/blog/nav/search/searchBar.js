import styles from './searchBar.module.sass'
import search from './regex.js'

import {useState} from 'react'

import Article from '../articles/articles.js'

export default function SearchBar(props){
    const styleColor= {
        background: props.color
    };
    
    const [articles, setArticles] = useState([]);

    const mapListArticle = (list) => list.map(el=> <Article key={el._id} data={el} />);

    const handleChange = (e) => {
        const list = props.datas.filter(el => search(el.title, e.target.value).bol)
        .map(el => Object.assign({}, el, {index: search(el.title, e.target.value).index, lengthWord: e.target.value.length}));
        setArticles(mapListArticle(list))
    };

    const clear = () => setArticles([])

    return <>
        <article className={styles.container_}>
            <input 
                className={styles.input_} 
                type="text" placeholder="Search Article"
                onChange={handleChange}
                onBlur={clear}
            />
            <figure style={styleColor} className={styles.figure_} >

                <img src='/images/blog/search.svg' className={styles.img_} /> 

            </figure>

            <section className={styles.articles}>

                {articles}

            </section>

        </article>
    </>
}