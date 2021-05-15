import {useState} from 'react'
import styles from './list.module.sass'


export default function List(props){
    const [effect, setEffect] = useState('')
    return <>
        <article 
            className={styles.container} 
            onMouseOver={()=> setEffect(styles.figure_over)} 
            onMouseOut={()=> setEffect('')}
        >
            <figure className={`${styles.figure} ${effect}`}>
                <img src={props.src}/>
            </figure>
            <p className={styles.text}>{props.name}</p>
        </article>
    </>
}