import styles from './card.module.sass'
import Badge from './badge.js'

export default function Card(props){

    const infos = [
        {id: 0, name: "IMD", score: props.score[0]},
        {id: 1, name: "VPS", score: props.score[1]},
        {id: 2, name: "PST", score: props.score[2]},
    ].map(el => <Badge 
        key={el.id} 
        name={el.name} 
        score={el.score}
    />)

    return <>
        <figure className={styles.figure}>

            <img style={{width: "80%"}} src="/images/face/total.svg"></img>

        </figure>
        <figcaption className={styles.figure}>
            <h5 className={styles.name}>Larnicol Lucas</h5>
        </figcaption>
        <p className={`${styles.container} ${styles.titre}`}>
            Web devellopement
        </p>
        <section className={`${styles.container} ${styles.titre}`} >
            {infos}
        </section>
    </>
}