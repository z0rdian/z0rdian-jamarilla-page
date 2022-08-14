import { Container, Row } from 'react-bootstrap';
import ServiceSidebar from '../service-sidebar';
import classes from './index.module.scss';
import ServiceContent from './service-content';

function ServiceDetail(props) {
    return (
        <div className={classes.area}>
            <Container>
                <Row className='g-30'>
                    <ServiceContent
                        service={props.service}
                        richTexts={props.richTexts}
                        ourServices={props.ourServices}
                    />
                    <ServiceSidebar servicesSidebar={props.servicesSidebar} />
                </Row>
            </Container>
        </div>
    );
}

export default ServiceDetail;
