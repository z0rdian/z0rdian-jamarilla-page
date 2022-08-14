import { Col, Row } from 'react-bootstrap';
import classes from './index.module.scss';
import * as FaIcons from 'react-icons/fa';

function ProjectOverview({ projectsOverview }) {
    return (
        <div className={classes.item}>
            {projectsOverview?.map((projectOverview, index) => {
                return (
                    <Row key={index}>
                        <Col lg={{ span: 12 }}>
                            <h2 className={classes.title}>
                                {projectOverview?.title}
                            </h2>
                            <p className={classes.desc}>
                                {projectOverview?.desc}
                            </p>
                            <ul className={classes.list}>
                                {projectOverview?.listItem?.map(
                                    (item, index) => {
                                        const Social = FaIcons[item.checkIcon];
                                        return (
                                            <li key={index}>
                                                <div
                                                    className={
                                                        classes.list_icon
                                                    }
                                                >
                                                    <Social />
                                                </div>
                                                <div
                                                    className={
                                                        classes.list_text
                                                    }
                                                >
                                                    <span>{item.text}</span>
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                            <div className={classes.image}>
                                <img
                                    src={projectOverview?.image}
                                    alt={projectOverview?.imageAlt}
                                />
                            </div>
                            <h2 className={classes.handover_title}>
                                {projectOverview?.handoverTitle}
                            </h2>
                            <p className={classes.handover_desc}>
                                {projectOverview?.handoverDesc}
                            </p>
                            <p className={classes.handover_desc}>
                                {projectOverview?.additionDesc}
                            </p>
                            <ul className={classes.list}>
                                {projectOverview?.handoverListItem?.map(
                                    (item, index) => {
                                        const Social = FaIcons[item.checkIcon];
                                        return (
                                            <li key={index}>
                                                <div
                                                    className={
                                                        classes.list_icon
                                                    }
                                                >
                                                    <Social />
                                                </div>
                                                <div
                                                    className={
                                                        classes.list_text
                                                    }
                                                >
                                                    <span>{item.text}</span>
                                                </div>
                                            </li>
                                        );
                                    }
                                )}
                            </ul>
                        </Col>
                    </Row>
                );
            })}
        </div>
    );
}

export default ProjectOverview;
