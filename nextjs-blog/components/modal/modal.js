import styles from './modal.module.sass'
import ApiSend from './apiSend'
import {useState} from 'react'

export default function Modal(props){

    const style= {
        display: props.modalState ? "flex" : "none"  
    };

    const [mail, setMail] = useState("");
    const [message, setMessage] = useState("");

    const sendMessage = async ()=> {
        try{

            const response = await ApiSend({mail: mail, message: message});
            props.closeModal(false);


        }catch(err){
            console.log(err)
        }
    }
    
    return <>
        <aside className={styles.container}  style={style}>
            <section className={styles.back} onClick={()=> props.closeModal(false)}></section>
            <section className={styles.content}>
                <input 
                    type="text" 
                    placeholder="Email"
                    className={styles.input}
                    value={mail}
                    onChange={(e)=>setMail(e.currentTarget.value)}
                >
                </input>
                <textarea 
                    type="textarea"
                    placeholder="Message"
                    style={{height: "10rem"}} 
                    className={styles.input+" "+styles.texta}
                    value={message}
                    onChange={(e)=>setMessage(e.currentTarget.value)}
                >
                </textarea>
                <article className={styles.button}>

                    <p className={styles.p} onClick={sendMessage} >Send</p>

                </article>
            </section>
        </aside>
    </>
}