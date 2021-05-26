import styles from './content.module.sass'
import glass from '../glass.module.sass'
import matchesQuery from '../../utils/matchesQuery/matches.js'

import Card from './card/card.js'
import Stats from './stats/stats.js'

export default function Dash(prop){

    const matches = matchesQuery(700);

    const style= [
        {gridColumn : "1", gridRow: "1", marginTop: "-10%", width: "60%", height: "90%"},
        {gridColumn : matches ? "2" : "1", gridRow: matches ? "1" : "2", width: "110%", height: "90%"},
        {gridColumn : "1", gridRow: matches ? "2" : "3", marginBottom: "-5%", width: "80%"},
        {gridColumn : matches ? "2" : "1", marginBottom: "-7%", marginRight: "-5%", width: "80%", height: "70%"}
    ]

    const list = [
        {id: 0, child: <Card score={[10, 15, 3]} /> },
        {id: 1, child: <p>Spider</p> },
        {id: 2, child: <Stats points={[90, 80, 75, 60, 75, 55, 30]}/> },
        {id: 3, child: <p>Graph</p> }
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