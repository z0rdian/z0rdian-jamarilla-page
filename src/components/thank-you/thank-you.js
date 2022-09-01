import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';

function Thankyou() {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <Col xs={{ span: 12 }}>
                        <div className={classes.content}>
                            <h1 className={classes.title}>¡Gracias!</h1>
                            <br></br>
                            <h2 className={classes.subtitle}>
                            ¡Será un placer trabajar en conjunto!
                            </h2>
                            <br></br>
                            <p className={classes.desc}>
                                Nos contactaremos en las proximas horas. 
                            </p>
                            <div className={`${classes.btn_wrap}`}>
                                <Link href='/'>
                                    <a
                                        className={`${classes.btn} ${classes.btn_primary} ${classes.btn_hover__secondary}`}
                                    >
                                        Volver al Sitio
                                    </a>
                                </Link>
                            </div>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Thankyou;
