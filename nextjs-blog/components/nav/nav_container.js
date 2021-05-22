import styles from './nav_container.module.sass'



export default function nav_container(props){
    return <>
        <nav className={styles.nav_container}>
            <figure className={styles.figure}>
                <img src="/images/logo.svg" className={styles.img}/>
            </figure>
            <section className={styles.link_container}>
                <a>Contact</a>
                <a>About</a>
            </section>
        </nav>
    </>
}