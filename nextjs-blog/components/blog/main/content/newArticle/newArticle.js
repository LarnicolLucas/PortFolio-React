import ApiCall from '../../../apiCallPost';
import styles from './newArticle.module.sass'

export default function SideBar(props){

    const customSize = {
        fontSize: "0.7rem",
        color: "#81878B"
    }

    const tags = [
        {id: 0, name: "LifeStyle", tag: "lifeStyle"},
        {id: 1, name: "CodeDiary", tag: "codeDiary"}
    ].map(el=> <option style={customSize} key={el.id}> {el.name} </option>);

    const Create = () => ApiCall({test: "tested"})

    return <>
        <section className={styles.container_}>


            <div className={styles["field"]+" "+styles["field_"]}>
                <label style={customSize} className={styles["label"]}>Author</label>
                <div className={styles["control"]}>
                    <input style={customSize} className={styles["input"]+" "+styles["is-rounded"]} type="text" placeholder="Name" />
                </div>
                <label style={customSize} className={styles["label"]}>Tag</label>
                <div className={styles["control"]}>
                    <div style={customSize} className={styles["select"]+" "+styles["is-rounded"]} type="text" placeholder="Tag">
                    <select>
                        {tags}
                    </select>
                    </div>
                </div>
                <label style={customSize} className={styles["label"]}>Title</label>
                <div className={styles["control"]}>
                    <input style={customSize} className={styles["input"]+" "+styles["is-rounded"]} type="text" placeholder="Description" />
                </div>
                <label style={customSize} className={styles["label"]}>Picture</label>
                <div className={styles["control"]}>
                    <input style={customSize} className={styles["input"]+" "+styles["is-rounded"]} type="text" placeholder="Html Link" />
                </div>
                <label style={customSize} className={styles["label"]}>Content</label>
                <div className={styles["control"]}>
                    <textarea style={customSize} className={styles["textarea"]} placeholder="Content"></textarea>
                </div>
                <a className={styles["button"]+" "+styles["is-rounded"]+" "+styles.button_} onClick={Create}>Send</a>
            </div>

        </section>
    </>
}