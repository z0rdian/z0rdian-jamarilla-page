import { Container } from 'react-bootstrap';

function BrandBreadcrumb({ brands_breadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {brands_breadcrumb?.map((brand_breadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {brand_breadcrumb?.breadcrumbSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {brand_breadcrumb?.breadcrumbTitle}
                            </h1>
                            <p className='page_desc'>
                                {brand_breadcrumb?.breadcrumbDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default BrandBreadcrumb;
