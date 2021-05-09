import styles from './nav_institut.module.sass'
import Block_institut from './block_institut.js'


export default function Nav_institut() {

    const list = [
        {id: 0, label: "Epilation", col: "1", row: "1", src: "/images/peau-line/epilation_2.svg", alt: "Pince à épiler"},
        {id: 1, label: "Manucure", col: "2", row: "1", src: "/images/peau-line/vernis2.svg", alt: "Vernis"},
        {id: 2, label: "Visage", col: "3", row: "1", src: "/images/peau-line/visage.svg", alt: "Profil de Femme"},
        {id: 0, label: "Corp", col: "1", row: "2", src: "/images/peau-line/corp.svg", alt: "Corp de Femme"},
        {id: 1, label: "Marques", col: "2", row: "2", src: "/images/peau-line/marques.svg", alt: "Logo"},
        {id: 2, label: "Maquillage", col: "3", row: "2", src: "/images/peau-line/maquillage.svg", alt: "Rouge à lèvre"}
    ];

    const block_list = list.map(el => <Block_institut key={el.id} src={el.src} label= {el.label} col={el.col} row={el.row} />)

    return (
        <>
            <section className={styles.container}>
                {block_list}
            </section>
        </>
    )
}