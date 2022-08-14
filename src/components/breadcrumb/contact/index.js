import { Container } from 'react-bootstrap';

function ContactBreadcrumb({ ContactBreadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {ContactBreadcrumb?.map((contactBreadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {contactBreadcrumb?.breadcrumbSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {contactBreadcrumb?.breadcrumbTitle}
                            </h1>
                            <p className='page_desc'>
                                {contactBreadcrumb?.breadcrumbDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default ContactBreadcrumb;
