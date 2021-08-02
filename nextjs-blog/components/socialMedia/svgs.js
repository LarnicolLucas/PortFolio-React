
export default function SVGS(props){

    return <>
        <svg className={props.class_} focusable="false" xmlns="http://www.w3.org/2000/svg" viewBox={props.viewBox}>
            {props.path}
        </svg>
    </>
};