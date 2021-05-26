import styles from './content.module.sass'
import glass from '../glass.module.sass'
import matchesQuery from '../../utils/matchesQuery/matches.js'

import Card from './card/card.js'
import Stats from './stats/stats.js'
import Items from './items/items.js'
import Graph from './graph/graph.js'

export default function Dash(prop){

    const matches = matchesQuery(700);

    const style= [
        {
            gridColumn : "1", 
            gridRow: "1", 
            marginTop: matches ? "-10%" : "5%", 
            width: matches ? "60%" : "80%", 
            height: matches ? "100%" : "auto"
        },
        {
            gridColumn : matches ? "2" : "1", 
            gridRow: matches ? "1" : "2", 
            width: matches ? "110%" : "80%",
            height: matches ? "90%" : "auto"
        },
        {
            gridColumn : "1", 
            gridRow: matches ? "2" : "3", 
            marginBottom: matches ? "-5%" : "0", 
            width: "80%"
        },
        {
            gridColumn : matches ? "2" : "1", 
            marginBottom: matches ? "-7%" : "0",
            marginRight: matches ? "-5%" : "0", 
            width: "80%", 
            height: matches ? "70%" : "auto",
        }
    ];

    console.log(style)

    const list = [
        {id: 0, child: <Card score={[5, 5, 33]} /> },
        {id: 1, child: <Items /> },
        {id: 2, child: <Stats points={[90, 80, 75, 60, 75, 55, 30]}/> },
        {id: 3, child: <Graph /> }
    ];

    const contents = list.map(el => <article 
        className={`${styles.content} ${glass.glass}`} 
        key={el.id} 
        style={style[el.id]}
    > 
        {el.child} 
    </article>);

    return <>
        {contents}
    </>
}