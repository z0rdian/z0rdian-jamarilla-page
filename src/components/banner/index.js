import { Col, Container, Row } from 'react-bootstrap';
import classes from '../banner/banner.module.scss';

function BannerOne({ bannerItems }) {
    return (
        <div className={classes.area}>
            <Container>
                <Row className='g-4'>
                    {bannerItems?.map((bannerItem, i) => {
                        return (
                            <Col lg={{ span: 4 }} md={{ span: 6 }} key={i}>
                                <div
                                    className={`${bannerItem.bannerBG
                                        .split(' ')
                                        .map((item) => classes[item])
                                        .join(' ')}`}
                                >
                                    <div className={classes.content}>
                                        <h2 className={classes.title}>
                                            {bannerItem?.title}
                                        </h2>
                                        <p className={classes.desc}>
                                            {bannerItem?.desc}
                                        </p>
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

export default BannerOne;
