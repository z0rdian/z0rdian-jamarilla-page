import { Container } from 'react-bootstrap';

function TwoColumnsBreadcrumb({ projectsBreadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {projectsBreadcrumb?.map((projectBreadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {projectBreadcrumb?.twoColumnsSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {projectBreadcrumb?.twoColumnsTitle}
                            </h1>
                            <p className='page_desc'>
                                {projectBreadcrumb?.twoColumnsDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default TwoColumnsBreadcrumb;
