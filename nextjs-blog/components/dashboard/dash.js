import styles from './dash.module.sass'
import glass from './glass.module.sass'
import Sidenav from './sidenav/sidenav.js'
import Content from './content/content.js'
import Loader from '../utils/loader/loader.js'

import Intro from './intro.js'

import {useState} from 'react'

export default function Dash(props){

    const color= "#FF9822"

    const [sideNavOpen, setSideNavOpen] = useState(false);
    const [userData, setUserData] = useState([]);

    const upStateUserData = (data) => setUserData(data);

    const styleNav = {
        width: !sideNavOpen ? "25%" : "6%"
    };

    const content = props.data.length === 0 ? <Loader /> :
        userData.length === 0 ?  <Intro /> : <Content data={userData} color={color}/>

    return <>
        <section className={`${styles.container} `}>
            <img style={{ top: "-10%", left: "2%" }} className={styles.img} src="/images/dashboard/fond/0.svg" />
            <img style={{ top: "15%", left: "80%" }} className={styles.img} src="/images/dashboard/fond/1.svg" />
            <img style={{ top: "-20%", left: "35%" }} className={styles.img} src="/images/dashboard/fond/2.svg" />
            <img style={{ top: "70%", left: "50%" }} className={styles.img} src="/images/dashboard/fond/0.svg" />
            <section className={`${styles.glassMorphFond} ${glass.glass}`}></section>
            <aside className={styles.sideNav} style={styleNav}>
                <Sidenav 
                    color={color} 
                    onSideNavOpen={(bol)=> setSideNavOpen(bol)}
                    list={props.data}
                    upStateUserData={upStateUserData}
                />
            </aside>
            <article className={styles.content}>
                {content}
            </article>
        </section>
    </>
}