import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { TypeAnimation } from "react-type-animation";
import bg from "../../assets/Image/home-bg.jpg";
import { Col, Container, Row } from "react-bootstrap";
import "react-modal-video/css/modal-video.min.css";
import Modalvideo from "../helperComponents/Modalvideo";

function Index9() {

  const [isOpen, setOpen] = useState(false);

  return (

    <React.Fragment>

      {/* START HOME */}

      <section
        className="home-half h-100vh position-relative d-flex align-items-center home-bg-img"
        id="home"
        style={{
          backgroundImage: `url(${bg})`,
          backgroundPosition: "center center",
        }}
      >
        <div className="bg-overlay"></div>
        <Container className=" z-index">
          <Modalvideo modal={isOpen} setOpen={setOpen} />

          <Row className=" justify-content-center">
            <Col>
              <div className="text-white text-center">
                <h1 className="bus_home_title mx-auto">
                  <TypeAnimation
                    sequence={[
                      "We Are Creative Landing Page Template",
                      2000,
                      "Professional Landing Page Template",
                      2000,
                      "We Are Creative And Modern Design",
                      2000,
                    ]}
                    speed={5}
                    repeat={Infinity}
                  />
                </h1>
                <p className="bus_home_subtitle pt-4 mx-auto">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout
                  look like readable English.
                </p>
                <div className="bus_home_btn">
                  <Link to="/#" className="">
                    {" "}
                    <Button
                      variant="primary"
                      className="py-2 px-4 fs-6 rounded-5 mt-4 me-3"
                    >
                      Learn More
                    </Button>
                  </Link>
                  <span className="me-3">OR</span>

                  <Link className="">
                    {" "}
                    <Button
                      variant="outline-light"
                      className="py-2 px-4 fs-6 rounded-5 mt-4 me-3"
                    >
                      Watch Video
                    </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      {/* END HOME */}
      
    </React.Fragment>
  );
}

export default Index9;
