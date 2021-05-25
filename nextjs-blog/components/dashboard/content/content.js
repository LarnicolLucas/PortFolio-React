import styles from './content.module.sass'
import glass from '../glass.module.sass'
import matchesQuery from '../../utils/matchesQuery/matches.js'

export default function Dash(prop){

    const matches = matchesQuery(700)

    const list = [
        {id: 0, style : {gridColumn : "1", gridRow: "1"}, child: <p>Card</p> },
        {id: 1, style : {gridColumn : matches ? "2" : "1", gridRow: matches ? "1" : "2"}, child: <p>Itemes</p> },
        {id: 2, style : {gridColumn : "1", gridRow: matches ? "2" : "3"}, child: <p>Spider</p> },
        {id: 3, style : {gridColumn : matches ? "2" : "1", gridRow: matches ? "2" : "4"}, child: <p>Graph</p> }
    ];

    const contents = list.map(el => <article 
        className={`${styles.content} ${glass.glass}`} 
        key={el.id} 
        style={el.style}
    > 
        {el.child} 
    </article>);

    return <>
        {contents}
    </>
}