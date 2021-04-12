import stylesSass from './col_and_row.module.sass'

export default function col(props){

    const resetMargAndPad = props.reset ? stylesSass.reset : "";
    const height = props.height != undefined ? stylesSass["height"+props.height] : "";

    return <>
        <div className={`${stylesSass.columns} ${resetMargAndPad} ${height}`}> {props.children}  </div>
    </>
}