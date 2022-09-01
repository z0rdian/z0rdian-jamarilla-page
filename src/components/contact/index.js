import { Col, Container, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import Link from 'next/link';

function Contact({ contactItems }) {
    return (
        <main>
            {contactItems?.map((contactItem, i) => {
                return (
                    <Container key={i}>
                        <div className={classes.area}>
                            <Row>
                                <Col lg={{ span: 6 }}>
                                    <div className={classes.img_wrap}>
                                        <div className={classes.img}>
                                            <img
                                                className='img-full'
                                                src={contactItem?.image}
                                                alt={contactItem?.imageAlt}
                                            />
                                        </div>
                                        <div className={classes.pattern}>
                                            <img
                                                src={contactItem?.pattern}
                                                alt={contactItem?.patternAlt}
                                            />
                                        </div>
                                    </div>
                                </Col>
                                <Col lg={{ span: 6 }} className='ps-50'>
                                    <div className={classes.content}>
                                        <span className={classes.subtitle}>
                                            {contactItem?.subTitle}
                                        </span>
                                        <h2 className={classes.title}>
                                            {contactItem?.title}
                                        </h2>
                                        <p className={classes.desc}>
                                            {contactItem?.desc}
                                        </p>
                                        <div className={classes.info}>
                                            <h3 className={classes.info_title}>
                                                {contactItem?.addressTitle}
                                            </h3>
                                            <p className={classes.info_desc}>
                                                {contactItem?.addressDesc}
                                            </p>
                                        </div>
                                        <div className={classes.info}>
                                            <h3 className={classes.info_title}>
                                                {contactItem?.infoTitle}
                                            </h3>
                                            <ul className={classes.info_list}>
                                                {contactItem?.infoList?.map(
                                                    (item, index) => (
                                                        <li key={index}>
                                                            {item.listText}
                                                            <Link
                                                                href={item.path}
                                                            >
                                                                <a>
                                                                    {
                                                                        item.listValue
                                                                    }
                                                                </a>
                                                            </Link>
                                                        </li>
                                                    )
                                                )}
                                            </ul>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                        <div className={classes.form_area}>
                            <Row>
                                <Col lg={{ span: 6 }}>
                                    <h2 className={classes.form_title}>
                                        {contactItem?.formTitle}
                                    </h2>
                                    <p className={`${classes.form_desc} mb-0`}>
                                        {contactItem?.formDesc}
                                    </p>
                                    <form action="/thankyou" name="contacto" data-netlify="true" method="POST" className={classes.form}>
                                    <input type="hidden" name="form-name" value="contacto" />
                                        <div
                                            className={
                                                classes.form_group__input
                                            }
                                        >
                                            <input
                                                type='text'
                                                name='name'
                                                id='name'
                                                placeholder='Nombre'
                                                required
                                                className={`${classes.form_input__field} me-30`}
                                            ></input>
                                            <input
                                                type='email'
                                                name='email'
                                                id='email'
                                                placeholder='Email'
                                                required
                                                className={
                                                    classes.form_input__field
                                                }
                                            ></input>
                                        </div>
                                        <textarea
                                            type='text'
                                            name='text'
                                            id='text'
                                            placeholder='Mensaje'
                                            className={`${classes.form_textarea__field} mt-30`}
                                        ></textarea>
                                        <div className={classes.form_btn__wrap}>
                                            <button
                                                className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__primary}`}
                                                type='submit'
                                            >
                                                {contactItem?.btnText}
                                            </button>
                                        </div>
                                    </form>
                                </Col>
                                <Col lg={{ span: 6 }} className='ps-lg-50'>
                                    <div className='map_with__pattern'>
                                        <iframe
                                            className='map_size'
                                            src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d26254.663341913172!2d-58.50228155!3d-34.6589223!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x95bcc91bbfbf9d17%3A0xdb535b8d8548bdee!2sMataderos%2C%20CABA%2C%20Argentina!5e0!3m2!1ses-419!2sus!4v1660769344034!5m2!1ses-419!2sus'
                                        ></iframe>
                                        <div className='map_pattern'>
                                            <img
                                                src={contactItem?.mapPattern}
                                                alt={contactItem?.mapPatternAlt}
                                            ></img>
                                        </div>
                                    </div>
                                </Col>
                            </Row>
                        </div>
                    </Container>
                );
            })}
        </main>
    );
}

export default Contact;
