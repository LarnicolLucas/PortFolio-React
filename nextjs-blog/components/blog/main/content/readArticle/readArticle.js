import styles from './readArticle.module.sass'
import Author from '../article/author.js'

import ApiCallDel from '../../../apiCallDel.js'

export default function Read(props){

    const deleteFn = async () => {
        try {
            const res = await ApiCallDel(props.data._id);
            props.changeFilter()
        }catch(err){
            console.log(err)
        }
    };

    return <>
        <article className={styles.container_}>
        
            <h1 className={styles.title_}> {props.data.title} </h1>

            <figure className={styles.figure_}>
                <img className={styles.img_} src={props.data.src} />
            </figure>
            <Author style={{justifyContent: "right", paddingRight: "3%"}} name={props.data.name} img={props.data.img} date={props.data.date}/>
            
            <p className={styles.para_}>{props.data.content}</p>

            <section className={styles.buttons_} >

                <button onClick={deleteFn} className={styles["button"]+" "+styles["is-outlined"]}>Delete</button>
                <button onClick={()=> props.askUpdateArticle(props.data._id)} style={{background: props.color}} className={styles["button"]}>Modify</button>

            </section>
            

        </article>
    </>
}