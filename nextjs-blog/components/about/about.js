import styles from './about.module.sass'

export default function Info(props){
    return <>
        <section className={styles.container}>

            <header>
                <h1 className={styles.title}>About</h1>
            </header>

            <figure className={styles.figure}>
                <img className={styles.img} src="/images/about/about.png" alt="picture Auteur"/>
            </figure>

            <figcaption>
                <p className={styles.description}>
                    Ma présentation
                </p>
            </figcaption>
            
        </section>
    </>
}