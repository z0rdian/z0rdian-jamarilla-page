import Link from 'next/link';
import { Col } from 'react-bootstrap';
import classes from '../services/service.module.scss';

function ServiceSidebar({ servicesSidebar }) {
    return (
        <Col lg={{ span: 3 }}>
            {servicesSidebar?.map((serviceSidebar, i) => {
                return (
                    <div className='sidebar' key={i}>
                        <div className={`${classes.sidebar_widget} mb-30`}>
                            <ul className={classes.sidebar_list}>
                                {serviceSidebar?.sidebarList?.map(
                                    (item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={item?.path}>
                                                    <a download>
                                                        {item?.listText}
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                        <div
                            className={`${classes.sidebar_brochure__widget}  mb-30`}
                        >
                            <ul className={`${classes.sidebar_brochure__list}`}>
                                {serviceSidebar?.downloadBrochure?.map(
                                    (item, index) => {
                                        return (
                                            <li key={index}>
                                                <Link href={item?.path}>
                                                    <a download>
                                                        {item?.listItem}
                                                    </a>
                                                </Link>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                        <div className={`${classes.sidebar_widget__banner}`}>
                            <img
                                src={serviceSidebar?.widgetBanner}
                                alt={serviceSidebar?.widgetBannerAlt}
                            />
                        </div>
                    </div>
                );
            })}
        </Col>
    );
}

export default ServiceSidebar;
