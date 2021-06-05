import styles from './newArticle.module.sass'

export default function SideBar(props){
    return <>
        <section className={styles.container_}>

            <input type="text" name="Author"/>
            <input type="select" name="Tag"/>
            <input type="text" name="title"/>
            <input type="text" name="pictLink"/>
            <input type="textaera" name="content"/>
            <button>SEND</button>

        </section>
    </>
}