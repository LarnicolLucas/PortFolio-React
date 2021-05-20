import matchesQuery from '../matchesQuery/matches.js'
import styles from './grid.module.sass'

// props => addClass / nb / nb_responsive / responsive_size /

export default function Grid(props){

    const matches = matchesQuery(props.responsive_size)

    const classs = `${props.addClass} ${styles.grid}`

    const gridPropreties = (noResponsive) => noResponsive ? 
        {gridTemplateColumns: `repeat(${props.nb}, 1fr)`} :
        {gridTemplateColumns: `repeat(${props.nb_responsive}, 1fr)`}
    
    return <>
        <section className={classs} style={gridPropreties(matches)}>
            {props.children}
        </section>
    </>
}