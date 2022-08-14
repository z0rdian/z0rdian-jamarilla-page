import Head from 'next/head';
import { Fragment } from 'react';
import BannerFive from '../../components/banner/index-5';
import SliderBreadcrumb from '../../components/breadcrumb/projects/slider-breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectSliderTwo from '../../components/projects/project-slider-2';
import { getAllItems } from '../../lib/items-util';

function ProjectSliderPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Projects Slider - OxyBuild</title>
                <meta name='description' content='Projects Slider' />
            </Head>
            <SliderBreadcrumb projectsBreadcrumb={props.projectsBreadcrumb} />
            <ProjectSliderTwo projects={props.projects} />
            <BannerFive bannerTwoItems={props.bannerTwoItems} />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const projectsBreadcrumb = getAllItems('project-breadcrumb');
    const allItems = getAllItems('projects');
    const bannerTwoItems = getAllItems('banner-2');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            projectsBreadcrumb,
            projects: allItems,
            bannerTwoItems,
            newsletterItems,
            footerItems,
        },
    };
}

export default ProjectSliderPage;
