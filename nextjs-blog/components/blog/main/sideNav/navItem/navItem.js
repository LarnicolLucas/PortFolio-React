import styles from './navItem.module.sass'

export default function NavItem(props){

    const styleSelected= {
        background: props.selected ? props.color : "#eee"
    }
    const styleSelectedDiv= {
        background: props.selected ? props.color : "none"
    }

    return <>
        <article className={styles.container_}>

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