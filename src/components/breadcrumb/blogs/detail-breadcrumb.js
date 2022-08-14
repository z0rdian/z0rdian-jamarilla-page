import { Container } from 'react-bootstrap';

function DetailBreadcrumb(props) {
    const { title, detailBreadcrumbSubTitle, detailBreadcrumbDesc } = props;

    return (
        <div className='page_banner__bg'>
            <Container>
                <div className='page_content'>
                    <span className='page_subtitle'>
                        {detailBreadcrumbSubTitle}
                    </span>
                    <h1 className='page_title'>{title}</h1>
                    <p className='page_desc'>{detailBreadcrumbDesc}</p>
                </div>
            </Container>
        </div>
    );
}

export default DetailBreadcrumb;
