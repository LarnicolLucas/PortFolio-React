import styles from './grid.module.sass'

export default function Grid(props){
    const classs = `${props.addClass} ${styles.grid}`

    const gridPropreties = {
        gridTemplateColumns: `repeat(${props.nb}, 1fr)`
    }
    return <>
        <section className={classs} style={gridPropreties}>
            {props.children}
        </section>
    </>
}