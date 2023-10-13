import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { LayersOutlined } from "@mui/icons-material";
import { QuestionCircleFill } from "react-bootstrap-icons";
import Faqbox from "./Faq_box";
function Faq() {
  const dataArray = [
    {
      icon: <QuestionCircleFill fontSize={34} />,
      title: "When can be used?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: <QuestionCircleFill fontSize={34} />,
      title: "What is Item Support?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: <QuestionCircleFill fontSize={34} />,
      title: "Where Is My Purchase Code?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: <QuestionCircleFill fontSize={34} />,
      title: "How to Contact an Author?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: <QuestionCircleFill fontSize={34} />,
      title: "What is Lorem Ipsum?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
    {
      icon: <QuestionCircleFill fontSize={34} />,
      title: "Why use Lorem Ipsum?",
      content:
        "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    },
  ];
  return (
    <React.Fragment>
      {/* START FAQ  */}

      <section className="section" id="faq">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div className="text-center mx-auto lan_sec-title">
                <h2 className="fw-bold">Frequently Asked Questions</h2>
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
            <Faqbox dataArray={dataArray} />
          </Row>
        </Container>
      </section>

      {/* END FAQ  */}
    </React.Fragment>
  );
}

export default Faq;
