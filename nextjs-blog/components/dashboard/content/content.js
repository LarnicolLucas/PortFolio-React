import styles from './content.module.sass'
import glass from '../glass.module.sass'
import matchesQuery from '../../utils/matchesQuery/matches.js'

import Card from './card/card.js'
import Stats from './stats/stats.js'
import Items from './items/items.js'
import Graph from './graph/graph.js'

export default function Dash(props){

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
            alignItems: "center"
        }
    ];

    const list = [
        {id: 0, child: <Card 
            color={props.color} 
            src={props.data[0].name.first} 
            score={[
                props.data[0].projects, 
                props.data[0].experience, 
                new Date(new Date() - new Date(props.data[0].birth)).getYear()
            ]}
            name={`${props.data[0].name.first} ${props.data[0].name.last}`}
            title={props.data[0].job}
         /> },
        {id: 1, child: <Items color={props.color} list={props.data[0].technos} /> },
        {id: 2, child: <Stats color={props.color} data={props.data[0].technos}/> },
        {id: 3, child: <Graph coordonates={props.data[0].histo} color={props.color}/> }
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