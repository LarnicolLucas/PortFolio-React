import gsap from 'gsap'
import {useEffect, useRef} from 'react'

export default function Intro(props){

    const txt = useRef();

    useEffect(()=>{
        gsap.to(txt.current, {fontSize: "16px", duration: 3, ease:"elastic.out(1, 0.3)", repeat: -1})
    }, []);

    const style= {
        gridColumnStart: "1",
        gridColumnEnd: "3",
        gridRowStart: "1",
        gridRowEnd: "2",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
    };
    const style2= {

        padding: "20px 10px 20px 10px",
        borderRadius: "16px",
        background: "orange",
        boxShadow: "10px 10px 10px #515151"

    }
    return <>
        <article style={style}>
            <section style={style2} ref={txt}>
                Select An User 
            </section>    
        </article>
    </>
}