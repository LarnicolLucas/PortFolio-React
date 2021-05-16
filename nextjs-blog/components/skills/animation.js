export default function AnimateSkill(props){
    return <>
        <svg style={{display: "none"}}>
        <animate
            href= {`#${props.target}`}
            attributeName= "d"
            from= {props.path0}
            to= {props.path1} 
            dur= {props.dur}
            begin= "0s"
            fill= "freeze"
        />
        </svg>
    </>
}