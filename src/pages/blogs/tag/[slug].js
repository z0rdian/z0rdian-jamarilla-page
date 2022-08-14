import { Fragment } from 'react';
import Head from 'next/head';
import BlogLeftSidebar from '../../../components/blogs/leftsidebar';
import { getBlogCategories } from '../../../lib/blog-categories';
import { getAllItems } from '../../../lib/items-util';
import { getBlogTags } from '../../../lib/blog-tags';

function BlogTagPage(props) {
    const { categories, tags, blogs } = props;

    return (
        <Fragment>
            <Head>
                <title>Blog Tags - OxyBuild</title>
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
            uniqueTag: blog.tag.find((tag) => tag === slug),
        }))
        .filter((blog) => blog.uniqueTag === slug);
    const tags = getBlogTags();
    const categories = getBlogCategories();

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
    const tags = getBlogTags();

    return {
        paths: tags.map((tag) => ({
            params: { slug: tag },
        })),
        fallback: false,
    };
};

export default BlogTagPage;
