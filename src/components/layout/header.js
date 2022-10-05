import { Fragment, useEffect, useState, useRef } from "react";
import Link from "next/link";
import { Col, Container, Row } from "react-bootstrap";
import classes from "../layout/header.module.scss";
import { FaSearch, FaBars } from "react-icons/fa";
import { IoCloseOutline } from "react-icons/io5";
import { OffcanvasData } from "./offcanvas-data";

function Header() {
  // Header Sticky Activation
  const header = useRef();
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = (e) => {
    const scrollTop = window.scrollY;
    scrollTop >= 250
      ? header.current.classList.add("is-sticky")
      : header.current.classList.remove("is-sticky");
  };
  // End here

  // Header Search Toggle Activation
  const [search, setSearch] = useState(false);

  const SearchToggle = () => {
    search ? setSearch(false) : setSearch(true);
  };
  // End here

  // Offcanvas Activation
  const [offcanvas, setOffcanvas] = useState(false);
  const showOffcanvas = () => setOffcanvas(!offcanvas);

  const [submenuOpenId, setSubmenuOpenId] = useState({});

  const showSubmenuClickHandler = (id) =>
    setSubmenuOpenId((prevData) => {
      return {
        [id.toString()]: !prevData[id.toString()],
      };
    });

  useEffect(() => {
    document.body.onclick = (e) => {
      if (offcanvas) {
        const clickIgnoreClassList = [
          "offcanvas-menu",
          "menu-bar-button",
          "has-children",
          "offcanvas-close-btn",
        ];

        if (
          !clickIgnoreClassList.find((item) =>
            [...e.target.classList].includes(item)
          )
        ) {
          setOffcanvas(false);
        }
      }
    };
  }, [offcanvas]);

  // End here

  return (
    <Fragment>
      <header className={classes.area}>
        {/* <div className={classes.top}>
                    <Container>
                        <Row> */}
        {/* <Col
                                xl={{ span: 4, offset: 2 }}
                                lg={{ span: 5, offset: 3 }}
                                className='d-none d-lg-block'
                            >
                                <div className={classes.info}>
                                    <div className={classes.contact_number}>
                                        <img
                                            src='/images/header/icon/phone.png'
                                            alt='Phone'
                                        />
                                        <Link href='https://wa.me/message/E32XSP3MXIBFH1'>
                                            <a>+54 9 11 6860-6386</a>
                                        </Link>
                                    </div>
                                    <div className={classes.time_schedule}>
                                        <img
                                            src='/images/header/icon/clock.png'
                                            alt='Phone'
                                        />
                                        <span>9.00 am - 5.00 pm</span>
                                    </div>
                                </div>
                            </Col> */}
        <Col sm={{ span: 6 }} className={`d-block d-lg-none`}>
          <div className={`header-logo`}>
            <Link href="/">
              <a className={classes.logo}>
                <img
                  src="/images/logo/logo-marai.svg"
                  alt="Header Lisght Logo"
                />
              </a>
            </Link>
          </div>
        </Col>
        {/* <Col xl={6} lg={4} sm={6}>
                                <div className={classes.right}>
                                    <div>
                                        <Link href='/login-register'>
                                            <a>
                                                Login
                                                <span>/ Register</span>
                                            </a>
                                        </Link>
                                    </div>
                                    <div
                                        className={`${
                                            search
                                                ? 'search-show'
                                                : 'search-hide'
                                        } d-block d-lg-none search-holder`}
                                    >
                                        <buton
                                            className={classes.search__btn}
                                            onClick={SearchToggle}
                                        >
                                            <FaSearch />
                                        </buton>
                                        <form className='search-form'>
                                            <input
                                                className='search-input'
                                                type='search'
                                                name='search'
                                                placeholder='Search'
                                            />
                                            <button
                                                className='search-inner__btn'
                                                type='submit'
                                            >
                                                <FaSearch />
                                            </button>
                                        </form>
                                    </div>
                                    <div className={classes.offcanvas}>
                                        <buton
                                            className={`${classes.offcanvas__btn} d-block d-lg-none menu-bar-button`}
                                            onClick={showOffcanvas}
                                        >
                                            <FaBars />
                                        </buton>
                                    </div>
                                </div>
                            </Col> */}
        {/* </Row>
                    </Container>
                </div> */}
        <div ref={header} className={`sticky_holder ${classes.main}`}>
          <Container>
            <Row>
              <Col xl={{ span: 10, offset: 2 }} className="d-none d-lg-block">
                <nav className={classes.menu}>
                  <ul className={classes.menu__list}>
                    <li>
                      <Link href="/">
                        <a>
                          <span>Inicio</span>
                        </a>
                      </Link>
                    </li>
                    {/* <li>
                                            <Link href='/about'>
                                                <a>
                                                    <span>Nosotros</span>
                                                </a>
                                            </Link>
                                        </li> */}
                    <li>
                      <Link href="/services">
                        <a>
                          <span>Servicios</span>
                        </a>
                      </Link>
                    </li>
                    {/* <li className={classes.dropdown_holder}>
                                            <Link href='/projects/project-fullwidth'>
                                                <a>
                                                    <span>Proyectos</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href='/projects/project-2-columns'>
                                                        <a>Project 2 Columns</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='/projects/project-gallery'>
                                                        <a>Project Gallery</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='/projects/project-slider'>
                                                        <a>Project Slider</a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                    {/* <li className={classes.dropdown_holder}>
                                            <Link href='/'>
                                                <a>
                                                    <span>Pages</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href='/our-clients'>
                                                        <a>Our Clients</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='/our-team'>
                                                        <a>Our Team</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='/our-working-process'>
                                                        <a>
                                                            Our Working Process
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                    {/* <li className={classes.dropdown_holder}>
                                            <Link href='/blogs/blog-fullwidth'>
                                                <a>
                                                    <span>Blogs</span>
                                                </a>
                                            </Link>
                                            <ul
                                                className={
                                                    classes.dropdown_menu
                                                }
                                            >
                                                <li>
                                                    <Link href='/blogs/blog-leftsidebar'>
                                                        <a>Blog Left Sidebar</a>
                                                    </Link>
                                                </li>
                                                <li>
                                                    <Link href='/blogs/blog-rightsidebar'>
                                                        <a>
                                                            Blog Right Sidebar
                                                        </a>
                                                    </Link>
                                                </li>
                                            </ul>
                                        </li> */}
                    <li className={classes.separator}>
                      <Link href="/contact">
                        <a>
                          <span>Contacto</span>
                        </a>
                      </Link>
                    </li>
                    <li className={`${search ? "search-show" : "search-hide"}`}>
                      <buton
                        className={classes.search__btn}
                        onClick={SearchToggle}
                      >
                        {/* <FaSearch /> */}
                      </buton>
                      <form className="search-form">
                        <input
                          className="search-input"
                          type="search"
                          name="search"
                          placeholder="Search"
                        />
                        <button className="search-inner__btn" type="submit">
                          {/* <FaSearch /> */}
                        </button>
                      </form>
                    </li>
                  </ul>
                </nav>
              </Col>
            </Row>
          </Container>
          <div className={`${classes.fixed__logo} d-none d-lg-flex`}>
            <Link href="/">
              <a className={classes.logo}>
                <img
                  src="/images/logo/logo-marai-main.svg"
                  alt="Header Dark Logo"
                />
              </a>
            </Link>
          </div>
        </div>
      </header>
      <div
        className={
          offcanvas ? "offcanvas-menu-wrap active" : "offcanvas-menu-wrap"
        }
      >
        <nav className="offcanvas-menu">
          <ul className="offcanvas-menu-items">
            <li className="offcanvas-top">
              <button className="offcanvas-close-btn" aria-label="Right Align">
                <IoCloseOutline onClick={showOffcanvas} />
              </button>
            </li>
            {OffcanvasData.map((item, offcanvas) => {
              const submenu = item.submenu;
              return (
                <li
                  key={offcanvas}
                  className={`${item.cName}${
                    submenuOpenId[item.id.toString()] ? " active" : ""
                  }`}
                  onClick={
                    submenu ? () => showSubmenuClickHandler(item.id) : () => {}
                  }
                >
                  <Link href={item.path}>
                    <a className={item?.submenu ? "has-children" : ""}>
                      {item.title}
                    </a>
                  </Link>
                  {submenu && (
                    <ul className="submenu">
                      {submenu?.map((item, submenu) => {
                        return (
                          <li key={submenu}>
                            <Link href={item.link}>
                              <a>{item.text}</a>
                            </Link>
                          </li>
                        );
                      })}
                    </ul>
                  )}
                </li>
              );
            })}
          </ul>
        </nav>
      </div>
    </Fragment>
  );
}

export default Header;
