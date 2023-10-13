import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import c1 from "../../../assets/Image/client_1.png";
import c2 from "../../../assets/Image/client_2.png";
import c3 from "../../../assets/Image/client_3.png";
import c4 from "../../../assets/Image/client_4.png";
import c5 from "../../../assets/Image/client_5.png";
import c6 from "../../../assets/Image/client_6.png";
import { Quote } from "react-bootstrap-icons";
import { LayersOutlined } from "@mui/icons-material";
import Pricebox from "./Price_box";


function Pricing() {
  const priceBox = [
    {
      Heading: "Basic",
      price: "19.00",
      time: "/m",
      totalProject: "10",
      Theme: "Wordpress Theme",
      Support: "No",
      Domin: "10 Domain",
      Security: "Enhanced Security",
      btn: "Choose Plan",
    },
    {
      Heading: "Professional",
      price: "29.00",
      time: "/m",
      totalProject: "10",
      Theme: "Wordpress Theme",
      Support: "Yes",
      Domin: "30 Domain",
      Security: "Enhanced Security",
      btn: "Choose Plan",
    },
    {
      Heading: "Expert",
      price: "39.00",
      time: "/m",
      totalProject: "60",
      Theme: "Wordpress Theme",
      Support: "Yes",
      Domin: "Unlimited Domain",
      Security: "Enhanced Security",
      btn: "Choose Plan",
    },
  ];
  const Testimonials = [
    {
      icon: <Quote size={50} />,
      client_review:
        " Aenean a congue sem. In vulputate iaculis nunc, sed scelerisque turpis condimentum id. Donec ut tortor bibendum posuere.",
      client_name: "- Ebony verty, Busion",
    },
    {
      icon: <Quote size={50} />,
      client_review:
        " Aenean a congue sem. In vulputate iaculis nunc, sed scelerisque turpis condimentum id. Donec ut tortor bibendum posuere.",
      client_name: "- Ebony verty, Busion",
    },
    {
      icon: <Quote size={50} />,
      client_review:
        " Aenean a congue sem. In vulputate iaculis nunc, sed scelerisque turpis condimentum id. Donec ut tortor bibendum posuere.",
      client_name: "- Ebony verty, Busion",
    },
  ];
  const logoSymbol = [
    {
      img: c1,
    },
    {
      img: c2,
    },
    {
      img: c3,
    },
    {
      img: c4,
    },
    {
      img: c5,
    },
    {
      img: c6,
    },
  ];
  return (
    <React.Fragment>
      {/* START PRICING  */}
      <section className="section bg-light" id="price">
        <Container>
          <Row className=" justify-content-center">
            <Col>
              <div className="text-center mx-auto lan_sec-title">
                <h2 className="fw-bold">Our Pricing</h2>
                <div className="bus_lan_titbor">
                  <i>
                    <LayersOutlined />
                  </i>
                </div>
                <p className="text-muted bus_subtitle mx-auto mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </Col>
          </Row>
          <Row className=" mt-4 pt-4">
            <Pricebox priceBox={priceBox} />
          </Row>
        </Container>
      </section>
      {/* END PRICING  */}

      {/* Start Testimonial */}

      <section className="section bg-dark" id="client">
        <Container>
          <Row className=" justify-content-center">
            <Col>
              <div className="text-center mx-auto lan_sec-title">
                <h2 className="fw-bold text-white">Our Client's</h2>
                <div className="bus_lan_titbor">
                  <i className="mdi mdi-vector-combine text-white">
                    <LayersOutlined />
                  </i>
                </div>
                <p className="text-secondary bus_subtitle mx-auto mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </Col>
          </Row>
          <Row className=" justify-content-center mt-4 pt-4">
            <Pricebox Testimonial={Testimonials} />
          </Row>
          <Row className="row mt-4 pt-4">
            <Pricebox logo={logoSymbol} />
          </Row>
        </Container>
      </section>

      {/* End Testimonial   */}
    </React.Fragment>
  );
}

export default Pricing;
