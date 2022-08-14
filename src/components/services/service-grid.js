import ServiceItem from './service-item';
import { Fragment } from 'react';

function ServiceGrid(props) {
    const { services } = props;

    return (
        <Fragment>
            {services.map((service) => {
                return <ServiceItem key={service.slug} service={service} />;
            })}
        </Fragment>
    );
}

export default ServiceGrid;
