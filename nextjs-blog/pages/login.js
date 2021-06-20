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

    const [validPassword, setValidPassword] = useState(false);
    const [identicalPassword, setIdenticalPassword] = useState(false)

    const handleLogin = (login) => setLogin(login);

    const handlePasswordLog= (password, helpList) => {
        setPasswordConfirm(password);
    };

    const handlePasswordFirstLog = (password, helpList) => {
        setPassword(password);
        setHelp(helpList);
        setHelpActive(true);
        setValidPassword(helpList.filter(el => el.valid).length === 4 ? true : false)
    };

    const handlePasswordFirstLogConfirm = (passwordEvent, helpList) => 
        passwordEvent === password ? 
        setIdenticalPassword(true) : 
        setIdenticalPassword(false)
    ;

    const handleCreateNewUser= (bol) => setFirstLog(bol);

    const handleSend= async () => {

        try {
            if(firstLog){

                const response = await ApiCallPost(login, password, true);

                console.log(response)

                if(response.error) { 
                    setError(response.message)
                }else {
                    setError("");
                    setFirstLog(false);
                    setPassword("");
                    setIdenticalPassword(false);
                    setHelpActive(false)

                }       

            } else {
                const response = await ApiCallPost(login, password, false);
            }
        }catch(err){
            console.log(err)
        }
    };

    const imgValid = "/images/login/valid.svg";
    const imgNotValid = "/images/login/unvalid.svg";

    const Log = <>
        <Login handleLogin={handleLogin}/>
        <Password placeholder={"Password"} listHelp={listHelp} handlePassword={handlePasswordLog}/>
        <NewLog text={"Login Now"} clicked={handleSend} active={true} />
        <Create clicked={handleCreateNewUser}/>
    </>;

    const NewUser = <>
        <Login handleLogin={handleLogin}/>
        <section className={styles.containerValidation} >
            <Password placeholder={"Create Password"} listHelp={listHelp} handlePassword={handlePasswordFirstLog}/>
            <figure className={styles.figureValidation}>
                <img src={validPassword && helpActive ? imgValid : imgNotValid} />
            </figure>
        </section>
        <section className={styles.containerValidation} >
            <Password placeholder={"Confirm Password"} listHelp={listHelp} handlePassword={handlePasswordFirstLogConfirm}/>
            <figure className={styles.figureValidation}>
                <img src={validPassword && identicalPassword && helpActive ? imgValid : imgNotValid} />
            </figure>
        </section>
        <NewLog text={"Create User"} clicked={handleSend} active={validPassword && identicalPassword}/>
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