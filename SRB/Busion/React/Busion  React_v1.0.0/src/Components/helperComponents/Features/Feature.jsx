import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import { Stars, Stack } from "react-bootstrap-icons";
import {
  LayersOutlined,
  RocketLaunchOutlined,
  RadioButtonCheckedOutlined,
} from "@mui/icons-material";
import Feture1 from "../../../assets/Image/features-1.png";
import Feture2 from "../../../assets/Image/features-2.png";
import Feture3 from "../../../assets/Image/features-3.png";
import Feturebox from "./Feature_box";;

function Feature() {
  const fetureBox = [
    {
      Images: Feture1,
      Icon: <Stars />,
      Heading: "Clean & Minimal Design",
      Detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.",
      listIcon: <RadioButtonCheckedOutlined fontSize="sm" />,
      list1: "Busion Landing Page",
      list2: " Bootstrap Html Css Design.",
      list3: " Clean & Creative.",
      btn: "Read More",
    },
    {
      Images: Feture2,
      Icon: <Stack />,
      Heading: "Planing & Strategy",
      Detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.",
      listIcon: <RadioButtonCheckedOutlined fontSize="sm" />,
      list1: "Busion Landing Page.",
      list2: " Bootstrap Html Css Design.",
      list3: " Clean & Creative.",
      btn: "Read More",
    },
    {
      Images: Feture3,
      Icon: <RocketLaunchOutlined fontSize="large" />,
      Heading: "Elegant & Modern Design",
      Detail:
        "Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor aliqua.",
      listIcon: <RadioButtonCheckedOutlined fontSize="sm" />,
      list1: "Busion Landing Page",
      list2: " Bootstrap Html Css Design.",
      list3: " Clean & Creative.",
      btn: "Read More",
    },
  ];
  return (
    <React.Fragment>
      {/* START FEATURES */}
      <section className="section" id="features">
        <Container>
          <Row className=" justify-content-center">
            <Col>
              <div className="text-center mx-auto lan_sec-title">
                <h2 className="fw-bold">Our Features</h2>
                <div className="bus_lan_titbor">
                  <LayersOutlined />
                </div>
                <p className="text-muted bus_subtitle mx-auto mt-2">
                  It is a long established fact that a reader will be distracted
                  by the readable content of a page when looking at its layout.
                </p>
              </div>
            </Col>
          </Row>
          <Feturebox fetureBox={fetureBox} />
        </Container>
      </section>
      {/* END FEATURES */}
    </React.Fragment>
  );
}

export default Feature;
