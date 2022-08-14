import Link from 'next/link';
import classes from '../brand/brand.module.scss';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import { Container } from 'react-bootstrap';

SwiperCore.use([Pagination, Autoplay]);

function BrandOne({ brandItems }) {
    return (
        <div className={`${classes.bg} ${classes.space__top}`}>
            <Container>
                <Swiper
                    // autoplay={{
                    //     delay: 4000,
                    //     disableOnInteraction: false,
                    // }}
                    pagination={false}
                    loop={false}
                    breakpoints={{
                        1200: {
                            slidesPerView: 5,
                            slidesPerColumn: 2,
                            slidesPerGroup: 1,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 100,
                        },
                        768: {
                            slidesPerView: 4,
                            slidesPerColumn: 2,
                            slidesPerGroup: 1,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 100,
                        },
                        576: {
                            slidesPerView: 3,
                            slidesPerColumn: 2,
                            slidesPerGroup: 1,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 30,
                        },
                        480: {
                            slidesPerView: 2,
                            slidesPerColumn: 2,
                            slidesPerGroup: 1,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 30,
                        },
                        0: {
                            slidesPerView: 1,
                            slidesPerColumn: 1,
                            slidesPerGroup: 1,
                            slidesPerColumnFill: 'row',
                            spaceBetween: 30,
                        },
                    }}
                >
                    {brandItems?.map((brandItem, i) => {
                        return (
                            <SwiperSlide key={i}>
                                <Link href='/'>
                                    <a className={classes.item}>
                                        <img
                                            src={brandItem?.image}
                                            alt={brandItem?.imageAlt}
                                        />
                                    </a>
                                </Link>
                            </SwiperSlide>
                        );
                    })}
                </Swiper>
            </Container>
        </div>
    );
}

export default BrandOne;
