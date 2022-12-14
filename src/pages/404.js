import Head from 'next/head';
import { Fragment } from 'react';
import Error404 from '../components/error-404';
import Error404Breadcrumb from '../components/error-404/404-breadcrumb';
import Newsletter from '../components/newsletter/newsletter';
import Footer from '../components/layout/footer';
import { getAllItems } from '../lib/items-util';

function Error404Page(props) {
    return (
        <Fragment>
            <Head>
                <title>Error 404 - Amarilla</title>
                <meta
                    name='description'
                    content=''
                />
            </Head>
            <Error404Breadcrumb />
            <Error404 />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            newsletterItems,
            footerItems,
        },
    };
}

export default Error404Page;
