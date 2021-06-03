import styles from './searchBar.module.sass'

export default function SearchBar(){
    return <>
        <div className={styles["field"]+" "+styles["has-addons"]}>
            <div className={styles["control"]}>
                <input className={styles["input"]} type="text" placeholder="Search Article" />
            </div>
            <div className={styles["control"]}>
                <a className={styles["button"]+" "+styles["is-info"]}>
                Search
                </a>
            </div>
        </div>
    </>
}