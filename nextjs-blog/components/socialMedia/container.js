import styles from './socialMedia.module.sass'
import SocialMedia from './socialMedia';
import path from './svgs/path'

export default function ContainerMedia(props){

    const list = [
        {
            id: 0,
            media: "Twitter",
            path: path.twitter,
            link: "https://twitter.com/LucasLarnicol"
        },
        {
            id: 1,
            media: "Linkedin",
            path: path.linkedin,
            link: "https://www.linkedin.com/in/lucas-larnicol-52a995201/"
        },
        {
            id: 2,
            media: "Github",
            path: path.github,
            link: "https://github.com/LarnicolLucas"
        }

    ].map(el=> <SocialMedia 
        key={el.id}
        path={el.path}
        link={el.link}
    />)

    return <>
        <article className={styles.container}>

            {list}

        </article>
    </>
}