import { Container } from "react-bootstrap";

function ServiceBreadcrumb({ servicesBreadcrumb }) {
  return (
    <div className="blur">
      <Container className="page_banner__bg">
        {servicesBreadcrumb?.map((serviceBreadcrumb, i) => {
          return (
            <div className="page_content" key={i}>
              <span className="page_subtitle">
                {serviceBreadcrumb?.breadcrumbSubtitle}
              </span>
              <h1 className="page_title">
                {serviceBreadcrumb?.breadcrumbTitle}
              </h1>
              <p className="page_desc">{serviceBreadcrumb?.breadcrumbDesc}</p>
            </div>
          );
        })}
      </Container>
    </div>
  );
}

export default ServiceBreadcrumb;
