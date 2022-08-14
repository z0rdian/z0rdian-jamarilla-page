import { Container } from 'react-bootstrap';

function RightSidebarBreadcrumb({ blogsBreadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {blogsBreadcrumb?.map((blogBreadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {blogBreadcrumb?.rightSidebarSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {blogBreadcrumb?.rightSidebarTitle}
                            </h1>
                            <p className='page_desc'>
                                {blogBreadcrumb?.rightSidebarDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default RightSidebarBreadcrumb;
