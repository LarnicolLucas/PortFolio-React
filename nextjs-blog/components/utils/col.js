import stylesSass from './col_and_row.module.sass'

export default function col(props){

    const centered = props.center ? stylesSass.center : "";
    const align = props.align != undefined ? stylesSass["is-align-self-"+props.align] : "";
    const size = props.size != undefined ? stylesSass["is-"+props.size] : "";
    
    return <>
        <div 
            className={`${stylesSass.column} ${size} ${centered} ${align}`}
        >  
            {props.children}
            
        </div>
    </>
}