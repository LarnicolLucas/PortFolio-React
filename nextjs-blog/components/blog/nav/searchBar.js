import styles from './searchBar.module.sass'

export default function SearchBar(props){
    return <>
        <div className={styles["field"]+" "+styles["has-addons"]}>
            <div className={styles["control"]}>
                <input className={styles["input"]} type="text" placeholder="Search Article" />
            </div>
            <div className={styles["control"]}>
                <a className={styles["button"]+" "+styles["is-info"]} style={{background: props.color}}>
                Search
                </a>
            </div>
        </div>
    </>
}