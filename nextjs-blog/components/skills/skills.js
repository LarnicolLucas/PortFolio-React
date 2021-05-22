import Skills_description from './Skills_description.js'
import styles from './skills.module.sass'
import skills_list from './skills_list.js'

export default function Skills (){

    const skills = [
        {id: 0, src: "front", title: "Front End", list: skills_list.front, anim_delay: 0},
        {id: 1, src: "design", title: "Design", list: skills_list.design, anim_delay: 0.15},
        {id: 2, src: "back", title: "Back End", list: skills_list.back, anim_delay: 0.3},
    ];

    const childs = skills.map(el => <Skills_description 
        key={el.id} 
        src= {el.src} 
        title= {el.title} 
        list= {el.list} 
        id_logo= {`fond${el.id}`}
        anim_delay= {el.anim_delay}
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