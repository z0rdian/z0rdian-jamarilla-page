import { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import CountUp from "react-countup";
import { InView } from "react-intersection-observer";
import classes from "../counter/counter.module.scss";

function Counter() {
  const [focus, setFocus] = useState(false);
  const visibleChangeHandler = (isVisible) => {
    if (isVisible) {
      if (!focus) {
        setFocus(true);
      }
    }
  };

  return (
    <div className={classes.area}>
      <Container>
        <Row className={classes.max_md_g_y__80}>
          <Col lg={{ span: 5 }} sm={{ span: 1 }}>
            <CountUp start={focus ? 0 : null} end={4380} duration={3}>
              {({ countUpRef }) => (
                <div className={classes.item}>
                  <h2 className={classes.count_inner__text}>+4380</h2>
                  <h3 className={classes.count} ref={countUpRef} />
                  <InView
                    as="div"
                    onChange={(inView) => visibleChangeHandler(inView)}
                  >
                    <span className={classes.count_title}>Días</span>
                  </InView>
                </div>
              )}
            </CountUp>
          </Col>
          <Col lg={{ span: 3 }} sm={{ span: 1 }}>
            <CountUp start={focus ? 0 : null} end={113} duration={3}>
              {({ countUpRef }) => (
                <div className={classes.item}>
                  <h2 className={classes.count_inner__text}>+113</h2>
                  <h3 className={classes.count} ref={countUpRef} />
                  <InView
                    as="div"
                    onChange={(inView) => visibleChangeHandler(inView)}
                  >
                    <span className={classes.count_title}>Clientes</span>
                  </InView>
                </div>
              )}
            </CountUp>
          </Col>
          <Col lg={{ span: 3 }} sm={{ span: 6 }}>
            <CountUp start={focus ? 0 : null} end={25} duration={3}>
              {({ countUpRef }) => (
                <div className={classes.item}>
                  <h2 className={classes.count_inner__text}>+25</h2>
                  <h3 className={classes.count} ref={countUpRef} />
                  <InView
                    as="div"
                    onChange={(inView) => visibleChangeHandler(inView)}
                  >
                    <span className={classes.count_title}>Profesionales</span>
                  </InView>
                </div>
              )}
            </CountUp>
          </Col>
          {/* <Col lg={{ span: 3 }} sm={{ span: 6 }}>
                        <CountUp
                            start={focus ? 0 : null}
                            end={15}
                            duration={3}
                        >
                            {({ countUpRef }) => (
                                <div className={classes.item}>
                                    <h2 className={classes.count_inner__text}>
                                        15
                                    </h2>
                                    <h3
                                        className={classes.count}
                                        ref={countUpRef}
                                    />
                                    <InView
                                        as='div'
                                        onChange={(inView) =>
                                            visibleChangeHandler(inView)
                                        }
                                    >
                                        <span className={classes.count_title}>
                                            Proveedores
                                        </span>
                                    </InView>
                                </div>
                            )}
                        </CountUp>
                    </Col> */}
        </Row>
      </Container>
    </div>
  );
}

export default Counter;
