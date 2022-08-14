import { Col, Container, Row } from 'react-bootstrap';
import BlogContent from './blog-content';
import BlogSidebar from '../blog-sidebar';
import classes from './index.module.scss';

function BlogDetail(props) {
    return (
        <div className={classes.area}>
            <Container>
                <Row>
                    <BlogContent
                        blog={props.blog}
                        richTexts={props.richTexts}
                    />
                    <Col lg={{ span: 4 }}>
                        <BlogSidebar
                            blogsSidebar={props.blogsSidebar}
                            categories={props.categories}
                            tags={props.tags}
                        />
                    </Col>
                </Row>
            </Container>
        </div>
    );
}

export default BlogDetail;
