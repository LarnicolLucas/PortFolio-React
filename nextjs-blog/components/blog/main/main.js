import {useState} from 'react'
import styles from './main.module.sass'

import SideNav from './sideNav/sideNav.js'
import Content from './content/content.js'

export default function SideBar(props){

    const [newArticle, setNewArticle] = useState(false);
    const askNewArticle = (bol) => setNewArticle(bol);

    return <>
        <section className={styles.container_}>

            <SideNav color={props.color} askNewArticle={askNewArticle}/>
            <Content color={props.color} newArticle={newArticle}/>

        </section>
    </>
}