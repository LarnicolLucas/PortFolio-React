import styles from './text_pres.module.sass'

const text_pres = (props) => {

    return <>
        <article className={styles.container}>
            <h3>Hello</h3>
            <p>I am Lucas. I have been programming since 2017. 
                I started by doing home automation with a Raspberry Pi. 
                I like to carry out projects with beautiful graphical interfaces and well-made software architecture.
                I am currently working in the electrical field and I want to change profession to do what I like: CODE.</p>
        </article>
    </>
}

export default text_pres