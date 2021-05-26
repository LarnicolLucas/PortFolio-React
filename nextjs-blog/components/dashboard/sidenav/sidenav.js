import styles from './sidenav.module.sass'

import {useState} from 'react'

export default function SideNav(props){

        const list = [
            {id:0, name: "Dashboard", src: "/images/dashboard/side/0.svg"},
            {id:1, name: "History", src: "/images/dashboard/side/1.svg"},
            {id:2, name: "Course", src: "/images/dashboard/side/2.svg"},
            {id:3, name: "Items", src: "/images/dashboard/side/3.svg"}
        ];

        const [button, setButton] = useState(false);

        const styleText = {
            display: button ? "none" : "block"
        }
        const styleImg = {
            marginTop: button ? "10px" : "0",
            marginBottom: button ? "10px" : "0"
        }

        const items = list.map(el => <section key={el.id} className={styles.containerList}>
            <img style={styleImg} className={styles.img} src={el.src} />
            <p style={styleText} key={el.id}> {el.name} </p>
        </section>);

        const effectStyleButton = {
            transform: button ? "rotate(0deg) translate(-50%, -50%)" : "rotate(180deg)"
        }

    return <>
        <section className={styles.list_container}>
            {items}
        </section>
        <figure className={styles.figure}>
            <img src="/images/dashboard/sidenav_illustration.svg" />
        </figure>
        <img 
            className={styles.next} 
            style={effectStyleButton} 
            src="/images/dashboard/side/next.svg" 
            onClick={()=> {
                const state = button ? false : true 
                setButton(state);
                props.onSideNavOpen(state)
            }}
        />
    </>
}