import ProjectGalleryGrid from './gallery-grid';

function ProjectGallery(props) {
    const { projects } = props;
    return <ProjectGalleryGrid projects={projects} />;
}

export default ProjectGallery;
