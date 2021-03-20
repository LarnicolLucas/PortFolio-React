import styles from './nav_container.module.css'
import Col from '../utils/col.js'
import Row from '../utils/row.js'

export default function nav_container(props){
    return <>
        <nav>
            <Row>
                <Col size="8">
                    <figure>  
                        LOGO ICI
                    </figure>
                </Col>
                <Col size="4">
                    <section>
                        <Row>
                            <Col size="4">
                                <a>About</a>
                            </Col>
                            <Col size="4">
                                <a>Contact</a>
                            </Col>
                        </Row>
                    </section>
                </Col>
            </Row>
        </nav>
    </>
}