import { Col } from 'react-bootstrap';
import Blockquote from '../../blockquote';
import RichText from '../../rich-text';
import DisqusForm from '../../disqus';
import classes from './index.module.scss';

function BlogContent(props) {
    const { blog } = props;

    const { largeImage, slug } = props.blog;
    const imagePath = `/images/blogs/${slug}/${largeImage}`;

    return (
        <Col lg={{ span: 8 }} className='pe-lg-45'>
            <div className='banner'>
                <img className='img-full' src={imagePath} alt={blog?.title} />
            </div>
            <div className={classes.content}>
                <span className={classes.meta}>{blog?.blogMeta}</span>
                <h2 className={classes.title}>{blog?.title}</h2>
                <h3 className={classes.subtitle}>{blog?.detailSubTitle}</h3>
                <p className={classes.desc}>{blog?.detailDescOne}</p>
                <p className={classes.desc}>{blog?.detailDescTwo}</p>
            </div>
            <Blockquote />
            <RichText richTexts={props.richTexts} />
            <DisqusForm />
        </Col>
    );
}

export default BlogContent;
