import styles from './text_pres.module.sass'
import {useRef, useEffect} from 'react'

const text_pres = (props) => {

    const container = useRef();

    useEffect(()=> {
        if(props.anime === undefined) return ;
        props.animation(container.current, props.anime)
    }, [props.anime])

    return <>
        <article className={styles.container} ref={container}>
            <h3>Hello</h3>
            <p>I am Lucas. I have been programming since 2017. 
                I started by doing home automation with a Raspberry Pi. 
                I like to carry out projects with beautiful graphical interfaces and well-made software architecture.
                I am currently working in the electrical field and I want to change profession to do what I like: CODE.</p>
        </article>
    </>
}

export default text_pres