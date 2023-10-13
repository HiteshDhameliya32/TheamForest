import React, { useState } from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import Modalvideo from "../helperComponents/Modalvideo";

function Index2() {
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      {/* START HOME */}
      <section className="home-bg section home-half" id="home">
        <Container>
          <Modalvideo modal={isOpen} setOpen={setOpen} />

          <Row className=" justify-content-center">
            <Col>
              <div className="text-white text-center">
                <h1 className="bus_home_title mx-auto">
                  We Are Creative Landing Page Template
                </h1>
                <p className="bus_home_subtitle pt-4  mx-auto">
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

export default Index2;
