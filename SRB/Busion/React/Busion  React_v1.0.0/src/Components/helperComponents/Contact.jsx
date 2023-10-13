import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import { useState } from "react";
import Form from "react-bootstrap/Form";
import { LayersOutlined } from "@mui/icons-material";

function Contact() {

  const [validated, setValidated] = useState(false);


  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  return (

    <React.Fragment>

      {/* START CONTACT */}

      <section className="section bg-light" id="contact">
        <Container>
          <Row className=" justify-content-center">
            <Col>
              <div className="text-center mx-auto lan_sec-title">
                <h2 className="fw-bold">Contact Us</h2>
                <div className="bus_lan_titbor">
                  <i className="mdi mdi-vector-combine">
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
            <Col>
              <Form noValidate validated={validated} onSubmit={handleSubmit}>
                <Row className="mb-3">
                  <Form.Group as={Col} md="6" className="mb-3 mb-md-0" controlId="validationCustomName">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Your Name*"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                  <Form.Group as={Col} md="6"  controlId="validationCustomEmail">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Your Email*"
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12" controlId="validationCustomSubject">
                    <Form.Control
                      required
                      type="text"
                      placeholder="Your Subject..."
                    />
                    <Form.Control.Feedback>Looks good!</Form.Control.Feedback>
                  </Form.Group>
                </Row>
                <Row className="mb-3">
                  <Form.Group as={Col} md="12">
                    <Form.Control
                      required
                      as="textarea"
                      placeholder="Your message..."
                      style={{ height: "100px" }}
                    />
                  </Form.Group>
                </Row>

                <Button size="lg"  type="submit">Submit form</Button>
              </Form>
            </Col>
          </Row>
        </Container>
      </section>
      
      {/* END CONTACT */}
     
    </React.Fragment>
  );
}

export default Contact;
