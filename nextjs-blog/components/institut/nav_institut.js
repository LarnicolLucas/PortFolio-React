import styles from './nav_institut.module.sass'
import Block_institut from './block_institut.js'

import Grid from '../utils/grid/grid.js'


export default function Nav_institut() {

    const size_responsive = 700

    const list = [
        {id: 0, label: "Epilation", responsive: 1, pos: [1,1], src: "/images/peau-line/epilation_2.svg", alt: "Pince à épiler", description: "Texte de description ICI"},
        {id: 1, label: "Manucure", responsive: 2, pos: [1,2], src: "/images/peau-line/vernis2.svg", alt: "Vernis", description: "Texte de description ICI"},
        {id: 2, label: "Visage", responsive: 3, pos: [1,3], src: "/images/peau-line/visage.svg", alt: "Profil de Femme", description: "Texte de description ICI"},
        {id: 3, label: "Corp", responsive: 4, pos: [2,1], src: "/images/peau-line/corp.svg", alt: "Corp de Femme", description: "Texte de description ICI"},
        {id: 4, label: "Marques", responsive: 5, pos: [2,2], src: "/images/peau-line/marques.svg", alt: "Logo", description: "Texte de description ICI"},
        {id: 5, label: "Maquillage", responsive: 6, pos: [2,3], src: "/images/peau-line/maquillage.svg", alt: "Rouge à lèvre", description: "Texte de description ICI"}
    ];

    const block_list = list.map(el => <Block_institut 
        key={el.id} 
        src={el.src} 
        label= {el.label} 
        col={el.pos[1]} 
        row={el.pos[0]} 
        responsive={el.responsive}
        size_responsive={size_responsive}
        description={el.description}
    />);

    return (
        <>
            <Grid 
                addClass={styles.container} 
                nb={3}
                nb_responsive={1}
                responsive_size= {size_responsive}
            >
                {block_list}
            </Grid>
        </>
    )
}