import { Col, Container, Row } from 'react-bootstrap';
import PageNavigation from '../page-navigation';
import BlogSidebar from './blog-sidebar';
import classes from './blog.module.scss';
import BlogRightSidebarItem from './rightsidebar-item';

function BlogRightSidebarGrid(props) {
    const { blogs } = props;
    return (
        <div className={classes.blog}>
            <Container>
                <Row className='g-4'>
                    <Col lg={{ span: 4 }} xs={{ order: 2 }}>
                        <BlogSidebar
                            blogsSidebar={props.blogsSidebar}
                            categories={props.categories}
                            tags={props.tags}
                        />
                    </Col>
                    <Col lg={{ span: 8 }} xs={{ order: 1 }}>
                        <Row className='g-4'>
                            {blogs.map((blog) => {
                                return (
                                    <BlogRightSidebarItem
                                        key={blog.slug}
                                        blog={blog}
                                    />
                                );
                            })}
                        </Row>
                        <PageNavigation />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BlogRightSidebarGrid;
