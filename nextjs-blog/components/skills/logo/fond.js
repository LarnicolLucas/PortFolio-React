import Animation from '../animation.js'

export default function Fond(props){

    const path0 = "M 9.8273808,148.16666 87.690475,124.73214 164.79762,157.99405 192.0119,109.61309"
    const path1 = "m 9.8273808,148.16666 43.0892842,47.625 39.309526,-81.64285 99.029759,85.42261"


    return <>
        
        <svg
            width="100%"
            version="1.1"
            style={{position: "absolute"}}
        >
            <g
                transform="translate(-34.900289,-45.720816)">
                <path
                    id= {props.id}
                    style={{
                        fill:"#333333",
                        fillOpacity: "1",
                        strokeWidth: "0.0920026",
                        strokeMiterlimit: "4",
                    }}
                    d={path0} 
                />
            </g>
            <Animation dur="0.5s" target={props.id} path0={path0} path1={path1} trig={props.trig}/>
        </svg>
    </>
}