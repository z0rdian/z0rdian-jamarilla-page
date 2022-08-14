import { Col, Container, Row } from 'react-bootstrap';
import BlogRightSidebarGrid from './rightsidebar-grid';

function BlogRightSidebar(props) {
    const { blogs, categories, tags } = props;
    return (
        <div>
            <Container>
                <Row className='g-0'>
                    <Col lg={{ span: 12 }}>
                        <BlogRightSidebarGrid
                            blogs={blogs}
                            blogsSidebar={props.blogsSidebar}
                            categories={categories}
                            tags={tags}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BlogRightSidebar;
