import Head from 'next/head';
import { Fragment } from 'react';
import BannerTwo from '../../components/banner/index-2';
import BrandBreadcrumb from '../../components/brand/brand-breadcrumb';
import BrandTwo from '../../components/brand/index-2';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import TestimonialTwo from '../../components/testimonial/index-2';
import { getAllItems } from '../../lib/items-util';

function OurClients(props) {
    return (
        <Fragment>
            <Head>
                <title>Our Clients - Oxybuild</title>
                <meta
                    name='description'
                    content='OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template.'
                />
            </Head>
            <BrandBreadcrumb brands_breadcrumb={props.brands_breadcrumb} />
            <BrandTwo brandItems={props.brandItems} />
            <BannerTwo bannerTwoItems={props.bannerTwoItems} />
            <TestimonialTwo
                testimonialItems={props.testimonialItems}
                testimonial_section__items={props.testimonial_section__items}
            />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const brands_breadcrumb = getAllItems('brand-breadcrumb');
    const brandItems = getAllItems('brand');
    const bannerTwoItems = getAllItems('banner-2');
    const testimonialItems = getAllItems('testimonial');
    const testimonial_section__items = getAllItems('testimonial-section');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            brands_breadcrumb,
            brandItems,
            bannerTwoItems,
            testimonialItems,
            testimonial_section__items,
            newsletterItems,
            footerItems,
        },
    };
}

export default OurClients;
