import Head from 'next/head';
import { Fragment } from 'react';
import BlogFullwidth from '../../components/blogs/fullwidth';
import FullWidthBreadcrumb from '../../components/breadcrumb/blogs/fullwidth-breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import { getAllItems } from '../../lib/items-util';

function DefaultBlogPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Blogs Fullwidth - OxyBuild</title>
                <meta name='description' content='All Blogs' />
            </Head>
            <FullWidthBreadcrumb blogsBreadcrumb={props.blogsBreadcrumb} />
            <BlogFullwidth blogs={props.blogs} />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('blogs');
    const blogsBreadcrumb = getAllItems('blog-breadcrumb');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            blogs: allItems,
            blogsBreadcrumb,
            newsletterItems,
            footerItems,
        },
    };
}

export default DefaultBlogPage;
