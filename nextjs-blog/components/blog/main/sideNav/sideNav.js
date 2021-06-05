import {useState} from 'react'

import styles from './sideNav.module.sass'
import NavItem from './navItem/navItem.js'
import Box from './box/box.js'

export default function SideBar(props){

    const askNewArticle = (bol) => props.askNewArticle(bol);
    const changeFilter = (tag) => props.changeFilter(tag);

    const items = [
        {id: 0, name: 'Home', tag: '', clicked: true},
        {id: 1, name: 'LifeStyle', tag: 'lifeStyle', clicked: false},
        {id: 2, name: 'CodeDiary', tag: 'codeDiary', clicked: false},
    ];

    const handleClickedItem = (id) =>{

        const newItems = items.map(el=> el.id === id ? 
            Object.assign({}, el, {clicked: true}) :
            Object.assign({}, el, {clicked: false})
        )

        return setList(createJSXList(newItems))
     };

    const createJSXList = (array) => array.map(el => <NavItem 
        key={el.id}
        id={el.id} 
        data={el}
        color={props.color} 
        clicked={el.clicked}
        fnClicked={handleClickedItem}
        askNewArticle={askNewArticle}
        changeFilter={changeFilter}
    />)

    const [list, setList] = useState(createJSXList(items));


    return <>
        <aside className={styles.container_}>

            <section className={styles.containerItem}>

                {list}

            </section>

            <Box color={props.color} askNewArticle={askNewArticle}/>

        </aside>
    </>
}