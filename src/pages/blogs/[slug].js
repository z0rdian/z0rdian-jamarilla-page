import Head from 'next/head';
import { Fragment } from 'react';
import BlogDetail from '../../components/blogs/blog-detail';
import DetailBreadcrumb from '../../components/breadcrumb/blogs/detail-breadcrumb';
import Footer from '../../components/layout/footer';
import Newsletter from '../../components/newsletter/newsletter';
import { getBlogCategories } from '../../lib/blog-categories';
import { getBlogTags } from '../../lib/blog-tags';
import { getAllItems, getItemData, getItemsFiles } from '../../lib/items-util';

function BlogDetailPage(props) {
    return (
        <Fragment>
            <Head>
                <title>{props.blog.title} - Oxybuild</title>
                <meta
                    name='description'
                    content='OxyBuild - Construction React Next JS Template Industry, Products Manufacturing Company, building companies, architecture firms, and the like can take to their advantage by using OxyBuild - Construction React Next JS Template.'
                />
            </Head>
            <DetailBreadcrumb
                detailBreadcrumbSubTitle={props.blog.detailBreadcrumbSubTitle}
                title={props.blog.title}
                detailBreadcrumbDesc={props.blog.detailBreadcrumbDesc}
            />
            <BlogDetail
                blog={props.blog}
                richTexts={props.richTexts}
                blogsSidebar={props.blogsSidebar}
                categories={props.categories}
                tags={props.tags}
            />
            <Newsletter newsletterItems={props.newsletterItems} />
            <Footer footerItems={props.footerItems} />
        </Fragment>
    );
}

export function getStaticProps(context) {
    const { params } = context;
    const { slug } = params;

    const blog = getItemData(slug, 'blogs');
    const blogsSidebar = getAllItems('blog-sidebar');
    const richTexts = getAllItems('rich-text');
    const categories = getBlogCategories();
    const tags = getBlogTags();
    const newsletterItems = getAllItems('newsletter');
    const footerItems = getAllItems('footer');

    return {
        props: {
            blog,
            blogsSidebar,
            richTexts,
            categories,
            tags,
            newsletterItems,
            footerItems,
        },
    };
}

export function getStaticPaths() {
    const blogFilenames = getItemsFiles('blogs');

    const slugs = blogFilenames.map((fileName) =>
        fileName.replace(/\.md$/, '')
    );

    return {
        paths: slugs.map((slug) => ({ params: { slug: slug } })),
        fallback: false,
    };
}

export default BlogDetailPage;
