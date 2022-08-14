import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import Link from 'next/link';

function LoginRegister() {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <Col lg={{ span: 6 }}>
                        <form className={classes.form}>
                            <h2 className={classes.title}>Login</h2>
                            <Row>
                                <Col xs={{ span: 12 }}>
                                    <label className={classes.label}>
                                        Email Address*
                                    </label>
                                    <input
                                        className={classes.input}
                                        type='email'
                                        placeholder='Email Address'
                                    />
                                </Col>
                                <Col xs={{ span: 12 }}>
                                    <label className={classes.label}>
                                        Password
                                    </label>
                                    <input
                                        className={classes.input}
                                        type='password'
                                        placeholder='Password'
                                    />
                                </Col>
                                <Col md={{ span: 8 }}>
                                    <div className='check-box'>
                                        <input
                                            className={classes.checkbox}
                                            type='checkbox'
                                            id='remember_me'
                                        />
                                        <label
                                            className={classes.checkbox_label}
                                            htmlFor='remember_me'
                                        >
                                            Remember me
                                        </label>
                                    </div>
                                </Col>
                                <Col md={{ span: 4 }}>
                                    <div className={classes.forgotton_password}>
                                        <Link href='#' passHref>
                                            <a>Forgotten password?</a>
                                        </Link>
                                    </div>
                                </Col>
                                <Col xs={{ span: 12 }}>
                                    <button
                                        className={classes.btn}
                                        type='submit'
                                    >
                                        Login
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                    <Col lg={{ span: 6 }} className='pt-max-md-25'>
                        <form className={classes.form}>
                            <h2 className={classes.title}>Register</h2>
                            <Row>
                                <Col sm={{ span: 6 }}>
                                    <label className={classes.label}>
                                        First Name
                                    </label>
                                    <input
                                        className={classes.input}
                                        type='text'
                                        placeholder='First Name'
                                    />
                                </Col>
                                <Col sm={{ span: 6 }}>
                                    <label className={classes.label}>
                                        Last Name
                                    </label>
                                    <input
                                        className={classes.input}
                                        type='text'
                                        placeholder='Last Name'
                                    />
                                </Col>
                                <Col xs={{ span: 12 }}>
                                    <label className={classes.label}>
                                        Email Address*
                                    </label>
                                    <input
                                        className={classes.input}
                                        type='email'
                                        placeholder='Email Address'
                                    />
                                </Col>
                                <Col sm={{ span: 6 }}>
                                    <label className={classes.label}>
                                        Password
                                    </label>
                                    <input
                                        className={classes.input}
                                        type='password'
                                        placeholder='Password'
                                    />
                                </Col>
                                <Col sm={{ span: 6 }}>
                                    <label className={classes.label}>
                                        Confirm Password
                                    </label>
                                    <input
                                        className={classes.input}
                                        type='password'
                                        placeholder='Confirm Password'
                                    />
                                </Col>
                                <Col sm={{ span: 12 }}>
                                    <button
                                        className={classes.btn}
                                        type='submit'
                                    >
                                        Register
                                    </button>
                                </Col>
                            </Row>
                        </form>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LoginRegister;
