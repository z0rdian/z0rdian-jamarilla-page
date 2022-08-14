import { Col, Container, Row } from 'react-bootstrap';
import ServiceItem from '../services/service-item';
import classes from '../../components/services/service.module.scss';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';

SwiperCore.use([Pagination, Autoplay]);

function HomePageServices(props) {
    const { services, service_section__items } = props;

    const [swiper, setSwiper] = useState();
    const prevRef = useRef();
    const nextRef = useRef();

    useEffect(() => {
        if (swiper) {
            swiper.params.navigation.prevEl = prevRef.current;
            swiper.params.navigation.nextEl = nextRef.current;
            swiper.navigation.init();
            swiper.navigation.update();
        }
    }, [swiper]);

    return (
        <div className={classes.area}>
            <Container>
                {service_section__items.map((service_section__item, index) => {
                    return (
                        <div className={classes.section} key={index}>
                            <div className={classes.section_title}>
                                <span>{service_section__item?.subTitle}</span>
                                <h2
                                    dangerouslySetInnerHTML={{
                                        __html: service_section__item.title,
                                    }}
                                ></h2>
                            </div>
                            <div className={classes.section_banner}>
                                <h3
                                    className={classes.info}
                                    dangerouslySetInnerHTML={{
                                        __html: service_section__item.bannerInfo,
                                    }}
                                ></h3>
                            </div>
                        </div>
                    );
                })}
                <div className={classes.navigation__holder}>
                    <div className='service-navigation'>
                        <div className='button-next' ref={prevRef}>
                            <FaChevronLeft />
                        </div>
                        <div className='button-prev' ref={nextRef}>
                            <FaChevronRight />
                        </div>
                    </div>
                    <Row>
                        <Col lg={{ span: 12 }}>
                            <Swiper
                                // autoplay={{ delay: 4000, disableOnInteraction: false }}
                                pagination={false}
                                spaceBetween={30}
                                navigation={{
                                    prevEl: prevRef?.current,
                                    nextEl: nextRef?.current,
                                }}
                                onSwiper={setSwiper}
                                updateOnWindowResize
                                observer
                                observeParents
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 3,
                                    },
                                    768: {
                                        slidesPerView: 2,
                                    },
                                    576: {
                                        slidesPerView: 1,
                                    },
                                    0: {
                                        slidesPerView: 1,
                                    },
                                }}
                                className={classes.slider}
                            >
                                {services.map((service) => {
                                    return (
                                        <SwiperSlide key={service.slug}>
                                            <ServiceItem service={service} />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </Col>
                    </Row>
                </div>
            </Container>
        </div>
    );
}

export default HomePageServices;
