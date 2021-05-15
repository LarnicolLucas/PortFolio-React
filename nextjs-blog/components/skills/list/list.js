import styles from './list.module.sass'


export default function List(props){
    return <>
        <article className={styles.container}>
            <figure className={styles.figure}>
                <img src={props.src}/>
            </figure>
            <p className={styles.text}>{props.name}</p>
        </article>
    </>
}