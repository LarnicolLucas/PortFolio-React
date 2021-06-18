import styles from './login.module.sass'

export default function Help(props){

    const list = props.help.map(el=> <section key={el.id} className={styles.lineHelp}>
        <figure className={styles.img}>

            <img src={el.valid ? "/images/login/valid.svg" : "/images/login/unvalid.svg"} />

        </figure>
        <p className={styles.p}> {el.text} </p>
    </section>);

    return <>
        <section className={styles.containerHelp}>

            {props.active ? list : <></>}

        </section>
    </>
}