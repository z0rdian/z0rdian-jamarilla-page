import { Container } from 'react-bootstrap';

function AboutBreadcrumb({ aboutItems }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {aboutItems?.map((aboutItem, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {aboutItem?.breadcrumbSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {aboutItem?.breadcrumbTitle}
                            </h1>
                            <p className='page_desc'>
                                {aboutItem?.breadcrumbDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default AboutBreadcrumb;
