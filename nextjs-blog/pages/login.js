import Head from 'next/head'
import Layout from '../components/layout'
import styles from './login.module.sass'

import {useState} from 'react'

import Login from '../components/login/login.js'
import Password from '../components/login/password.js'
import NewLog from '../components/login/newLog.js'
import Create from '../components/login/create.js'
import Help from '../components/login/help.js'

import ApiCallPost from '../components/login/apiCall/apiCallPost'

export default function LoginPage(){

    const listHelp = [
        {id: 0, text: "1 Uppercase letter", valid: false,  regex: /[A-Z]/},
        {id: 1, text: "1 Lowercas letter", valid: false, regex: /([a-z])/},
        {id: 2, text: "8 Characters", valid: false, regex: /[a-zA-Z\d]{8,}/},
        {id: 3, text: "1 Number", valid: false,  regex: /\d/ }
    ];

    const [login, setLogin] = useState("");
    const [password, setPassword] = useState("");
    const [passwordConfirm, setPasswordConfirm] = useState("");

    const [help, setHelp] = useState(listHelp);
    const [helpActive, setHelpActive] = useState(false);

    const [firstLog, setFirstLog] = useState(false);

    const [error, setError] = useState("");

    const handleLogin = (login) => setLogin(login)

    const handlePasswordLog = (password, helpList) => {
        setPassword(password);
    };

    const handlePasswordFirstLogConfirm = (password, helpList) => {
        setPasswordConfirm(password);
    };

    const handlePasswordFirstLog = (password, helpList) => {
        setPassword(password);
        setHelp(helpList);
        setHelpActive(true)
    };

    const handleCreateNewUser= (bol) => setFirstLog(bol);

    const handleSend= () => firstLog ? ApiCallPost(login, password, true) : ApiCallPost(login, password, false);

    const Log = <>
        <Login handleLogin={handleLogin}/>
        <Password placeholder={"Password"} listHelp={listHelp} handlePassword={handlePasswordLog}/>
        <NewLog text={"Login Now"} clicked={handleSend} />
        <Create clicked={handleCreateNewUser}/>
    </>;

    const NewUser = <>
        <Login handleLogin={handleLogin}/>
        <Password placeholder={"Create Password"} listHelp={listHelp} handlePassword={handlePasswordFirstLog}/>
        <Password placeholder={"Confirm Password"} listHelp={listHelp} handlePassword={handlePasswordFirstLogConfirm}/>
        <NewLog text={"Create User"} clicked={handleSend} />
    </>;


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

                        {firstLog ? NewUser : Log}

                    </article>
                    <article className={styles.help}>
                        <Help help={help} active={helpActive} />
                    </article>
                    <aside>
                        <p className={styles.error}>{error}</p>
                    </aside>
                </section>

            </main>
            


        </Layout>

    </>)
}