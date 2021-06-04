import styles from './sideNav.module.sass'
import NavItem from './navItem/navItem.js'

export default function SideBar(){

    const list = [
        {id: 0, name: 'Home'},
        {id: 1, name: 'LifeStyle'},
        {id: 2, name: 'CodeDiary'},
    ].map(el => <NavItem key={el.id} data={el}/>)

    return <>
        <aside className={styles.container_}>

            {list}

        </aside>
    </>
}