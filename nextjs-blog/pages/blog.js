import {useState, useEffect} from 'react'

import styles from './blog.module.sass'
import Layout from '../components/layout'
import Head from 'next/head'

import Nav from '../components/blog/nav/nav.js'
import Main from '../components/blog/main/main.js'
import Box from '../components/blog/main/sideNav/box/box.js'

import ApiCallGet from '../components/blog/apiCallGet'

export default function index(props){

    const color= "#4A9FCD";

    //data flow handle by this page (change to do)

    const [datas, setDatas] = useState([]);

    //content selector :

    const selector = {
        home: {
            active: true,
            filter: ''
        },
        read: {
            active: false,
            id: null
        },
        write: {
            active: false
        },
        update: {
            active: false,
            id: null
        },
        refresh: false
    }

    const [contentElements, setContentElements] = useState(selector);
    const handleChangeContent = (selector) => setContentElements(selector);

    useEffect(async ()=> {
        try{
            const res = await ApiCallGet("allArticles");
            setDatas(res);
        }catch(err){
            console.log(err)
        }
    }, [contentElements.refresh])
    

  return <>
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <main className={styles.background_}>

                <section className={styles.container_}>

                    <Nav 
                        color={color} 
                        datas={datas}
                        handleChangeContent={handleChangeContent}
                    />
                    <Main 
                        color={color}
                        handleChangeContent={handleChangeContent}
                        contentElements={contentElements}
                        datas={datas}
                    />
                    <aside className={styles.box_container}>
                        <Box 
                            color={color}
                            handleChangeContent={handleChangeContent}
                        />
                    </aside>

                </section>

            </main>
        </Layout>
    </>
}