import { Col, Container, Row } from "react-bootstrap";
import ServiceItem from "./service-item";
import classes from "../../components/services/service.module.scss";

import "swiper/swiper-bundle.css";
import { Swiper, SwiperSlide } from "swiper/react";
import SwiperCore, { Pagination, Autoplay } from "swiper";

SwiperCore.use([Pagination, Autoplay]);

function AllServices(props) {
  const { services, service_section__items } = props;

  return (
    <div className={classes.area}>
      <Container>
        {service_section__items.map((service_section__item, index) => {
          return (
            <div className={classes.section} key={index}>
              <div className={classes.section_title}>
                <span>{service_section__item?.subTitle}</span>
                <h2
                  dangerouslySetInnerHTML={{
                    __html: service_section__item.title,
                  }}
                ></h2>
              </div>
              <div className={classes.section_banner}>
                <h3
                  className={classes.info}
                  dangerouslySetInnerHTML={{
                    __html: service_section__item.bannerInfo,
                  }}
                ></h3>
              </div>
            </div>
          );
        })}
        <Row>
          <Col lg={{ span: 12 }}>
            <Swiper
              // autoplay={{ delay: 4000, disableOnInteraction: false }}
              pagination={false}
              spaceBetween={30}
              breakpoints={{
                1200: {
                  slidesPerView: 3,
                  slidesPerColumn: 2,
                  slidesPerColumnFill: "row",
                },
                992: {
                  slidesPerView: 3,
                },
                768: {
                  slidesPerView: 2,
                },
                576: {
                  slidesPerView: 1,
                },
                0: {
                  slidesPerView: 1,
                },
              }}
              className={classes.slider}
            >
              {services.map((service) => {
                return (
                  <SwiperSlide key={service.slug}>
                    <ServiceItem service={service} />
                  </SwiperSlide>
                );
              })}
            </Swiper>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default AllServices;
