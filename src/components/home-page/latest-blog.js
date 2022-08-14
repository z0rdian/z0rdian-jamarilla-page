// import Link from 'next/link';
import { Col, Container, Row } from 'react-bootstrap';
import classes from '../home-page/latest-blog.module.scss';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import SwiperCore, { Pagination, Autoplay } from 'swiper';
import LatestBlogItem from '../blogs/latest-blog-item';

SwiperCore.use([Pagination, Autoplay]);

function LatestBlog(props) {
    const { blogs, blog_section__items } = props;

    return (
        <div className={classes.area}>
            <Container>
                {blog_section__items?.map((blog_section__item, index) => {
                    return (
                        <div className={classes.section__holder} key={index}>
                            <div className={classes.section_title__wrap}>
                                <div className={classes.section_title}>
                                    <span className={classes.sub_title}>
                                        {blog_section__item?.subTitle}
                                    </span>
                                    <h2 className={classes.title}>
                                        {blog_section__item?.title}
                                    </h2>
                                </div>
                                <p className={classes.section_desc}>
                                    {blog_section__item?.excerpt}
                                </p>
                            </div>
                        </div>
                    );
                })}
                <Row>
                    <Col lg={{ span: 12 }}>
                        <div className={classes.slider}>
                            <Swiper
                                // autoplay={{ delay: 4000, disableOnInteraction: false }}
                                pagination={false}
                                spaceBetween={30}
                                updateOnWindowResize
                                observer
                                observeParents
                                breakpoints={{
                                    1200: {
                                        slidesPerView: 3,
                                    },
                                    992: {
                                        slidesPerView: 2,
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
                            >
                                {blogs.map((blog) => {
                                    return (
                                        <SwiperSlide
                                            className={classes.blog__item}
                                            key={blog.slug}
                                        >
                                            <LatestBlogItem blog={blog} />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default LatestBlog;
