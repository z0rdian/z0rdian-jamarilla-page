import Link from 'next/link';
import classes from './service.module.scss';
import { IoAddSharp } from 'react-icons/io5';

function ServiceItem(props) {
    const { title, mediumImage, slug } = props.service;

    const imagePath = `/images/services/${slug}/${mediumImage}`;
    const linkPath = `/services/${slug}`;

    return (
        <div className='service-item'>
            <Link href={linkPath}>
                <a className={classes.img}>
                    <img className='img-full' src={imagePath} alt={title} />
                </a>
            </Link>
            <div className={classes.add__action}>
                <h2 className='title mb-0'>
                    <Link href={linkPath}>{title}</Link>
                </h2>
                <div className={classes.icon}>
                    <Link href='mailto://info@example.com' passHref>
                        <a>
                            <IoAddSharp />
                        </a>
                    </Link>
                </div>
            </div>
        </div>
    );
}

export default ServiceItem;
