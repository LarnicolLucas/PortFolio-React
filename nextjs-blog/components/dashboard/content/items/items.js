import styles from "./items.module.sass";
import LoadBar from "./loadbar.js"

export default function Item(props){

    const list = [
        {id: 0, name: "React", value: 90},
        {id: 1, name: "Vue", value: 80},
        {id: 2, name: "CSS", value: 75},
        {id: 3, name: "NextJs", value: 60},
        {id: 4, name: "Node", value: 75},
        {id: 5, name: "SQLServer", value: 55},
        {id: 6, name: "MongoDB", value: 30}
    ].map(el => <div key={el.id} className={styles.containerDiv}> 
        <article className={styles.article}>
            <p className={styles.p}>{el.name}</p>
            <p className={styles.p}>{el.value}%</p> 
        </article>
        <LoadBar value={el.value}/>
    </div>)
    return<>
        <section className={styles.container}>

            {list}

        </section>
    </>
}