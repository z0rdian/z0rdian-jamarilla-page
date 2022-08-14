import { Container } from 'react-bootstrap';

function BannerBredcrumb({ bannerBredcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {bannerBredcrumb?.map((bannerBredcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {bannerBredcrumb?.breadcrumbSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {bannerBredcrumb?.breadcrumbTitle}
                            </h1>
                            <p className='page_desc'>
                                {bannerBredcrumb?.breadcrumbDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default BannerBredcrumb;
