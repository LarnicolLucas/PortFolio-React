import Link from 'next/link'
import Head from 'next/head'
import Layout from '../components/layout'

import styles from './institut.module.sass'

import Nav_institut from '../components/institut/nav_institut.js'

export default function firstPost(){
    return (<>
        <Layout>
            <Head>
                <title>Institut de beauté</title>
            </Head>
            <h1>First Post</h1>
            <h2><Link href="/"><a>Back to home</a></Link></h2>

            <section className={styles.container_items}>
                <Nav_institut />
            </section>
        </Layout>

    </>)
}