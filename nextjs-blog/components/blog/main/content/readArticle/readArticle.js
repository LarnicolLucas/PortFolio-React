import styles from './readArticle.module.sass'
import Author from '../article/author.js'
import Link from 'next/link'

import Delete from '../../../store/delete'

export default function Read(props){

    const articleDeleted = () => {
        const selector = {
            home: {
                active: true,
                filter: ""
            },
            read: {
                active: false,
                id: null
            },
            write: {
                active: false
            },
            update: {
                active: false,
                id: null
            },
            refresh: true
        };
        props.handleChangeContent(selector);
    };
    const articleUpdated = () => {
        const selector = {
            home: {
                active: false,
                filter: ""
            },
            read: {
                active: false,
                id: null
            },
            write: {
                active: false
            },
            update: {
                active: true,
                id: props.data._id
            },
            refresh: false
        };
        props.handleChangeContent(selector);
    }

    const deleteFn = async () => {
        try {
            Delete(props.data._id) 
            articleDeleted();
        }catch(err){
            console.log(err)
        }
    };

    const splitContent = props.data.content.split("\n").map((el, i) => <p key={i} className={styles.para_}> {el} </p>)


    return <>
        <article className={styles.container_}>

            <section className={styles.buttons_} >

                <button onClick={deleteFn} className={styles["button"]+" "+styles["is-outlined"]}>Delete</button>
                <button onClick={articleUpdated} style={{background: props.color}} className={styles["button"]}>Modify</button>

            </section>
        
            <h1 className={styles.title_}> {props.data.title} </h1>

            <figure className={styles.figure_}>
                <Link href={props.data.link} passHref>
                    <img className={styles.img_} src={props.data.src} />
                </Link>
            </figure>            
            {splitContent}

            <Author 
                style={{justifyContent: "right", paddingRight: "3%"}} 
                name={props.data.name} img={props.data.img} 
                date={props.data.date}
            />


        </article>
    </>
}