import stylesSass from './nav_container.module.sass'

export default function col(props){
    return <>
        <div className={`${stylesSass.column} ${stylesSass["is-"+props.size]}`}> {props.children} </div>
    </>
}