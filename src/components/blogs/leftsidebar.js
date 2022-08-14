import { Col, Container, Row } from 'react-bootstrap';
import BlogLeftSidebarGrid from './leftsidebar-grid';

function BlogLeftSidebar(props) {
    const { blogs, categories, tags } = props;
    return (
        <div>
            <Container>
                <Row className='g-0'>
                    <Col lg={{ span: 12 }}>
                        <BlogLeftSidebarGrid
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

export default BlogLeftSidebar;
