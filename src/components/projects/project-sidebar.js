import { Col } from 'react-bootstrap';
import classes from './project.module.scss';
import Link from 'next/link';

function ProjectSidebar({ projectsSidebar }) {
    return (
        <Col lg={{ span: 3 }}>
            {projectsSidebar?.map((projectSidebar, i) => {
                return (
                    <div className='sidebar pt-max-md-25' key={i}>
                        <div className={`${classes.sidebar_widget} mb-30`}>
                            <h2 className={classes.sidebar_widget__title}>
                                {projectSidebar?.title}
                            </h2>
                            <ul className={classes.sidebar_list}>
                                {projectSidebar?.sidebarList?.map(
                                    (item, index) => {
                                        return (
                                            <li
                                                dangerouslySetInnerHTML={{
                                                    __html: item.listItem,
                                                }}
                                                key={index}
                                            ></li>
                                        );
                                    }
                                )}
                            </ul>
                        </div>
                        <div
                            className={`${classes.sidebar_brochure__widget}  mb-30`}
                        >
                            <ul className={`${classes.sidebar_brochure__list}`}>
                                {projectSidebar?.downloadBrochure?.map(
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
                                src={projectSidebar?.widgetBanner}
                                alt={projectSidebar?.widgetBannerAlt}
                            />
                        </div>
                    </div>
                );
            })}
        </Col>
    );
}

export default ProjectSidebar;
