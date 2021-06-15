import styles from './nav.module.sass'
import SearchBar from './search/searchBar.js'
import Avatar from './avatar.js'

export default function Nav(props){
    const handleChangeContent = (selector) => props.handleChangeContent(selector);
    return <>
        <nav className={styles.container_}>
            <Avatar color={props.color}/>
            <SearchBar color={props.color} datas={props.datas} handleChangeContent={handleChangeContent}/>
        </nav> 
    </>
}