import { Container } from 'react-bootstrap';

function DetailBreadcrumb(props) {
    const { title, subTitle, breadcrumbDesc } = props;

    return (
        <div className='page_banner__bg'>
            <Container>
                <div className='page_content'>
                    <span className='page_subtitle'>{subTitle}</span>
                    <h1 className='page_title'>{title}</h1>
                    <p className='page_desc'>{breadcrumbDesc}</p>
                </div>
            </Container>
        </div>
    );
}

export default DetailBreadcrumb;
