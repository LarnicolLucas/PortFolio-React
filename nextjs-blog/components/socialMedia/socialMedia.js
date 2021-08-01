import styles from './socialMedia.module.sass'
import Link from 'next/link'
import SVGS from './svgs'

export default function SocialMedia(props){

    return <>
        <article className={styles.container_button}>

            <Link href={props.link} passHref >

            <figure className={styles.figure}>

                <SVGS class_={styles.svg} path={props.path}/>

            </figure>

            </Link>

        </article>
    </>
}