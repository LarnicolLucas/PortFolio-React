import styles from './stats.module.sass'
export default function Stats(props){

    const point = () => props.fn(
        (1) * props.size/2,
        props.index,
        props.total,
        props.size
    );

    const {x, y} = point();

    return <>
        <text
            className={styles.txt}
            x={x}
            y={y}
        >{props.technos[props.index]}</text>
    </>
}
