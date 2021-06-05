import styles from './nav.module.sass'
import SearchBar from './searchBar.js'
import Avatar from './avatar.js'

export default function Nav(props){
    return <>
        <nav className={styles.container_}>
            <Avatar color={props.color}/>
            <SearchBar color={props.color}/>
        </nav>
    </>
}