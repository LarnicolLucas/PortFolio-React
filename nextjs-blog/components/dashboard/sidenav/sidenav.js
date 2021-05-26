import styles from './sidenav.module.sass'

export default function SideNav(prop){

        const list = [
            {id:0, name: "Dashboard", src: "/images/dashboard/side/0.svg"},
            {id:1, name: "History", src: "/images/dashboard/side/1.svg"},
            {id:2, name: "Course", src: "/images/dashboard/side/2.svg"},
            {id:3, name: "Items", src: "/images/dashboard/side/3.svg"}
        ];

        const items = list.map(el => <section key={el.id} className={styles.containerList}>
            <img className={styles.img} src={el.src} />
            <p key={el.id}> {el.name} </p>
        </section>)
    return <>
        <section className={styles.list_container}>
            {items}
        </section>
        <figure className={styles.figure}>
            <img src="/images/dashboard/sidenav_illustration.svg" />
        </figure>
    </>
}