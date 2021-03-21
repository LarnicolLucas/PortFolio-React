import stylesSass from './col_and_row.module.sass'

export default function col(props){
    const resetMargAndPad = props.reset ? stylesSass.reset : "";
    return <>
        <div className={`${stylesSass.columns} ${resetMargAndPad}`}> {props.children} </div>
    </>
}