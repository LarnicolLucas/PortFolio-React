
import Head from 'next/head'
import Layout from '../components/layout'
import SocialMediaContainer from '../components/institut/social_media/socialMediaContainer.js'

import styles from './institut.module.sass'

import Nav_institut from '../components/institut/nav_institut.js'
import Nav from '../components/institut/nav/nav.js'

export default function firstPost(){
    return (<>
        <Layout>
            <Head>
                <title>Institut de beauté</title>
            </Head>
            <Nav />

            <section className={styles.container_items}>
                <Nav_institut />
            </section>

            <article>
                <SocialMediaContainer />
            </article>

        </Layout>

    </>)
}