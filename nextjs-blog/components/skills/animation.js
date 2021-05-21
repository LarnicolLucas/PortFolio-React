import {useRef, useEffect} from 'react'

export default function AnimateSkill(props){

    const anim = useRef();

    useEffect(()=> props.trig ? anim.current.beginElement() : null)

    return <>
      <animate
            ref={anim}
            href= {`#${props.target}`}
            attributeName= "d"
            from= {props.trig ? props.path0: props.path1} 
            to= {props.trig ? props.path1: props.path0} 
            dur= {props.dur}
            begin= "indefinite"
            fill= "freeze"
        />
    </>
}