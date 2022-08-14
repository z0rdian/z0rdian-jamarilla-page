import Head from 'next/head';
import { Fragment } from 'react';
import BannerFive from '../../components/banner/index-5';
import GalleryBreadcrumb from '../../components/breadcrumb/projects/gallery-breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectGallery from '../../components/projects/gallery';
import { getAllItems } from '../../lib/items-util';

function ProjectGalleryPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Projects Gallery - OxyBuild</title>
                <meta name='description' content='Projects Gallery' />
            </Head>
            <GalleryBreadcrumb projectsBreadcrumb={props.projectsBreadcrumb} />
            <ProjectGallery projects={props.projects} />
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

export default ProjectGalleryPage;
