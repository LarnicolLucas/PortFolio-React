import stylesSass from './col_and_row.module.sass'

export default function col(props){
    return <>
        <div className={`${stylesSass.column} ${stylesSass["is-"+props.size]}`}> {props.children} </div>
    </>
}