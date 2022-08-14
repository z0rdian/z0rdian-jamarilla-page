import { Col, Container, Row } from 'react-bootstrap';
import classes from '../banner/banner-2.module.scss';
import Link from 'next/link';

function BannerTwo({ bannerTwoItems }) {
    return (
        <div className={classes.bg}>
            <Container fluid className='px-0'>
                {bannerTwoItems?.map((bannerTwoItem, i) => {
                    return (
                        <Row className='g-0' key={i}>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.image}>
                                    <img
                                        src={bannerTwoItem?.image}
                                        alt={bannerTwoItem?.alt}
                                        className='img-full'
                                    />
                                </div>
                            </Col>
                            <Col lg={{ span: 6 }}>
                                <div className={classes.with__sticker}>
                                    <div className={classes.content}>
                                        <span className={classes.sub_title}>
                                            {bannerTwoItem?.subTitle}
                                        </span>
                                        <h2
                                            className={classes.title}
                                            dangerouslySetInnerHTML={{
                                                __html: bannerTwoItem.title,
                                            }}
                                        ></h2>
                                        <p className={classes.desc}>
                                            {bannerTwoItem?.desc}
                                        </p>
                                        <div className={classes.hero_btn__wrap}>
                                            <Link href='/projects'>
                                                <a
                                                    className={`me-20 ${classes.btn} ${classes.btn_primary} ${classes.btn_hover__white}`}
                                                >
                                                    Learn More
                                                </a>
                                            </Link>
                                        </div>
                                    </div>
                                    <div className={classes.sticker}>
                                        <img
                                            src={bannerTwoItem?.stickerImage}
                                            alt={bannerTwoItem?.stickerAlt}
                                            className='img-full'
                                        />
                                    </div>
                                </div>
                            </Col>
                        </Row>
                    );
                })}
            </Container>
        </div>
    );
}

export default BannerTwo;
