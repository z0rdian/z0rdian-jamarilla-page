export const OffcanvasData = [
    {
        id: 1,
        title: 'Home',
        path: '/',
        cName: 'offcanvas-text',
    },
    {
        id: 2,
        title: 'About',
        path: '/about',
        cName: 'offcanvas-text',
    },
    {
        id: 3,
        title: 'Services',
        path: '/services',
        cName: 'offcanvas-text',
    },
    {
        id: 4,
        title: 'Projects',
        path: '#',
        cName: 'offcanvas-text',
        arrowDown: 'FaAngleDown',
        submenu: [
            {
                link: '/projects/project-fullwidth',
                text: 'Project Fullwidth',
            },
            {
                link: '/projects/project-2-columns',
                text: 'Two Columns',
            },
            {
                link: '/projects/project-gallery',
                text: 'Project Gallery',
            },
            {
                link: '/projects/project-slider',
                text: 'Project Slider',
            },
        ],
    },
    {
        id: 5,
        title: 'Pages',
        path: '#',
        cName: 'offcanvas-text',
        arrowDown: 'FaAngleDown',
        submenu: [
            {
                link: '/our-clients',
                text: 'Our Clients',
            },
            {
                link: '/our-team',
                text: 'Our Team',
            },
            {
                link: '/our-working-process',
                text: 'Our Working Process',
            },
        ],
    },
    {
        id: 6,
        title: 'Blogs',
        path: '#',
        cName: 'offcanvas-text',
        arrowDown: 'FaAngleDown',
        submenu: [
            {
                link: '/blogs/blog-fullwidth',
                text: 'Blog FullWidth',
            },
            {
                link: '/blogs/blog-leftsidebar',
                text: 'Blog Left Sidebar',
            },
            {
                link: '/blogs/blog-rightsidebar',
                text: 'Blog Right Sidebar',
            },
        ],
    },
    {
        id: 7,
        title: 'Contact',
        path: '/contact',
        cName: 'offcanvas-text',
    },
];
