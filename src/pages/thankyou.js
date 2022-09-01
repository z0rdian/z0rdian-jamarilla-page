import Head from 'next/head';
import { Fragment } from 'react';
import Thankyou from '../components/thank-you/thank-you';
import Newsletter from '../components/newsletter/newsletter';
import Footer from '../components/layout/footer';
import { getAllItems } from '../lib/items-util';

function thankyouPage(props) {
    return (
        <Fragment>
            <Head>
                <title>¡Gracias! - Amarilla</title>
                <meta
                    name='description'
                    content='Amarilla Construcciones ThankYou Ṕage'
                />
            </Head>
            <Thankyou />
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

export default thankyouPage;
