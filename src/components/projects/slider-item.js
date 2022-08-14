import Link from 'next/link';

function ProjectSliderItem(props) {
    const { title, subTitle, duration, image, slug } = props.project;

    const imagePath = `/images/projects/${slug}/${image}`;
    const linkPath = `/projects/${slug}`;

    return (
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
    );
}

export default ProjectSliderItem;
