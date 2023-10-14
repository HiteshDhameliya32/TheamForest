import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router-dom";
import { Col, Container, Row } from "react-bootstrap";
import Modalvideo from "../helperComponents/Modalvideo";
import ReactPlayer from "react-player";

function Index11() {
  
  const [isOpen, setOpen] = useState(false);

  return (
    <React.Fragment>
      {/* START HOME */}

      <section
        className="home-bg section h-100vh bg-dark overflow-hidden"
        id="home"
      >
        <ReactPlayer
          className="react-player"
          url="https://www.youtube.com/embed/AYmZaEVOIIs?autoplay=1&modestbranding=1&controls=0&showinfo=0&rel=0&enablejsapi=1&version=3&playerapiid=mbYTP_video&origin=*&allowfullscreen=true&wmode=transparent&iv_load_policy=3&html5=1&widgetid=1"
          width="100vw"
          height="121vh"
          playing={true}
          muted={true}
          loop={true}
        />
        <div className="bg-overlay"></div>
        <Container className="position-relative">
          <Modalvideo modal={isOpen} setOpen={setOpen} />

          <Row className=" justify-content-center">
            <Col>
              <div className="text-white text-center">
                <h1 className="bus_home_title mx-auto">
                  We Are Creative Landing Page Template
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

export default Index11;
