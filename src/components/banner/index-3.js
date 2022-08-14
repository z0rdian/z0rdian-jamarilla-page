import { Col, Container, Row } from 'react-bootstrap';
import classes from './banner-3.module.scss';

import Link from 'next/link';
import { IoArrowForwardOutline } from 'react-icons/io5';

function BannerThree({ bannerThreeItems }) {
    return (
        <div className='banner_area'>
            <Container>
                <Row className='g-30'>
                    {bannerThreeItems?.map((bannerThreeItem, i) => {
                        return (
                            <Col lg={{ span: 4 }} md={{ span: 6 }} key={i}>
                                <div
                                    className={bannerThreeItem.dynamicClassName
                                        .split(' ')
                                        .map((item) => classes[item])
                                        .join(' ')}
                                >
                                    <div
                                        className={classes.content}
                                        data-count={`${bannerThreeItem?.dataCount}`}
                                    >
                                        <h2 className={classes.title}>
                                            {bannerThreeItem?.title}
                                        </h2>
                                        <p className={classes.desc}>
                                            {bannerThreeItem?.excerpt}
                                        </p>
                                        <Link href={`${bannerThreeItem.path}`}>
                                            <a className={classes.link__btn}>
                                                {bannerThreeItem?.btnText}
                                                <span className={classes.icon}>
                                                    <IoArrowForwardOutline />
                                                </span>
                                            </a>
                                        </Link>
                                    </div>
                                </div>
                            </Col>
                        );
                    })}
                </Row>
            </Container>
        </div>
    );
}

export default BannerThree;
