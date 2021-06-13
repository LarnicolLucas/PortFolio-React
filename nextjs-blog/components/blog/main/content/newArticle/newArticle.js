import ApiCall from '../../../apiCallPost';
import ApiCallGet from '../../../apiCallGet';
import ApiCallUp from '../../../apiCallUp';
import styles from './newArticle.module.sass';
import {useState, useEffect} from 'react'

export default function SideBar(props){

    const articlePosted = () => {
        const selector = {
            home: {
                active: true,
                filter: ""
            },
            read: {
                active: false,
                id: props.data._id
            },
            write: {
                active: false
            },
            update: {
                active: false,
                id: null
            }
        };
        props.handleChangeContent(selector);
    }

    const datas = {
        tag: "",
        title: "",
        date: new Date(),
        content: "",
        name: "",
        img: "",
        src: ""
    };

    const [dataToSend, setDataToSend] = useState(datas)

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
            articlePosted();
        }catch(err){
            console.log(err)
        }
    };
    const Update = async () => {
        try {  
            const res = await ApiCallUp(Object.assign({}, dataToSend, {_id: props.updateArticle.id}));
            articlePosted();
        }catch(err){
            console.log(err)
        }
    };

    const createUpload = () => props.updateArticle.active ? 
        Update() :
        Create()
    ;

    useEffect(async ()=> {
        if(props.updateArticle.active){
            try {  
                const res = await ApiCallGet(props.updateArticle.id);
                setDataToSend(res[0])

            }catch(err){
                console.log(err)
            }
        } else {
            setDataToSend(datas)
        }
    }, [props.updateArticle])

    return <>
        <section className={styles.container_}>


            <div className={styles["field"]+" "+styles["field_"]}>
                <label style={customSize} className={styles["label"]}>Author</label>
                <div className={styles["control"]}>
                    <input
                        onChange={handleInputs}
                        value={dataToSend.name}
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
                        value={dataToSend.tag}
                        name="tag" 
                    >
                        <option style={customSize} defaultValue=""> Pick a Tag </option>
                        {tags}
                    </select>
                    </div>
                </div>
                <label style={customSize} className={styles["label"]}>Title</label>
                <div className={styles["control"]}>
                    <input
                    onChange={handleInputs}
                    value={dataToSend.title}
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
                        value={dataToSend.src}
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
                        value={dataToSend.img}
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
                        value={dataToSend.content}
                        name="content" 
                        style={customSize} 
                        className={styles["textarea"]+" "+styles.textAera_} 
                        placeholder="Content"
                    ></textarea>
                </div>
                <a className={styles["button"]+" "+styles["is-rounded"]+" "+styles.button_} onClick={createUpload}>Send</a>
            </div>

        </section>
    </>
}