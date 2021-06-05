import {useState} from 'react'
import styles from './main.module.sass'

import SideNav from './sideNav/sideNav.js'
import Content from './content/content.js'

export default function SideBar(props){

    const [newArticle, setNewArticle] = useState(false);
    const [tagFilter, setTagFilter] = useState("");

    const askNewArticle = (bol) => setNewArticle(bol);
    const changeFilter = (tag) => setTagFilter(tag);

    return <>
        <section className={styles.container_}>

            <SideNav color={props.color} askNewArticle={askNewArticle} changeFilter={changeFilter}/>
            <Content color={props.color} newArticle={newArticle} tagFilter={tagFilter}/>

        </section>
    </>
}