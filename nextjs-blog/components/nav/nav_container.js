import styles from './nav_container.module.css'
import Col from '../utils/col.js'
import Row from '../utils/row.js'

import Link_nav from './nav_button.js'

export default function nav_container(props){
    return <>
        <nav className={styles.nav_container}>
            <Row reset={true}>
                <Col size="8">
                    <figure>  
                        LOGO ICI
                    </figure>
                </Col>
                <Col size="4">
                    <Row reset={true}>
                        <Col center={true} size="6">
                            <Link_nav titre="About"></Link_nav>
                        </Col>
                        <Col center={true} size="6">
                            <Link_nav titre="Contact"></Link_nav>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </nav>
    </>
}