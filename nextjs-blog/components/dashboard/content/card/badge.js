import styles from './badge.module.sass'

export default function badge(props){

    return <>
        <article className={styles.container}>
            <p className={styles.name}> {props.name} </p>
            <p className={styles.score}> {props.score} </p>
        </article>
    </>
}