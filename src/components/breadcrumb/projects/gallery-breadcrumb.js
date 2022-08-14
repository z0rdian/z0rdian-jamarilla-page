import { Container } from 'react-bootstrap';

function GalleryBreadcrumb({ projectsBreadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {projectsBreadcrumb?.map((projectBreadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {projectBreadcrumb?.gallerySubtitle}
                            </span>
                            <h1 className='page_title'>
                                {projectBreadcrumb?.galleryTitle}
                            </h1>
                            <p className='page_desc'>
                                {projectBreadcrumb?.galleryDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default GalleryBreadcrumb;
