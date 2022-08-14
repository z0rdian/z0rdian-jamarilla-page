import { Container, Row } from 'react-bootstrap';
import classes from '../project-detail/index.module.scss';
import ProjectSidebar from '../project-sidebar';
import ProjectContent from './project-content';

function ProjectDetail(props) {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <ProjectContent
                        project={props.project}
                        richTexts={props.richTexts}
                        projectsOverview={props.projectsOverview}
                    />
                    <ProjectSidebar projectsSidebar={props.projectsSidebar} />
                </Row>
            </Container>
        </div>
    );
}

export default ProjectDetail;
