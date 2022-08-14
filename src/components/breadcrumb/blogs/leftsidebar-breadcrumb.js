import { Container } from 'react-bootstrap';

function LeftSidebarBreadcrumb({ blogsBreadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {blogsBreadcrumb?.map((blogBreadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {blogBreadcrumb?.leftSidebarSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {blogBreadcrumb?.leftSidebarTitle}
                            </h1>
                            <p className='page_desc'>
                                {blogBreadcrumb?.leftSidebarDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default LeftSidebarBreadcrumb;
