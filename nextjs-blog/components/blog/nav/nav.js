import styles from './nav.module.sass'
import SearchBar from './searchBar.js'
import Avatar from './avatar.js'

export default function Nav(){
    return <>
        <nav className={styles.container_}>
            <Avatar />
            <SearchBar />
        </nav>
    </>
}