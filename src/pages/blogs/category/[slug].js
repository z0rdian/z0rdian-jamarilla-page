import { Fragment } from 'react';
import Head from 'next/head';
import BlogLeftSidebar from '../../../components/blogs/leftsidebar';
import { getBlogCategories } from '../../../lib/blog-categories';
import { getAllItems } from '../../../lib/items-util';
import { getBlogTags } from '../../../lib/blog-tags';

function BlogCategoryPage(props) {
    const { categories, tags, blogs } = props;
    return (
        <Fragment>
            <Head>
                <title>Blog Category - OxyBuild</title>
                <meta name='description' content='All Blogs' />
            </Head>
            <BlogLeftSidebar
                blogs={blogs}
                blogsSidebar={props.blogsSidebar}
                categories={categories}
                tags={tags}
            />
        </Fragment>
    );
}

export const getStaticProps = ({ params }) => {
    const { slug } = params;
    const blogs = getAllItems('blogs');
    const blogsSidebar = getAllItems('blog-sidebar');
    const filteredblogs = blogs
        .map((blog) => ({
            ...blog,
            uniqueCategory: blog.category.find(
                (cate) => cate?.split('|')[0]?.trim() === slug
            ),
        }))
        .filter((blog) => blog.uniqueCategory?.split('|')[0]?.trim() === slug);
    const categories = getBlogCategories();
    const tags = getBlogTags();

    return {
        props: {
            blogs: filteredblogs,
            categories,
            tags,
            blogsSidebar,
        },
    };
};

export const getStaticPaths = () => {
    const categories = getBlogCategories();

    return {
        paths: categories.map((category) => ({
            params: { slug: category.split('|')[0].trim() },
        })),
        fallback: false,
    };
};

export default BlogCategoryPage;
