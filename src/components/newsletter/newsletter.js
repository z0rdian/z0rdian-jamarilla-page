import { Col, Container, Row } from "react-bootstrap";
import classes from "../newsletter/newsletter.module.scss";

function Newsletter({ newsletterItems }) {
  return (
    <div className={`${classes.bg}`}>
      <Container>
        <Row>
          {newsletterItems?.map((newsletterItem, i) => {
            return (
              <Col lg={{ span: 12 }} key={i}>
                <div className={classes.item}>
                  <h2 className={classes.title}>{newsletterItem?.title}</h2>
                  <form
                    action="/thankyou"
                    name="newsletter"
                    data-netlify="true"
                    method="POST"
                    className={classes.form}
                  >
                    <input type="hidden" name="form-name" value="newsletter" />
                    <input
                      className={classes.input_field}
                      type="email"
                      name="newsletter"
                      id="newsletter"
                      placeholder="¿Qué esperas? (email)"
                    ></input>
                    <div className={classes.btn__wrap}>
                      <button
                        className={`${classes.btn} ${classes.btn_secondary} ${classes.btn_hover__white}`}
                      >
                        Enviar.
                      </button>
                    </div>
                  </form>
                </div>
              </Col>
            );
          })}
        </Row>
      </Container>
    </div>
  );
}

export default Newsletter;
