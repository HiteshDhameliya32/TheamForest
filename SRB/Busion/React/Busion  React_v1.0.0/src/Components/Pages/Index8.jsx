import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import ReactTextRotator from "react-text-rotator";
import { Col, Container, Row } from "react-bootstrap";
import Modalvideo from "../helperComponents/Modalvideo";

function Index8() {

  const [isOpen, setOpen] = useState(false);
  const content = [
    {
      text: "We Are Creative Landing Page Template",
      className: "classA",
      animation: "fade",
    },
    {
      text: "Professional Landing Page Template",
      className: "classB",
      animation: "fade",
    },
    {
      text: "We Are Creative And Modern Design",
      className: "classC",
      animation: "fade",
    },
  ];

  return (

    <React.Fragment>

      {/* START HOME */}

      <section className="home-bg section h-100vh" id="home">
        <Container>
          <Modalvideo modal={isOpen} setOpen={setOpen} />

          <Row className=" justify-content-center">
            <Col>
              <div className="text-white text-center">
                <h1 className="bus_home_title mx-auto">
                  <ReactTextRotator
                    content={content}
                    time={5000}
                    startDelay={0}
                  />
                </h1>
                <p className="bus_home_subtitle pt-4 text-white-50 mx-auto">
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

                 <Link  className="">
                  
                  <Button
                    variant="outline-light"
                    className="py-2 px-4 fs-6 rounded-5 mt-4 me-3"
                    onClick={() => setOpen(true)}
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

export default Index8;
