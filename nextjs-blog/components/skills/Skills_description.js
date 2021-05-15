import {useState} from 'react'

import styles from './Skills_description.module.sass'
import Logo from './logo/logo.js'
import List from './list/list.js'

export default function skills_description(props){

    const [trig, setTrig] = useState(false);

    const list = props.list.map(el => <List key={el.id} name={el.name} src={el.src}/>)

    return <>
            <article className={styles.skill}>

                <h3 className={styles.title}>{props.title} </h3>

                <section onMouseOver={()=> setTrig(true)} onMouseOut={()=> setTrig(false)}>
                    <Logo src={props.src} trig={trig} />
                </section>
                
                
                <ul>
                    {list}
                </ul>
            </article>
    </>

}