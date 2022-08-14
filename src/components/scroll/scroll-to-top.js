import { useEffect, useState } from 'react';
import classes from '../scroll/scroll-to-top.module.scss';
import { FaArrowUp } from 'react-icons/fa';

export const ScrollToTop = () => {
    const [isVisable, setIsVisable] = useState(false);

    const toggleVisibility = () => {
        if (window.pageYOffset > 100) {
            setIsVisable(true);
        } else {
            setIsVisable(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth',
        });
    };

    useEffect(() => {
        window.addEventListener('scroll', toggleVisibility);

        return () => {
            window.removeEventListener('scroll', toggleVisibility);
        };
    }, []);

    return (
        <div>
            <button
                type='button'
                onClick={scrollToTop}
                className={`${classes.scroll_to__top} ${
                    isVisable ? 'opacity-1' : 'opacity-0 '
                }`}
                aria-label='Right Align'
            >
                <FaArrowUp aria-hidden='true' />
            </button>
        </div>
    );
};
