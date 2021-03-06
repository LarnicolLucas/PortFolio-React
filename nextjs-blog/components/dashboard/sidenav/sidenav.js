import styles from './sidenav.module.sass'
import apiCall from '../apiCall.js'

import {useState} from 'react'

export default function SideNav(props){

        const [button, setButton] = useState(false);

        const opacityTxt = button ? styles.opacityTxt : "";

        const styleImg = {
            marginTop: button ? "10px" : "0",
            marginBottom: button ? "10px" : "0"
        };
        const loadUser = async (id) => { 
            try {
                const res = await apiCall(`/api/dashboard/readDocument/${id}`);
                props.upStateUserData(res)
            }catch(err){
                console.log(err)
            }
        }

        const items = props.list.map(el => <section 
            key={el.key} 
            className={styles.containerList}
            onClick={() => loadUser(el._id)}
        >
            <img style={styleImg} className={styles.img} src={`/images/dashboard/users/${el.name.first}.jpg`} />
            <p 
                className={`${styles.txt} ${opacityTxt}`} 
                key={el.id}
            >
                <strong> {el.name.first} </strong><span className={styles.lastName}> {el.name.last}</span></p>

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