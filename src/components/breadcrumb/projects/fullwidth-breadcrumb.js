import { Container } from 'react-bootstrap';

function FullWidthBreadcrumb({ projectsBreadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {projectsBreadcrumb?.map((projectBreadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {projectBreadcrumb?.fullWidthSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {projectBreadcrumb?.fullWidthTitle}
                            </h1>
                            <p className='page_desc'>
                                {projectBreadcrumb?.fullWidthDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default FullWidthBreadcrumb;
