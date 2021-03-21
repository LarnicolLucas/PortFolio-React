import stylesSass from './col_and_row.module.sass'

export default function col(props){
    const centered = props.center ? stylesSass.center : "";
    return <>
        <div className={`${stylesSass.column} ${stylesSass["is-"+props.size]} ${centered}`}> {props.children} </div>
    </>
}