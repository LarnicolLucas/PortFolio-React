import styles from './stats.module.sass'
import Axis_label from './axis_label.js'

import mediaQuery from '../../../utils/matchesQuery/matches.js'

export default function Stats(props){

    const isResponsive = mediaQuery(700);

    const size_circle = isResponsive ? 175 : 250;
    const echelle_de_notation = 4;

    const valueToPoint= (value, index, total, size) => {
        const x = 0;
        const y = -value * 0.8;
        const angle = ((Math.PI * 2) / total) * index;
        const cos = Math.cos(angle);
        const sin = Math.sin(angle);
        const tx = x * cos - y * sin + (size/2);
        const ty = x * sin + y * cos + (size/2);
        return {
          x: tx,
          y: ty
        };
    };
    const createPoints= (list, size)=> {
        const total = list.length;
        return list.map((el, i) =>{         
            var point = valueToPoint((el/100) * size/2, i, total, size);
            return point.x + "," + point.y;
          })
          .join(" ");
    };
    const circleLegends= ()=>{

        const recursiveFunction = (iteration, echelle, circle_size, array) => {
            
            if(iteration > echelle) {
                return array
            } else {
                let res = array.concat({
                    id: iteration, 
                    r: ((circle_size*0.8) / echelle) * iteration
                });

                return recursiveFunction(iteration+1, echelle, circle_size, res)
            }
        }

        return recursiveFunction(0, echelle_de_notation, size_circle/2, [])

    };

    const circles = circleLegends().map(el=> <circle 
        key={el.id} 
        cx={size_circle/2} 
        cy={size_circle/2} 
        r={el.r}
        fill="none"
        stroke="#515151"
    />)
    const points = createPoints(props.points, size_circle);
    const axisLabel = props.points.map((el, i)=> <Axis_label 
        key={i} 
        stat={el} 
        index={i} 
        total={props.points.length} 
        size={size_circle}
        fn={valueToPoint}
    />)

    return <>
        <section className={styles.container}>

        <svg width={size_circle} height={size_circle}>
			<g>
				<polygon fill={props.color} strokeLinejoin="round" points={points}></polygon>
				{circles}
                {axisLabel}
				
			</g>
		</svg>

        </section>
    </>
}