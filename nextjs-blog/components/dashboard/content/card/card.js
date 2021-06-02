import styles from './card.module.sass'
import Badge from './badge.js'

export default function Card(props){

    const infos = [
        {id: 0, name: "Pro", score: props.score[0]},
        {id: 1, name: "Exp", score: props.score[1]},
        {id: 2, name: "Age", score: props.score[2]},
    ].map(el => <Badge 
        key={el.id} 
        name={el.name} 
        score={el.score}
    />)

    return <>
        <figure className={styles.figure}>

            <img style={{width: "80%", borderRadius: "50%"}} src={`/images/dashboard/users/${props.src}.jpg`}></img>

        </figure>
        <figcaption className={styles.figure}>
            <h5 style={{background: props.color}} className={styles.name}>{props.name}</h5>
        </figcaption>
        <p className={`${styles.container} ${styles.titre}`}>
            {props.title}
        </p>
        <section className={`${styles.container} ${styles.titre}`} >
            {infos}
        </section>
    </>
}