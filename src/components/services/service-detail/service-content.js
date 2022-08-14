import { Col } from 'react-bootstrap';
import RichText from '../../rich-text';
import classes from './index.module.scss';
import OurServices from './our-services';

function ServiceContent(props) {
    const { service } = props;

    const { largeImage, slug } = props.service;
    const imagePath = `/images/services/${slug}/${largeImage}`;

    return (
        <Col lg={{ span: 9 }} className='pe-lg-45'>
            <div className='banner'>
                <img
                    className='img-full'
                    src={imagePath}
                    alt={service?.title}
                />
            </div>
            <div className={classes.content}>
                <h2 className={classes.title}>{service?.title}</h2>
                <h3 className={classes.subtitle}>{service?.detailSubTitle}</h3>
                <p className={classes.desc}>{service?.detailDesc}</p>
            </div>
            <RichText richTexts={props.richTexts} />
            <OurServices ourServices={props.ourServices} />
        </Col>
    );
}

export default ServiceContent;
