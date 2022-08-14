import Head from 'next/head';
import { Fragment } from 'react';
import DetailBreadcrumb from '../../components/breadcrumb/services/detail-breadcrumb';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/layout/footer';
import ServiceDetail from '../../components/services/service-detail';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';

function ServiceDetailsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.service.title} - Oxybuild</title>
                <meta
                    name='description'
                    content='OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template.'
                />
            </Head>
            <DetailBreadcrumb
                detailBreadcrumbSubTitle={
                    props.service.detailBreadcrumbSubTitle
                }
                title={props.service.title}
                detailBreadcrumbDesc={props.service.detailBreadcrumbDesc}
            />
            <ServiceDetail
                service={props.service}
                richTexts={props.richTexts}
                ourServices={props.ourServices}
                servicesSidebar={props.servicesSidebar}
            />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const service = getItemData(slug, 'services');
    const servicesSidebar = getAllItems('service-sidebar');
    const richTexts = getAllItems('rich-text');
    const ourServices = getAllItems('our-service');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            service,
            servicesSidebar,
            richTexts,
            ourServices,
            newsletterItems,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const serviceFilenames = getItemsFiles('services');

    const slugs = serviceFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
}

export default ServiceDetailsPage;
