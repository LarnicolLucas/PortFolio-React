import styles from './navItem.module.sass'
import {useState} from 'react'

export default function NavItem(props){


    const styleSelected= {
        background: props.clicked ? props.color : "#eee"
    }
    const styleSelectedDiv= {
        background: props.clicked ? props.color : "none"
    }

    return <>
        <article className={styles.container_} onClick={()=> props.fnClicked(props.id)}>

            <section className={styles.containerImgText}>
                <figure className={styles.figure_} style={styleSelected}>
                    <img className={styles.img_} src={"/images/blog/icons/"+props.data.id+".svg"} />
                </figure>
                <h5>{props.data.name}</h5>
            </section>

            <div className={styles.divRounded} style={styleSelectedDiv}></div>

        </article>
    </>
}