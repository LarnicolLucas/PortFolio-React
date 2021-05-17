import {useRef, useEffect} from 'react'

export default function AnimateSkill(props){

    const anim = useRef();

    useEffect(()=> props.trig ? anim.current.beginElement() : null)

    return <>
      <animate
            ref={anim}
            href= {`#${props.target}`}
            attributeName= "d"
            from= {props.path0}
            to= {props.path1} 
            dur= {props.dur}
            begin= "indefinite"
            fill= "freeze"
        />
    </>
}