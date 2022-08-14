import { Col, Container, Row } from 'react-bootstrap';
import classes from '../team/team.module.scss';

import SwiperCore, { Navigation, Pagination, Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.css';
import Link from 'next/link';
import {
    FaShareAlt,
    FaFacebookF,
    FaTwitter,
    FaInstagram,
} from 'react-icons/fa';
import { IoAddOutline } from 'react-icons/io5';

SwiperCore.use([Navigation, Pagination, Autoplay]);

function Team({ teamItems, team_section__items }) {
    return (
        <div className={classes.area}>
            <Container>
                {team_section__items?.map((team_section__item, index) => {
                    return (
                        <div className={classes.section} key={index}>
                            <div className={classes.section__wrap}>
                                <div className={classes.section_title}>
                                    <span>{team_section__item?.subTitle}</span>
                                    <h2>{team_section__item?.title}</h2>
                                </div>
                                <div className={classes.section_desc}>
                                    <p
                                        dangerouslySetInnerHTML={{
                                            __html: team_section__item.desc,
                                        }}
                                    ></p>
                                </div>
                            </div>
                        </div>
                    );
                })}
                <Row>
                    <Col lg={{ span: 12 }}>
                        <Swiper
                            pagination={false}
                            spaceBetween={30}
                            slidesPerView={4}
                            loop={false}
                            breakpoints={{
                                1200: {
                                    slidesPerView: 4,
                                },
                                992: {
                                    slidesPerView: 3,
                                },
                                576: {
                                    slidesPerView: 2,
                                },
                                0: {
                                    slidesPerView: 1,
                                },
                            }}
                        >
                            {teamItems?.map((teamItem, i) => {
                                return (
                                    <SwiperSlide key={i}>
                                        <div className={classes.item}>
                                            <div className={classes.img}>
                                                <img
                                                    src={teamItem?.image}
                                                    alt={teamItem?.alt}
                                                    className='img-full'
                                                />
                                                <ul
                                                    className={
                                                        classes.add__action
                                                    }
                                                >
                                                    <li
                                                        className={
                                                            classes.social_link__wrap
                                                        }
                                                    >
                                                        <Link href='https://www.example.com'>
                                                            <a>
                                                                <FaShareAlt />
                                                            </a>
                                                        </Link>
                                                        <ul
                                                            className={
                                                                classes.social_link
                                                            }
                                                        >
                                                            <li>
                                                                <Link href='https://www.example.com'>
                                                                    <a>
                                                                        <FaFacebookF />
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='https://www.example.com'>
                                                                    <a>
                                                                        <FaTwitter />
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                            <li>
                                                                <Link href='https://www.example.com'>
                                                                    <a>
                                                                        <FaInstagram />
                                                                    </a>
                                                                </Link>
                                                            </li>
                                                        </ul>
                                                    </li>
                                                    <li
                                                        className={
                                                            classes.mail_link__wrap
                                                        }
                                                    >
                                                        <Link href='mailto://info@example.com'>
                                                            <a
                                                                className={
                                                                    classes.mail_link
                                                                }
                                                            >
                                                                <IoAddOutline />
                                                            </a>
                                                        </Link>
                                                    </li>
                                                </ul>
                                            </div>
                                            <div className={classes.content}>
                                                <h3
                                                    className={classes.title}
                                                    dangerouslySetInnerHTML={{
                                                        __html: teamItem?.teamTitle,
                                                    }}
                                                ></h3>
                                                <span
                                                    className={
                                                        classes.occupation
                                                    }
                                                >
                                                    {teamItem?.teamOccupation}
                                                </span>
                                            </div>
                                        </div>
                                    </SwiperSlide>
                                );
                            })}
                        </Swiper>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default Team;
