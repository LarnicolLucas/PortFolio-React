import styles from './sideNav.module.sass'
import NavItem from './navItem/navItem.js'
import Box from './box/box.js'

export default function SideBar(props){

    const list = [
        {id: 0, name: 'Home'},
        {id: 1, name: 'LifeStyle'},
        {id: 2, name: 'CodeDiary'},
    ].map(el => <NavItem key={el.id} data={el} color={props.color}/>)

    return <>
        <aside className={styles.container_}>

            <section className={styles.containerItem}>

                {list}

            </section>

            <Box color={props.color}/>

        </aside>
    </>
}