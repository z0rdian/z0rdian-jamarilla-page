import Head from 'next/head';
import { Fragment } from 'react';
import ContactBreadcrumb from '../components/breadcrumb/contact';
import Contact from '../components/contact';
import Footer from '../components/layout/footer';
import Newsletter from '../components/newsletter/newsletter';
import { getAllItems } from '../lib/items-util';

function ContactPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Contacto - Amarilla Construcciones</title>
                <meta
                    name='description'
                    content='Amarilla Construcciones Refacciones Reparaciones Argentina'
                />
            </Head>
            <ContactBreadcrumb ContactBreadcrumb={props.ContactBreadcrumb} />
            <Contact contactItems={props.contactItems} />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const ContactBreadcrumb = getAllItems('contact-breadcrumb');
    const contactItems = getAllItems('contact');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            ContactBreadcrumb,
            contactItems,
            newsletterItems,
            footerItems,
        },
    };
}

export default ContactPage;
