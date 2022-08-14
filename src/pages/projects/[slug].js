import Head from 'next/head';
import { Fragment } from 'react';
import BannerFive from '../../components/banner/index-5';
import DetailBreadcrumb from '../../components/breadcrumb/projects/detail-breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import ProjectDetail from '../../components/projects/project-detail';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';

function ProjectDetailPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.project.title}</title>
                <meta
                    name='description'
                    content='OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template.'
                />
            </Head>
            <DetailBreadcrumb
                subTitle={props.project.subTitle}
                title={props.project.title}
                breadcrumbDesc={props.project.breadcrumbDesc}
            />
            <ProjectDetail
                project={props.project}
                projectsSidebar={props.projectsSidebar}
                richTexts={props.richTexts}
                projectsOverview={props.projectsOverview}
            />
            <BannerFive bannerTwoItems={props.bannerTwoItems} />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const project = getItemData(slug, 'projects');
    const projectsSidebar = getAllItems('project-sidebar');
    const richTexts = getAllItems('rich-text');
    const projectsOverview = getAllItems('project-overview');
    const bannerTwoItems = getAllItems('banner-2');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            project,
            projectsSidebar,
            richTexts,
            projectsOverview,
            bannerTwoItems,
            newsletterItems,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const projectFilenames = getItemsFiles('projects');

    const slugs = projectFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
}

export default ProjectDetailPage;
