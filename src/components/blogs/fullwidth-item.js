import Link from 'next/link';
import { Col } from 'react-bootstrap';
import classes from './blog.module.scss';

function BlogFullwidthItem(props) {
    const { title, blogMeta, excerpt, mediumImage, slug } = props.blog;

    const imagePath = `/images/blogs/${slug}/${mediumImage}`;
    const linkPath = `/blogs/${slug}`;

    return (
        <Col lg={{ span: 4 }} md={{ span: 6 }}>
            <div className={classes.blog_item}>
                <Link href={linkPath}>
                    <a className={classes.blog_img}>
                        <img className='img-full' src={imagePath} alt={title} />
                    </a>
                </Link>
                <div className={classes.blog_content}>
                    <span className={classes.blog_meta}>{blogMeta}</span>
                    <h3 className={classes.blog_title}>
                        <Link href={linkPath}>
                            <a>{title}</a>
                        </Link>
                    </h3>
                    <p className={classes.blog_desc}>{excerpt}</p>
                    <ul className={classes.blog_btn__wrap}>
                        <li>
                            <Link href={linkPath}>
                                <a className={classes.blog_btn__link}>
                                    Read more
                                </a>
                            </Link>
                        </li>
                        <li>
                            <Link href={linkPath}>
                                <a>35 Comments</a>
                            </Link>
                        </li>
                    </ul>
                </div>
            </div>
        </Col>
    );
}

export default BlogFullwidthItem;
