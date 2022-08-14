import { Col, Container, Row } from 'react-bootstrap';
import classes from '../about/about.module.scss';
import * as FaIcons from 'react-icons/fa';

function AboutOne({ aboutItems }) {
    return (
        <div className={classes.area}>
            {aboutItems?.map((aboutItem, i) => {
                const CheckIcon = FaIcons[aboutItem?.checkIcon];
                return (
                    <Container key={i}>
                        <div className={classes.section}>
                            <div className={classes.section__wrap}>
                                <div className={classes.section__title}>
                                    <span>{aboutItem?.sectionSubtitle}</span>
                                    <h2>{aboutItem?.sectionTitle}</h2>
                                </div>
                                <p
                                    className={classes.section__desc}
                                    dangerouslySetInnerHTML={{
                                        __html: aboutItem.sectionDesc,
                                    }}
                                ></p>
                            </div>
                        </div>
                        <Row>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.img__wrap}>
                                    <div className={classes.pattern}>
                                        <img
                                            src={aboutItem?.pattern}
                                            alt={aboutItem?.patternAlt}
                                        />
                                    </div>
                                    <div className={classes.img}>
                                        <img
                                            src={aboutItem?.image}
                                            alt={aboutItem?.alt}
                                            className='img-full'
                                        />
                                    </div>
                                </div>
                            </Col>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.content}>
                                    <div className={classes.experience}>
                                        <div
                                            className={
                                                classes.experience_content
                                            }
                                        >
                                            <span className={classes.year}>
                                                {aboutItem?.experienceYear}
                                            </span>
                                            <h2
                                                className={classes.our_progress}
                                                dangerouslySetInnerHTML={{
                                                    __html: aboutItem.ourProgress,
                                                }}
                                            ></h2>
                                        </div>
                                        <div className={classes.experience_img}>
                                            <img
                                                src={aboutItem?.experienceImage}
                                                alt={aboutItem?.experienceAlt}
                                            ></img>
                                        </div>
                                    </div>
                                    <h3 className={classes.subtitle}>
                                        {aboutItem?.aboutSubtitle}
                                    </h3>
                                    <p className={classes.desc}>
                                        {aboutItem.aboutDesc}
                                    </p>
                                    <ul className={classes.list__item}>
                                        {aboutItem?.listItem?.map((item, i) => (
                                            <li
                                                className={classes.list}
                                                key={i}
                                            >
                                                <span
                                                    className={
                                                        classes.list__icon
                                                    }
                                                >
                                                    <CheckIcon />
                                                </span>
                                                <div
                                                    className={
                                                        classes.list__text
                                                    }
                                                >
                                                    <span>{item}</span>
                                                </div>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </Col>
                        </Row>
                    </Container>
                );
            })}
        </div>
    );
}

export default AboutOne;
