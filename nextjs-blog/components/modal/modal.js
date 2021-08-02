import styles from './modal.module.sass'

export default function Modal(props){

    const style= {
        display: props.modalState ? "flex" : "none"  
    }
    
    return <>
        <aside className={styles.container}  style={style}>
            <section className={styles.back} onClick={()=> props.closeModal(false)}></section>
            <section className={styles.content}>
                <input 
                    type="text" 
                    placeholder="Email"
                    className={styles.input}
                >
                </input>
                <textarea 
                    type="textarea"
                    placeholder="Message"
                    style={{height: "10rem"}} 
                    className={styles.input+" "+styles.texta}
                >
                </textarea>
                <article className={styles.button}>

                    <p className={styles.p}>Send</p>

                </article>
            </section>
        </aside>
    </>
}