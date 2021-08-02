import styles from './about.module.sass'
import { useRef, useEffect } from 'react'

export default function Info(props){

    const domContainer = useRef();

    useEffect(()=> {

        if(props.zoomAbout){
            domContainer.current.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        }

        props.aboutButtonClicked(false);
    
    }, [props.zoomAbout])

    return <>
        <section className={styles.container} ref={domContainer}>

            <header>
                <h1 className={styles.title}>About</h1>
            </header>

            <figure className={styles.figure}>
                <img className={styles.img} src="/images/about/about.png" alt="picture Auteur"/>
            </figure>

            <figcaption>
                <p className={styles.description}>
                    I am 33, i living in Paris and i love the digital world.<br /> 
                    I make music since i'am a child, Bass guitar, Piano and MAO. <br />
                    I practice sport regularly and whenever I get the chance, I travel with my family.
                </p>
            </figcaption>
            
        </section>
    </>
}
