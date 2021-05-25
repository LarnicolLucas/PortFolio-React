import Layout from '../components/layout'
import styles from './dashboard.module.sass'
import Dashboard from '../components/dashboard/dashboard.js'
import Head from 'next/head'



export default function firstPost(){
    return <>
        <Layout>
            <Head>
                <title>DashBoard</title>
            </Head>
            
            <Dashboard />

        </Layout>

    </>
}