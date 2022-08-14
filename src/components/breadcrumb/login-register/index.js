import { Container } from 'react-bootstrap';

function LoginRegisterBreadcrumb({ LoginRegisterBreadcrumb }) {
    return (
        <div className='page_banner__bg'>
            <Container>
                {LoginRegisterBreadcrumb?.map((loginRegisterBreadcrumb, i) => {
                    return (
                        <div className='page_content' key={i}>
                            <span className='page_subtitle'>
                                {loginRegisterBreadcrumb?.breadcrumbSubtitle}
                            </span>
                            <h1 className='page_title'>
                                {loginRegisterBreadcrumb?.breadcrumbTitle}
                            </h1>
                            <p className='page_desc'>
                                {loginRegisterBreadcrumb?.breadcrumbDesc}
                            </p>
                        </div>
                    );
                })}
            </Container>
        </div>
    );
}

export default LoginRegisterBreadcrumb;
