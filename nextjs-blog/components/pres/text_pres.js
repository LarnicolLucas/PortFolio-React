import styles from './text_pres.module.sass'
import {useRef, useEffect} from 'react'

const text_pres = (props) => {

    const container = useRef();

    useEffect(()=> {
        if(props.anime === undefined) return ;
        props.animation(container.current, props.anime)
    }, [props.anime])

    return <>
        <article ref={container}>
            <h3>Hello</h3>
            <p className={styles.text}>Hi, my name is <strong>Lucas</strong>.<br/> I love made <strong>WEB</strong> app.<br/>
                I am always looking for new WEB <strong>techs</strong> and I am convinced to be an <strong>efficient</strong> DEV, testing, versioning and teamworking is necessary.<br/>
                I like build things from scratch, <strong>custom</strong> CSS rather frameworks CSS for a more <strong>personal</strong> project.<br/>
                My priority delivers something enjoyable, fast and <strong>reliable</strong> to my client.</p>
        </article>
    </>
}

export default text_pres