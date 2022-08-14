import ProjectTwoColumnsGrid from './two-columns-grid';

function ProjectTwoColumns(props) {
    const { projects } = props;
    return <ProjectTwoColumnsGrid projects={projects} />;
}

export default ProjectTwoColumns;
