import ApiCall from '../../../apiCallPost';
import styles from './newArticle.module.sass';
import {useState} from 'react'

export default function SideBar(props){

    const datas = {
        tag: "",
        title: "",
        date: new Date(),
        content: "",
        name: "",
        img: "",
        src: ""
    };

    const [dataToSend, setDataToSend] = useState(datas);

    const handleInputs = (e) => setDataToSend(Object.assign({}, dataToSend, {[e.target.name] : e.target.value}))

    const customSize = {
        fontSize: "0.7rem",
        color: "#81878B"
    }

    const tags = [
        {id: 0, name: "LifeStyle", tag: "lifeStyle"},
        {id: 1, name: "CodeDiary", tag: "codeDiary"}
    ].map(el=> <option style={customSize} key={el.id} value={el.tag}> {el.name} </option>);

    const Create = async () => {
        try {
            
            const res = await ApiCall(dataToSend);
            props.changeFilter()
        }catch(err){
            console.log(err)
        }
    };

    return <>
        <section className={styles.container_}>


            <div className={styles["field"]+" "+styles["field_"]}>
                <label style={customSize} className={styles["label"]}>Author</label>
                <div className={styles["control"]}>
                    <input
                        onChange={handleInputs}
                        name="name" 
                        style={customSize} 
                        className={styles["input"]+" "+styles["is-rounded"]} 
                        type="text" 
                        placeholder="Name" 
                    />
                </div>
                <label style={customSize} className={styles["label"]}>Tag</label>
                <div className={styles["control"]}>
                    <div style={customSize} className={styles["select"]+" "+styles["is-rounded"]} type="text" placeholder="Tag">
                    <select 
                        onChange={handleInputs} 
                        name="tag" 
                    >
                        <option style={customSize} value="" selected> Pick a Tag </option>
                        {tags}
                    </select>
                    </div>
                </div>
                <label style={customSize} className={styles["label"]}>Title</label>
                <div className={styles["control"]}>
                    <input
                    onChange={handleInputs}
                    name="title"
                    style={customSize} 
                    className={styles["input"]+" "+styles["is-rounded"]} 
                    type="text" 
                    placeholder="Description" 
                />
                </div>
                <label style={customSize} className={styles["label"]}>Picture</label>
                <div className={styles["control"]}>
                    <input
                        onChange={handleInputs}
                        name="src" 
                        style={customSize} 
                        className={styles["input"]+" "+styles["is-rounded"]} 
                        type="text" 
                        placeholder="Html Link" 
                    />
                </div>
                <label style={customSize} className={styles["label"]}>Author's Picture</label>
                <div className={styles["control"]}>
                    <input
                        onChange={handleInputs}
                        name="img" 
                        style={customSize} 
                        className={styles["input"]+" "+styles["is-rounded"]} 
                        type="text" 
                        placeholder="Html Link" 
                    />
                </div>
                <label style={customSize} className={styles["label"]}>Content</label>
                <div className={styles["control"]}>
                    <textarea
                        onChange={handleInputs}
                        name="content" 
                        style={customSize} 
                        className={styles["textarea"]} 
                        placeholder="Content"
                    ></textarea>
                </div>
                <a className={styles["button"]+" "+styles["is-rounded"]+" "+styles.button_} onClick={Create}>Send</a>
            </div>

        </section>
    </>
}