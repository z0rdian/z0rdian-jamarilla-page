import Head from 'next/head';
import { Fragment } from 'react';
import TeamBreadcrumb from '../../components/breadcrumb/our-team';
import TeamTwo from '../../components/team/index-2';
import Newsletter from '../../components/newsletter/newsletter';
import Footer from '../../components/layout/footer';
import { getAllItems } from '../../lib/items-util';
import CounterTwo from '../../components/counter/index-2';

function OurClients(props) {
    return (
        <Fragment>
            <Head>
                <title>Our Team - Oxybuild</title>
                <meta
                    name='description'
                    content='OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template.'
                />
            </Head>
            <TeamBreadcrumb teamsBreadcrumb={props.teamsBreadcrumb} />
            <TeamTwo teamItemsTwo={props.teamItemsTwo} />
            <CounterTwo />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const teamsBreadcrumb = getAllItems('team-breadcrumb');
    const teamItemsTwo = getAllItems('team-02');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            teamsBreadcrumb,
            teamItemsTwo,
            newsletterItems,
            footerItems,
        },
    };
}

export default OurClients;
