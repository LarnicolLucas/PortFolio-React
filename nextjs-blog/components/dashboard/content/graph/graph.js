import styles from './graph.module.sass'
import mediaQuery from '../../../utils/matchesQuery/matches'

export default function Graph(props){

    const matches = mediaQuery(700)

    const width = matches ? 200 : 250;
    const height = matches ? 100 : 175;

    const createPath = (coo, maxWidth, maxHeight) => {
		
        let x = (el, maxW) => (el*maxW)/100;
        let y = (el, maxH) => -((el*maxH)/100) + maxH;
    
        const adjust_coordonates = coo.map(el => [x(el[0], maxWidth), y(el[1], maxHeight)]);
        
        const line = (pointA, pointB) =>{
            const lenX = pointB[0] - pointA[0];
            const lenY = pointB[1] - pointA[1];
            
            return {
                length : Math.sqrt(Math.pow(lenX, 2)+ Math.pow(lenX, 2)),
                angle  : Math.atan2(lenY, lenX)
            }
        };
        
        const controlPoint = (current, previous, next, reverse) => {
          const p = previous || current;
          const n = next || current;
          const smoothing = 0.2;
          const o = line(p, n);
          const angle = o.angle + (reverse ? Math.PI : 0);
          const length = o.length * smoothing;
          const x = current[0] + Math.cos(angle) * length;
          const y = current[1] + Math.sin(angle) * length;
          return [x, y];
        };
        
        const bezierCommand = (point, i, a) => {
          const [cpsX, cpsY] = controlPoint(a[i - 1], a[i - 2], point)
          const [cpeX, cpeY] = controlPoint(point, a[i - 1], a[i + 1], true) 
          
          return `C ${cpsX},${cpsY} ${cpeX},${cpeY} ${point[0]},${point[1]}`
         
        };
        
        const svgPath = (points, command) => { 
          const d = points.reduce((acc, point, i, a) => i === 0
            ? `M ${point[0]},${point[1]}`
            : `${acc} ${command(point, i, a)}`
          , '');  
          return d
        };
        
        let final_res = svgPath(adjust_coordonates, bezierCommand)

        return final_res
    };
    const list_legends= function(){
        let res = [];
        for(let i = 0; i< 4; i++){
            res.push(null)
        };
        return res.map((el,i) => {return {path: `M 0 ${(height/4)*(i+1)} H ${width}`, id: i}}) 
    };

    const legends = list_legends().map(el => <path key={el.id} d={el.path} stroke="grey" fill="transparent" />)

    const path = createPath(props.coordonates, width, height)

    return <>
      <section>
        <h1 className={styles.title} >Histo</h1>
        <svg className={styles.svg} width={width} height={height} xmlns="http://www.w3.org/2000/svg">

          <path d={path} stroke={props.color} fill="transparent" strokeWidth="3"/>
          <g>
              {legends}
          </g>
        </svg>
      </section>
    </>
}