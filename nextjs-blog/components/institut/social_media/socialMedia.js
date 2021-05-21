import styles from './socialMedia.module.sass'

export default function SocialMedia(props){

    return <>
        <a className={styles.container}>
            <img className={styles.img} src={props.src} alt={props.alt}/>
        </a>
    </>
}