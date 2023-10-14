import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import Servicebox from "./Service_box";
import { Database } from "react-bootstrap-icons";
import {
  AppRegistrationOutlined,
  CloudUploadOutlined,
  FormatColorFillOutlined,
  LayersOutlined,
  SpaOutlined,
  WifiFindOutlined,
} from "@mui/icons-material";

function Service() {
  const Services = [
    {
      Logo: <Database sx={{ fontSize: 40 }} />,
      Heding: "Graphic Design",
      Detail:
        "The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.",
    },
    {
      Logo: <FormatColorFillOutlined sx={{ fontSize: 40 }} />,
      Heding: "Unlimited Color",
      Detail:
        "The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.",
    },
    {
      Logo: <CloudUploadOutlined sx={{ fontSize: 40 }} />,
      Heding: "Media Marketing",
      Detail:
        "The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.",
    },
    {
      Logo: <WifiFindOutlined sx={{ fontSize: 40 }} />,
      Heding: "Unlimited Wifi",
      Detail:
        "The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.",
    },
    {
      Logo: <SpaOutlined sx={{ fontSize: 40 }} />,
      Heding: "Responsive Design",
      Detail:
        "The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.",
    },
    {
      Logo: <AppRegistrationOutlined sx={{ fontSize: 40 }} />,
      Heding: "Easy to customize",
      Detail:
        "The standard chunk of Lorem Ipsum used since the is reproduced below for those interested.",
    },
  ];
  
  return (
    <React.Fragment>
      {/* START SERVICES  */}
      <section className="section bg-light" id="services">
        <Container>
          <Row className="justify-content-center">
            <Col>
              <div className="text-center mx-auto lan_sec-title">
                <h2 className="fw-bold">Our Services</h2>
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
            <Servicebox data={Services} />
          </Row>
        </Container>
      </section>
      {/* END SERVICES */}
    </React.Fragment>
  );
}

export default Service;
