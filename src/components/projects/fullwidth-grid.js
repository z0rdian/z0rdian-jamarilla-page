import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import classes from './project.module.scss';
import ProjectFullwidthItem from './fullwidth-item';

function ProjectFullwidthGrid(props) {
    const { projects } = props;

    const [noOfElement, setNoOfElement] = useState(3);
    const slice = projects.slice(0, noOfElement);

    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    };

    return (
        <div className={classes.project}>
            <Container>
                <Row className='g-4'>
                    {slice.map((project) => {
                        return (
                            <ProjectFullwidthItem
                                key={project.slug}
                                project={project}
                            />
                        );
                    })}
                </Row>
                <div className={classes.project_btn__wrap}>
                    <button className={classes.loadmore_btn} onClick={loadMore}>
                        Load more
                    </button>
                </div>
            </Container>
        </div>
    );
}

export default ProjectFullwidthGrid;
