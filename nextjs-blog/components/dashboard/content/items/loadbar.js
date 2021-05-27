import styles from './items.module.sass'

export default function load(props){

    const style = {
        width: "50%",
        height: "7px",
        boxShadow: "2px 2px 2px #515151"
    }
    const styleBar = {
        width: `${props.value}%`,
        height: "100%",
        background: props.color
    }
    return <>
        <article className={styles.containerLoad} style={style}>

            <div className={styles.containerLoad} style={styleBar}></div>

        </article>
    </>
}