import styles from './portfolio.module.sass'
import Card from './card.js'
import Image from 'next/image'
import { useRef, useState } from 'react';

export default function Portfolio(props){

    const list = [
        {
            id: 0,
            title: "OpenData",
            src: "/images/portfolio/producteur.png",
            description: "Data analyse from OpenData website.",
            link: "https://main.dv3k8sumz2a23.amplifyapp.com/"
        },
        {
            id: 1,
            title: "Manage App",
            src: "/images/portfolio/manage.png",
            description: "SandBox WEB app for store managing",
            link: "https://manage-iota.vercel.app/"
        },
        {
            id: 2,
            title: "Dashboard",
            src: "/images/portfolio/dashboard.png",
            description: "Dashboard bind with data from Data Base. Glassmorphism UI",
            link: "/dashboard"
        },
        {
            id: 3,
            title: "Blog",
            src: "/images/portfolio/blog.png",
            description: "Home Made Blog with CRUD API",
            link: "/blog"
        },
        {
            id: 4,
            title: "Login",
            src: "/images/portfolio/login.png",
            description: "Modular Login with BackEnd MongoDB environement.",
            link: "/login"
        },
        {
            id: 5,
            title: "SPA",
            src: "/images/portfolio/institut.png",
            description: "Single Page Application for showcase site - French Beauty Institut",
            link: "/institut"
        },
    
        
    ];

    const refList = list.map(el=> useRef())

    const domList = list.map(el => <Card 
        key={el.id} 
        src={el.src} 
        title={el.title} 
        description={el.description} 
        link={el.link} 
        refCompo={refList[el.id]}
    />);

    const emptyCard = <article style={{margin: "7rem 0 0 15rem"}}></article>

    const [count, setCount]= useState(0);

    //const scrollView = (element) => element.scrollIntoView({behavior: "smooth"});
    const scrollView = (direction) => {
        const newCount = (direction * 1) + count;
        const targetDom = refList[newCount];

        if(targetDom === undefined) return
        targetDom.current.scrollIntoView({behavior: "smooth", block: "center", inline: "center"});
        setCount(newCount);
    };

    return <>
        <section className={styles.container_}>

            <header>
                <h1 className={styles.title}>
                    Portfolio
                </h1>
            </header>
            <section className={styles.caroussel}>

                {emptyCard}
                {domList}
                {emptyCard}

                <figure className={styles.direction} style={{left: "6rem"}} onClick={()=> scrollView(-1)}>
                    <Image src="/images/portfolio/left.svg" layout="fill" />
                </figure>
                <figure className={styles.direction} style={{right: "6rem"}} onClick={()=> scrollView(1)}>
                    <Image src="/images/portfolio/right.svg" layout="fill" />
                </figure>

            </section>

        </section>
    </>
}