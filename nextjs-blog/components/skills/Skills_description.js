import {useState} from 'react'

import styles from './Skills_description.module.sass'
import Logo from './logo/logo.js'

export default function skills_description(props){

    const [trig, setTrig] = useState(false);

    const list = props.list.map(el => <li key={el.id}> { el.name } </li>)

    return <>
            <article className={styles.skill} onMouseOver={()=> setTrig(true)} onMouseOut={()=> setTrig(false)}>

                <h3 className={styles.title}>{props.title}</h3>

                <Logo src={props.src} trig={trig}/>
                
                <ul>
                    {list}
                </ul>
            </article>
    </>

}