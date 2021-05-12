import styles from './Skills_description.module.sass'

export default function skills_description(props){

    const list = props.list.map(el => <li key={el.id}> { el.name } </li>)

    return <>
            <article className={styles.skill}>

                <h3 className={styles.title}>{props.title}</h3>
                <figure >
                    <img className={styles.title} src={props.src}/>
                </figure>
                
                <ul>
                    {list}
                </ul>


            </article>
    </>

}