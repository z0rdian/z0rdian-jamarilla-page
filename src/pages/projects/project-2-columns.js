import Head from 'next/head';
import { Fragment } from 'react';
import BannerFive from '../../components/banner/index-5';
import TwoColumnsBreadcrumb from '../../components/breadcrumb/projects/two-columns-breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectTwoColumns from '../../components/projects/two-columns';
import { getAllItems } from '../../lib/items-util';

function ProjectTwoColumnsPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Projects Two Columns - OxyBuild</title>
                <meta name='description' content='Projects Two Columns' />
            </Head>
            <TwoColumnsBreadcrumb
                projectsBreadcrumb={props.projectsBreadcrumb}
            />
            <ProjectTwoColumns projects={props.projects} />
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

export default ProjectTwoColumnsPage;
