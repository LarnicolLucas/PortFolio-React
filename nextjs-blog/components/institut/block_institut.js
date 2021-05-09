import styles from './block_institut.module.sass'

export default function Block_institut(props) {

    return (
        <>
            <article className={styles.block} style={ {gridColumn: props.col, gridRow: props.row } }>
                <h3> {props.label} </h3>
                <figure>
                    <img src={props.src} alt={props.alt}/>
                </figure>
            </article>
        </>
    )
}