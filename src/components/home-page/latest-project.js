import Link from 'next/link';
import { Container } from 'react-bootstrap';
import classes from '../home-page/latest-project.module.scss';

import 'swiper/swiper-bundle.css';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState, useEffect, useRef } from 'react';
import SwiperCore, { Pagination, Autoplay, Navigation } from 'swiper';
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa';
import ProjectSlider from '../projects/project-slider';

SwiperCore.use([Pagination, Autoplay, Navigation]);

function LatestProject(props) {
    const { projects, project_section__items } = props;

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
        <div>
            <div className={classes.bg}>
                <div className={classes.btn__wrap}>
                    <Link href='/projects'>
                        <a className={classes.btn}>
                            <span>View More</span>
                        </a>
                    </Link>
                </div>
                <Container fluid className='px-0'>
                    <div className={classes.slider_with__section}>
                        <div className={classes.section_area}>
                            <div className={classes.section_with__navigation}>
                                <div className={classes.section_title__wrap}>
                                    {project_section__items?.map(
                                        (project_section__item, index) => {
                                            return (
                                                <div
                                                    key={index}
                                                    className={
                                                        classes.section_title
                                                    }
                                                >
                                                    <span>
                                                        {
                                                            project_section__item?.subTitle
                                                        }
                                                    </span>
                                                    <h2
                                                        dangerouslySetInnerHTML={{
                                                            __html: project_section__item?.title,
                                                        }}
                                                    ></h2>
                                                </div>
                                            );
                                        }
                                    )}
                                </div>
                                <div className={classes.section_navigation}>
                                    <div
                                        className={classes.button_next}
                                        ref={prevRef}
                                    >
                                        <FaChevronLeft />
                                    </div>
                                    <div
                                        className={classes.button_prev}
                                        ref={nextRef}
                                    >
                                        <FaChevronRight />
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className={classes.slider}>
                            <Swiper
                                // autoplay={{ delay: 4000, disableOnInteraction: false }}
                                pagination={false}
                                spaceBetween={0}
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
                                {projects.map((project) => {
                                    return (
                                        <SwiperSlide
                                            className={classes.item}
                                            key={project.slug}
                                        >
                                            <ProjectSlider project={project} />
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>
                        </div>
                    </div>
                </Container>
            </div>
        </div>
    );
}

export default LatestProject;
