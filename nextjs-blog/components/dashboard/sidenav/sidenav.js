import styles from './sidenav.module.sass'

export default function SideNav(prop){

        const list = [
            {id:0, name: "Dashboard"},
            {id:1, name: "History"},
            {id:2, name: "Course"},
            {id:3, name: "Items"}
        ];

        const items = list.map(el => <p key={el.id}> {el.name} </p>)
    return <>
        <section className={styles.list_container}>
            {items}
        </section>
        <figure className={styles.figure}>
            <img src="/images/dashboard/sidenav_illustration.svg" />
        </figure>
    </>
}