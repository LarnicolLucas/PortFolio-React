import styles from './login.module.sass'

export default function PasswordInput(props){

    const changeValue = (e) => {

        const regexValidator = props.listHelp.map(el=> Object.assign({}, el, {valid: el.regex.test(e.target.value)}));
        props.handlePassword(e.target.value, regexValidator);
    };

    return <>
        <section className={styles.container}>
            <figure className={styles.figure}>
                <img src="/images/login/lock.svg" />
            </figure>
            
            <input 
                className={styles.input} 
                type="password" 
                placeholder={props.placeholder}
                onChange={changeValue}
            />
        </section>
    </>
}