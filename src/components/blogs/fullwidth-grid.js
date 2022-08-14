import BlogFullwidthItem from './fullwidth-item';
import { Container, Row } from 'react-bootstrap';
import classes from './blog.module.scss';
import PageNavigation from '../page-navigation';

function BlogFullwidthGrid(props) {
    const { blogs } = props;
    return (
        <div className={classes.blog}>
            <Container>
                <Row className='g-min-lg-30 g-y-max-md-25'>
                    {blogs.map((blog) => {
                        return (
                            <BlogFullwidthItem key={blog.slug} blog={blog} />
                        );
                    })}
                </Row>
                <PageNavigation />
            </Container>
        </div>
    );
}

export default BlogFullwidthGrid;
