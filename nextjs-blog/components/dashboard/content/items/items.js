import styles from "./items.module.sass";
import LoadBar from "./loadbar.js"

export default function Item(props){

    const list = props.list.map((el,i) => <div key={i} className={styles.containerDiv}> 
        <article className={styles.article}>
            <p className={styles.p}>{el.name}</p>
            <p className={styles.p}>{el.value}%</p> 
        </article>
        <LoadBar color={props.color} value={el.value}/>
    </div>)
    return<>
        <section className={styles.container}>

            {list}

        </section>
    </>
}