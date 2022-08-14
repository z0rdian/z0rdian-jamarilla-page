import { Container } from 'react-bootstrap';

function FullWidthBreadcrumb({ blogsBreadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {blogsBreadcrumb?.map((blogBreadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {blogBreadcrumb?.fullWidthSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {blogBreadcrumb?.fullWidthTitle}
                            </h1>
                            <p className='page_desc'>
                                {blogBreadcrumb?.fullWidthDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default FullWidthBreadcrumb;
