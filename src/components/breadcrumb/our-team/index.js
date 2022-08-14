import { Container } from 'react-bootstrap';

function TeamBreadcrumb({ teamsBreadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {teamsBreadcrumb?.map((teamBreadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {teamBreadcrumb?.breadcrumbSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {teamBreadcrumb?.breadcrumbTitle}
                            </h1>
                            <p className='page_desc'>
                                {teamBreadcrumb?.breadcrumbDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default TeamBreadcrumb;
