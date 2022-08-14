import Link from 'next/link';
import { Col } from 'react-bootstrap';

function ProjectGalleryItem(props) {
    const { title, image, slug } = props.project;

    const imagePath = `/images/projects/${slug}/${image}`;
    const linkPath = `/projects/${slug}`;

    return (
        <Col lg={{ span: 4 }} md={{ span: 6 }}>
            <div className='project-item'>
                <Link href={linkPath}>
                    <a className='project-img'>
                        <img src={imagePath} alt={title} />
                    </a>
                </Link>
            </div>
        </Col>
    );
}

export default ProjectGalleryItem;
