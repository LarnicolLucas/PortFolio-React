import styles from './basket.module.sass'
import {useEffect, useState} from 'react'


export default function Basket(props){

    const [scrolled, setScrolled] = useState("");
    const [openMenu, setOpenMenu] = useState(false);

    const scrollAction = (e)=> window.scrollY > 0 ? setScrolled(styles.scrolled) : setScrolled("");

    useEffect(()=> {
            window.addEventListener('scroll', scrollAction);
            return () => window.removeEventListener('scroll', scrollAction);
        }
    );

    const basketStyle = {
        width: openMenu ? "20em" : "5em"
    };
    const basketStyleGrid = {
        display: openMenu ? "grid" : "none"
    };

    const openClose = () => openMenu ? setOpenMenu(false) : setOpenMenu(true)

    const list = props.list.map(el => <>
        <section className={styles.raw+" "+styles.col0}>
             {el.qty} </section>
        <section className={styles.raw+" "+styles.col1}> {el.item} </section>
        <section className={styles.raw+" "+styles.col2}> {el.price} $ </section>
    </>);

    const total = props.list.reduce((acc, cur)=> Object.assign({}, {
        qty: acc.qty + cur.qty,
        price: acc.price + cur.price,
    }), {qty: 0, price: 0});


    return <>
        <aside className={styles.container+" "+scrolled} style={basketStyle}>

            <img style={{width: "30px", cursor: "pointer"}} src="/images/peau-line/basket.svg" onClick={openClose} />
            
            <section className={styles.gridContainer} style={basketStyleGrid}>

                <section className={styles.raw}>
                    Qty
                </section>
                <section className={styles.raw}>
                    item
                </section>
                <section className={styles.raw}>
                    $
                </section>

                {list}

                <section className={styles.raw}>
                    {total.qty}
                </section>
                <section className={styles.raw}>
                    
                </section>
                <section className={styles.raw}>
                    {total.price} $
                </section>

                <div className={styles.buy}><strong>Buy</strong></div>

            </section>


        </aside>
    </>
}