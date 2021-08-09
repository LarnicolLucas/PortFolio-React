import styles from './illustration.module.sass'
export default function Illustration(props){

    const containerStyle = {
        position: "absolute",
        top: "0",
        left: "0",
        width: "100%",
        heigh: "100%",
        zIndex: "0"
    };
    const imageStyle = {
        position: "absolute",
        top: 0.5 * props.pos[1]+"px",
        left: -(0.3 * props.pos[0] )+"px",
        width: "110%",
        maxWidth: "110%",
        zIndex: "1"
    };
    const imageStyle1 = {
        position: "absolute",
        top: 1.5 * props.pos[1]+"px",
        left: -1 * props.pos[0] - 30+"px",
        width: "110%",
        maxWidth: "110%",
        zIndex: "2"
    };
    const imageStyle2 = {
        position: "absolute",
        top: 3 * props.pos[1]+"px",
        left: 2.5 * props.pos[0]- 90+"px",
        width: "110%",
        maxWidth: "110%",
        zIndex: "3"
    };

    return <>

        <section style={containerStyle} className={styles.container}>

            <img 
                style={imageStyle}
                src="/images/illustration/3.svg" 
            />
            <img 
                style={imageStyle1}
                src="/images/illustration/2.svg" 
            />
            <img 
                style={imageStyle2}
                src="/images/illustration/1.svg" 
            />

        </section>

    </>
}