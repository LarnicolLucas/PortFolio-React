import Skills_description from './Skills_description.js'
import styles from './skills.module.sass'
import skills_list from './skills_list.js'

export default function Skills (){

    const skills = [
        {id: 0, src: "images/skills/lap_topv1.svg", title: "Front End", list: skills_list.front},
        {id: 1, src: "images/skills/server_sidev1.svg", title: "Design", list: skills_list.design},
        {id: 2, src: "images/skills/server_sidev1.svg", title: "Back End", list: skills_list.back},
    ];

    const childs = skills.map(el => <Skills_description 
        key={el.id} 
        src= {el.src} 
        title= {el.title} 
        list= {el.list} 
        id_logo= {`fond${el.id}`}
    /> )

    return <>
            <section className={styles.container}>
                <h2 className={styles.title}>My Tools</h2>
                <section className={styles.skill_container}>
                    {childs}
                </section>
            </section>
    </>

}