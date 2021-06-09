import {useState} from 'react'
import styles from './main.module.sass'

import SideNav from './sideNav/sideNav.js'
import Content from './content/content.js'

export default function SideBar(props){

    const [newArticle, setNewArticle] = useState({active: false, new_: false});
    const [tagFilter, setTagFilter] = useState({active: true, tag: ""});

    const askNewArticle = (bol) => setNewArticle({active: bol, new_: true});
    const askUpdateArticle = (bol) => setNewArticle({active: bol, new_: false});
    const changeFilter = (bol, tag) => setTagFilter({active: bol, tag: tag});

    return <>
        <section className={styles.container_}>

            <SideNav color={props.color} askNewArticle={askNewArticle} changeFilter={changeFilter}/>
            <Content 
                color={props.color} 
                askUpdateArticle={askUpdateArticle}
                newArticle={newArticle} 
                changeFilter={changeFilter} 
                tagFilter={tagFilter}
            />

        </section>
    </>
}