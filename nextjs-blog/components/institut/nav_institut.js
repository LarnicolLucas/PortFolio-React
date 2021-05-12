import styles from './nav_institut.module.sass'
import Block_institut from './block_institut.js'


export default function Nav_institut() {

    const list = [
        {id: 0, label: "Epilation", pos: [1,1], src: "/images/peau-line/epilation_2.svg", alt: "Pince à épiler"},
        {id: 1, label: "Manucure", pos: [1,2], src: "/images/peau-line/vernis2.svg", alt: "Vernis"},
        {id: 2, label: "Visage", pos: [1,3], src: "/images/peau-line/visage.svg", alt: "Profil de Femme"},
        {id: 3, label: "Corp", pos: [2,1], src: "/images/peau-line/corp.svg", alt: "Corp de Femme"},
        {id: 4, label: "Marques", pos: [2,2], src: "/images/peau-line/marques.svg", alt: "Logo"},
        {id: 5, label: "Maquillage", pos: [2,3], src: "/images/peau-line/maquillage.svg", alt: "Rouge à lèvre"}
    ];

    const block_list = list.map(el => <Block_institut key={el.id} src={el.src} label= {el.label} col={el.pos[1]} row={el.pos[0]} />)

    return (
        <>
            <section className={styles.container}>
                {block_list}
            </section>
        </>
    )
}