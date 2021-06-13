import styles from './navItem.module.sass'

export default function NavItem(props){


    const styleSelected= {
        background: props.clicked ? props.color : "#eee"
    };
    const styleSelectedDiv= {
        background: props.clicked ? props.color : "none"
    };
    const stylePara= {
        color: props.clicked ? "#000" : "#81878B"
    };
    const svg = props.clicked ? "/images/blog/icons/"+props.data.id+"W.svg" : "/images/blog/icons/"+props.data.id+".svg";

    const buttonClicked= ()=> {
        props.fnClicked(props.id);
        const selector = {
            home: {
                active: true,
                filter: props.data.tag
            },
            read: {
                active: false,
                id: null
            },
            write: {
                active: false
            },
            update: {
                active: false,
                id: null
            }
        };
        props.handleChangeContent(selector);
    }

    return <>
        <article className={styles.container_} onClick={()=> buttonClicked()}>

            <section className={styles.containerImgText}>
                <figure className={styles.figure_} style={styleSelected}>
                    <img className={styles.img_} src={svg} />
                </figure>
                <h6 style={stylePara}>{props.data.name}</h6>
            </section>

            <div className={styles.divRounded} style={styleSelectedDiv}></div>

        </article>
    </>
}