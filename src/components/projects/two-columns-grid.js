import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import classes from './project.module.scss';
import ProjectTwoColumnsItem from './two-columns-item';

function ProjectTwoColumnsGrid(props) {
    const { projects } = props;

    const [noOfElement, setNoOfElement] = useState(2);
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
                            <ProjectTwoColumnsItem
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

export default ProjectTwoColumnsGrid;
