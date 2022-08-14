import Head from 'next/head';
import { Fragment } from 'react';
import BannerFive from '../../components/banner/index-5';
import FullWidthBreadcrumb from '../../components/breadcrumb/projects/fullwidth-breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectFullwidth from '../../components/projects/fullwidth';
import { getAllItems } from '../../lib/items-util';

function ProjectFullwidthPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Projects FullWidth - OxyBuild</title>
                <meta name='description' content='Projects FullWidth' />
            </Head>
            <FullWidthBreadcrumb
                projectsBreadcrumb={props.projectsBreadcrumb}
            />
            <ProjectFullwidth projects={props.projects} />
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

export default ProjectFullwidthPage;
