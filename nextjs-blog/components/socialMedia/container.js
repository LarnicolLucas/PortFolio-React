import styles from './socialMedia.module.sass'
import SocialMedia from './socialMedia';
import path from './svgs/path'

export default function ContainerMedia(props){

    const list = [
        {
            id: 0,
            media: "Twitter",
            path: path.twitter,
            link: "https://twitter.com/LucasLarnicol",
            viewBox: "0 0 512 512"
        },
        {
            id: 1,
            media: "Linkedin",
            path: path.linkedin,
            link: "https://www.linkedin.com/in/lucas-larnicol-52a995201/",
            viewBox: "0 0 448 512"
        },
        {
            id: 2,
            media: "Github",
            path: path.github,
            link: "https://github.com/LarnicolLucas",
            viewBox: "0 0 496 512"
        }

    ].map(el=> <SocialMedia 
        key={el.id}
        path={el.path}
        link={el.link}
        viewBox={el.viewBox}
    />)

    return <>
        <article className={styles.container}>

            {list}

        </article>
    </>
}