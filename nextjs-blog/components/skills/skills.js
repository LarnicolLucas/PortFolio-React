import Skills_description from './Skills_description.js'
import styles from './skills.module.sass'
import skills_list from './skills_list.js'

export default function Skills (){

    const skills = [
        {id: 0, src: "images/skills/lap_topv1.svg", title: "Front End", list: skills_list.front},
        {id: 1, src: "images/skills/server_sidev1.svg", title: "Back End", list: skills_list.back},
        {id: 2, src: "images/skills/server_sidev1.svg", title: "Design", list: skills_list.design},
    ];

    const childs = skills.map(el => <Skills_description key={el.id} src= {el.src} title= {el.title} list= {el.list} /> )

    return <>
            <section className={styles.container}>
                {childs}
            </section>
    </>

}