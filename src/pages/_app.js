import Layout from '../components/layout/layout';
import '../styles/globals.scss';
import Head from 'next/head';
import { ScrollToTop } from '../components/scroll';
import { WpIcon } from '../components/whatsapp';
import { IgIcon } from '../components/instagram';

function MyApp({ Component, pageProps }) {
    return (
        <Layout>
            <Head>
                <meta
                    name='viewport'
                    content='width=device-width, initial-scale=1 Construcciones'
                />
                <link rel='icon' href='/favicon.png' />
            </Head>
            <Component {...pageProps} />
            <ScrollToTop></ScrollToTop>
            <WpIcon></WpIcon>
            <IgIcon></IgIcon>
        </Layout>
    );
}

export default MyApp;
