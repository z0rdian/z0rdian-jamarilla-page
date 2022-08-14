import Link from 'next/link';
import { Col } from 'react-bootstrap';

function ProjectTwoColumnsItem(props) {
    const { title, subTitle, duration, image, slug } = props.project;

    const imagePath = `/images/projects/${slug}/${image}`;
    const linkPath = `/projects/${slug}`;

    return (
        <Col lg={{ span: 6 }}>
            <div className='project-item'>
                <Link href={linkPath}>
                    <a className='project-img'>
                        <img src={imagePath} alt={title} />
                    </a>
                </Link>
                <div className='project-content'>
                    <span className='sub-title'>{subTitle}</span>
                    <h3 className='title mb-0'>
                        <Link href={linkPath}>
                            <a>{title}</a>
                        </Link>
                    </h3>
                    <span>{duration}</span>
                </div>
            </div>
        </Col>
    );
}

export default ProjectTwoColumnsItem;
