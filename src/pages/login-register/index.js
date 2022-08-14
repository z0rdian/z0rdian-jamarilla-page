import Head from 'next/head';
import { Fragment } from 'react';
import LoginRegisterBreadcrumb from '../../components/breadcrumb/login-register';
import Footer from '../../components/layout/footer';
import LoginRegister from '../../components/login-register';
import Newsletter from '../../components/newsletter/newsletter';
import { getAllItems } from '../../lib/items-util';

function LoginRegisterPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Login || Register - Oxybuild</title>
                <meta
                    name='description'
                    content='OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template.'
                />
            </Head>
            <LoginRegisterBreadcrumb
                LoginRegisterBreadcrumb={props.LoginRegisterBreadcrumb}
            />
            <LoginRegister />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const LoginRegisterBreadcrumb = getAllItems('login-register-breadcrumb');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            LoginRegisterBreadcrumb,
            newsletterItems,
            footerItems,
        },
    };
}

export default LoginRegisterPage;
