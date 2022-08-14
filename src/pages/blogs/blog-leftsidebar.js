import Head from 'next/head';
import { Fragment } from 'react';
import BlogLeftSidebar from '../../components/blogs/leftsidebar';
import LeftSidebarBreadcrumb from '../../components/breadcrumb/blogs/leftsidebar-breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import { getBlogCategories } from '../../lib/blog-categories';
import { getBlogTags } from '../../lib/blog-tags';
import { getAllItems } from '../../lib/items-util';

function BlogLeftSidebarPage(props) {
    return (
        <Fragment>
            <Head>
                <title>Blogs LeftSidebar - OxyBuild</title>
                <meta name='description' content='All Blogs' />
            </Head>
            <LeftSidebarBreadcrumb blogsBreadcrumb={props.blogsBreadcrumb} />
            <BlogLeftSidebar
                blogs={props.blogs}
                blogsSidebar={props.blogsSidebar}
                categories={props.categories}
                tags={props.tags}
            />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps() {
    const allItems = getAllItems('blogs');
    const categories = getBlogCategories();
    const tags = getBlogTags();
    const blogsBreadcrumb = getAllItems('blog-breadcrumb');
    const blogsSidebar = getAllItems('blog-sidebar');
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            blogs: allItems,
            categories,
            tags,
            blogsBreadcrumb,
            blogsSidebar,
            newsletterItems,
            footerItems,
        },
    };
}

export default BlogLeftSidebarPage;
