import styles from './nav_institut.module.sass'
import Block_institut from './block_institut.js'
import Basket from './basket/basket.js'

import {useState} from 'react'

import Grid from '../utils/grid/grid.js'


export default function Nav_institut() {

    const size_responsive = 700;

    const [listBasket, setListBasket] = useState([]);

    const handleState = (Object_item)=> listBasket.filter(el => el.item == Object_item.item).length === 0 ?
        setListBasket(listBasket.concat(Object_item)) :
        setListBasket(listBasket.map(el => Object_item.item == el.item ? 
            Object.assign({}, el, {qty: el.qty + 1, price: el.price+ Object_item.price}) :
            el
        ))

    const list = [
        {id: 0, price: 40, label: "Epilation", responsive: 1, pos: [1,1], src: "/images/peau-line/epilation_2.svg", alt: "Pince à épiler", description: "Texte de description ICI"},
        {id: 1, price: 60, label: "Manucure", responsive: 2, pos: [1,2], src: "/images/peau-line/vernis2.svg", alt: "Vernis", description: "Texte de description ICI"},
        {id: 2, price: 100, label: "Visage", responsive: 3, pos: [1,3], src: "/images/peau-line/visage.svg", alt: "Profil de Femme", description: "Texte de description ICI"},
        {id: 3, price: 150, label: "Corp", responsive: 4, pos: [2,1], src: "/images/peau-line/corp.svg", alt: "Corp de Femme", description: "Texte de description ICI"},
        {id: 4, price: 250, label: "Marques", responsive: 5, pos: [2,2], src: "/images/peau-line/marques.svg", alt: "Logo", description: "Texte de description ICI"},
        {id: 5, price: 300, label: "Maquillage", responsive: 6, pos: [2,3], src: "/images/peau-line/maquillage.svg", alt: "Rouge à lèvre", description: "Texte de description ICI"}
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
        price={el.price}
        upState={handleState}
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
            <Basket list={listBasket}/>
        </>
    )
}