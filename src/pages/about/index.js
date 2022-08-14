import Head from 'next/head';
import { Fragment } from 'react';
import AboutOne from '../../components/about';
import AboutBreadcrumb from '../../components/about/about-breadcrumb';
import BannerThree from '../../components/banner/index-3';
import CounterTwo from '../../components/counter/index-2';
import LatestProject from '../../components/home-page/latest-project';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import Team from '../../components/team';
import Testimonial from '../../components/testimonial';
import { getAllItems, getFeaturedItems } from '../../lib/items-util';

function AboutPage(props) {
    return (
        <Fragment>
            <Head>
                <title>About Us - Oxybuild</title>
                <meta
                    name='description'
                    content='OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template.'
                />
            </Head>
            <AboutBreadcrumb aboutItems={props.aboutItems} />
            <AboutOne aboutItems={props.aboutItems} />
            <BannerThree bannerThreeItems={props.bannerThreeItems} />
            <CounterTwo />
            <LatestProject
                projects={props.projects}
                project_section__items={props.project_section__items}
            />
            <Team
                teamItems={props.teamItems}
                team_section__items={props.team_section__items}
            />
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
    const aboutItems = getAllItems('about');
    const bannerThreeItems = getAllItems('banner-3');
    const project_section__items = getAllItems('project-section');
    const projects = getAllItems('projects');
    const LatestProject = getFeaturedItems(projects);
    const team_section__items = getAllItems('team-section');
    const teamItems = getAllItems('team');
    const testimonial_section__items = getAllItems('testimonial-section');
    const testimonialItems = getAllItems('testimonial');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            aboutItems,
            bannerThreeItems,
            project_section__items,
            projects: LatestProject,
            team_section__items,
            testimonialItems,
            testimonial_section__items,
            teamItems,
            newsletterItems,
            footerItems,
        },
    };
}

export default AboutPage;
