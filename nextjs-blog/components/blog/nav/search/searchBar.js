import styles from './searchBar.module.sass'

export default function SearchBar(props){
    const styleColor= {
        background: props.color
    }
    return <>
        <article className={styles.container_}>
            <input className={styles.input_} type="text" placeholder="Search Article"/>
            <figure style={styleColor} className={styles.figure_} >

                <img src='/images/blog/search.svg' className={styles.img_} /> 

            </figure>

        </article>
    </>
}