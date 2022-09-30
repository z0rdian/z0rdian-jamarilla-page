import classes from "../layout/footer.module.scss";
import { Col, Container, Row } from "react-bootstrap";
import * as FaIcons from "react-icons/fa";
import Link from "next/link";
import { Fragment } from "react";

function Footer({ footerItems }) {
  return (
    <footer>
      {footerItems?.map((footerItem, i) => {
        return (
          <Fragment key={i}>
            <div className={`${classes.bg}`}>
              <Container>
                <Row>
                  <Col lg={{ span: 9 }}>
                    <div className={classes.widget__item}>
                      <Link href="/">
                        <a className={classes.logo}>
                          <img
                            src={footerItem?.footerLogo}
                            alt={footerItem?.footerLogoAlt}
                          />
                        </a>
                      </Link>
                      <p
                        className={classes.widget_address}
                        dangerouslySetInnerHTML={{
                          __html: footerItem?.excerpt,
                        }}
                      ></p>
                    </div>
                  </Col>

                  <Col
                    xl={{ span: 3 }}
                    lg={{ span: 4 }}
                    className="pt-40 pt-lg-0"
                  >
                    <div className={classes.widget__item}>
                      <h2 className={classes.widget__title}>
                        {footerItem?.contactInfoTitle}
                      </h2>
                      <div className={classes.widget__info}>
                        <p
                          className={classes.widget_address}
                          dangerouslySetInnerHTML={{
                            __html: footerItem?.additionWidgetAddress,
                          }}
                        ></p>
                        <span className={classes.widget_number}>
                          {footerItem?.additionWidgetNumber}
                        </span>
                      </div>
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Fragment>
        );
      })}
    </footer>
  );
}

export default Footer;
