import Head from 'next/head';
import { Fragment } from 'react';
import AboutTwo from '../../components/about/index-2';
import BannerTwo from '../../components/banner/index-2';
import BannerFour from '../../components/banner/index-4';
import BrandOne from '../../components/brand';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import AllServices from '../../components/services/all-services';
import ServiceBreadcrumb from '../../components/breadcrumb/services/services-breadcrumb';
import Testimonial from '../../components/testimonial';
import { getAllItems } from '../../lib/items-util';

function ServicePage(props) {
    return (
        <Fragment>
            <Head>
                <title>Servicios - Amarilla</title>
                <meta
                    name='description'
                    content='Amarilla - Construcciones'
                />
            </Head>
            <ServiceBreadcrumb servicesBreadcrumb={props.servicesBreadcrumb} />
            <AboutTwo aboutItemsTwo={props.aboutItemsTwo} />
            <AllServices
                services={props.services}
                service_section__items={props.service_section__items}
            />
            <BannerTwo bannerTwoItems={props.bannerTwoItems} />
            <BrandOne brandItems={props.brandItems} />
            <BannerFour
                bannerFourItems={props.bannerFourItems}
                bannerSection={props.bannerSection}
            />
            ;
            <Testimonial
                testimonialItems={props.testimonialItems}
                testimonial_section__items={props.testimonial_section__items}
            />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const aboutItemsTwo = getAllItems('about-2');
    const AllServices = getAllItems('services');
    const service_section__items = getAllItems('service-section');
    const servicesBreadcrumb = getAllItems('service-breadcrumb');
    const bannerTwoItems = getAllItems('banner-2');
    // const brandItems = getAllItems('brand');
    const testimonial_section__items = getAllItems('testimonial-section');
    const bannerFourItems = getAllItems('banner-4');
    const bannerSection = getAllItems('banner-section');
    const testimonialItems = getAllItems('testimonial');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItemsTwo,
            services: AllServices,
            servicesBreadcrumb,
            service_section__items,
            bannerTwoItems,
            // brandItems,
            bannerFourItems,
            bannerSection,
            testimonialItems,
            testimonial_section__items,
            newsletterItems,
            footerItems,
        },
    };
}

export default ServicePage;
