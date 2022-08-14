import { Container } from 'react-bootstrap';

function SliderBreadcrumb({ projectsBreadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {projectsBreadcrumb?.map((projectBreadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {projectBreadcrumb?.sliderSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {projectBreadcrumb?.sliderTitle}
                            </h1>
                            <p className='page_desc'>
                                {projectBreadcrumb?.sliderDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default SliderBreadcrumb;
