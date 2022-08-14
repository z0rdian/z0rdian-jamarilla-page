import { useState } from 'react';
import { Container, Row } from 'react-bootstrap';
import classes from './project.module.scss';
import ProjectGalleryItem from './gallery-item';

function ProjectGalleryGrid(props) {
    const { projects } = props;

    const [noOfElement, setNoOfElement] = useState(3);
    const slice = projects.slice(0, noOfElement);

    const loadMore = () => {
        setNoOfElement(noOfElement + noOfElement);
    };

    return (
        <div className={classes.project}>
            <Container>
                <Row className='g-0 g-max-30'>
                    {slice.map((project) => {
                        return (
                            <ProjectGalleryItem
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

export default ProjectGalleryGrid;
