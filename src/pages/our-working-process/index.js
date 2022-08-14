import Head from 'next/head';
import { Fragment } from 'react';
import BannerTwo from '../../components/banner/index-2';
import BrandBreadcrumb from '../../components/brand/brand-breadcrumb';
import BannerFour from '../../components/banner/index-4';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import TestimonialTwo from '../../components/testimonial/index-2';
import { getAllItems } from '../../lib/items-util';
import BannerBredcrumb from '../../components/breadcrumb/banner/banner-breadcrumb';

function OurClients(props) {
    return (
        <Fragment>
            <Head>
                <title>Our Working Process - Oxybuild</title>
                <meta
                    name='description'
                    content='OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template.'
                />
            </Head>
            <BannerBredcrumb bannerBredcrumb={props.bannerBredcrumb} />
            <BannerFour
                bannerFourItems={props.bannerFourItems}
                bannerSection={props.bannerSection}
            />
            ;
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
    const bannerBredcrumb = getAllItems('banner-breadcrumb');
    const bannerFourItems = getAllItems('banner-4');
    const bannerSection = getAllItems('banner-section');
    const bannerTwoItems = getAllItems('banner-2');
    const testimonialItems = getAllItems('testimonial');
    const testimonial_section__items = getAllItems('testimonial-section');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            bannerBredcrumb,
            bannerFourItems,
            bannerSection,
            bannerTwoItems,
            testimonialItems,
            testimonial_section__items,
            newsletterItems,
            footerItems,
        },
    };
}

export default OurClients;
