import React from "react";
import { Col, Row } from "react-bootstrap";

function Servicebox(props) {
  return (
    <React.Fragment>
      {/* START SERVICES */}
      <Row className="">
        {props.data.map((ele,index) => {
          return (
            <Col lg={4} className="mb-3" key={index}>
              <div className="lan_box_ser mt-3 text-center">
                <div className="ser_icon">
                  <i>{ele.Logo}</i>
                </div>
                <div className="service-content mt-4">
                  <h5 className="fw-bold">{ele.Heding}</h5>
                  <p className="mt-3 text-muted">{ele.Detail}</p>
                </div>
              </div>
            </Col>
          );
        })}
      </Row>
      {/* END SERVICES */}
    </React.Fragment>
  );
}

export default Servicebox;
