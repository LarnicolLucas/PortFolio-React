import styles from './blog.module.sass'
import Layout from '../components/layout'
import Head from 'next/head'

import Nav from '../components/blog/nav/nav.js'

export default function index(props){

  return <>
        <Layout>
            <Head>
                <title>Blog</title>
            </Head>
            <Nav />
        </Layout>
    </>
}