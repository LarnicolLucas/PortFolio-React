import Head from 'next/head'
import Layout from '../components/layout'
import styles from './login.module.sass'

import Login from '../components/login/login.js'
import Password from '../components/login/password.js'
import NewLog from '../components/login/newLog.js'
import Create from '../components/login/create.js'

export default function LoginPage(){
    return (<>
        <Layout>
            <Head>
                <title>Login</title>
            </Head>

            <main className={styles.container}>

                <section className={styles.inputContainer}>

                    <figure className={styles.figure}>
                        <img className={styles.img} src='/images/login/users.svg' />
                    </figure>

                    <article className={styles.inputs}>

                        <Login />
                        <Password />
                        <NewLog />
                        <Create />

                    </article>
                </section>

            </main>
            


        </Layout>

    </>)
}