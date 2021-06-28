import styles from './portfolio.module.sass'
import Grid from '../utils/grid/grid.js'
import Card from './card.js'

export default function Portfolio(props){

    const list = [
        {
            id: 0,
            title: "SPA",
            src: "/images/portfolio/institut.png",
            description: "Single Page Application for showcase site - French Beauty Institut",
            link: "/institut"
        },
        {
            id: 1,
            title: "Dashboard",
            src: "/images/portfolio/dashboard.png",
            description: "Dashboard bind with data from Data Base. Glassmorphism UI",
            link: "/dashboard"
        },
        {
            id: 2,
            title: "Blog",
            src: "/images/portfolio/blog.png",
            description: "Home Made Blog with CRUD API",
            link: "/blog"
        },
        {
            id: 3,
            title: "Login",
            src: "/images/portfolio/login.png",
            description: "Modular Login with BackEnd MongoDB environement.",
            link: "/login"
        }
    ].map(el => <Card key={el.id} src={el.src} title={el.title} description={el.description} link={el.link} />);

    return <>
        <Grid addClass={styles.container} nb={2} nb_responsive={1} responsive_size={700} >

            {list}

        </Grid>
    </>
}