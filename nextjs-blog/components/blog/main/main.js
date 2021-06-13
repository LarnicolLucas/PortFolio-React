import {useState} from 'react'
import styles from './main.module.sass'

import SideNav from './sideNav/sideNav.js'
import Content from './content/content.js'

export default function SideBar(props){

    const upStateDatas = (datas) => props.upStateDatas(datas);

    const handleChangeContent = (selector) => props.handleChangeContent(selector);

    return <>
        <section className={styles.container_}>

            <SideNav 
                color={props.color} 
                handleChangeContent={handleChangeContent}
            />
            <Content 
                upStateDatas={upStateDatas}

                color={props.color}
                handleChangeContent={handleChangeContent}
                contentElements={props.contentElements}

            />

        </section>
    </>
}