import styles from './blog.module.sass'
import Layout from '../components/layout'
import Head from 'next/head'

import Nav from '../components/blog/nav/nav.js'
import Main from '../components/blog/main/main.js'

export default function index(props){

    const color= "#4A9FCD";
    

  return <>
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <main className={styles.background_}>

                <section className={styles.container_}>

                    <Nav color={color}/>
                    <Main color={color}/>

                </section>

            </main>
        </Layout>
    </>
}