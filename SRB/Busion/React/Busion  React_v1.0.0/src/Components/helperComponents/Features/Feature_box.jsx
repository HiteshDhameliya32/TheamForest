import React from "react";
import { Col,Row} from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
function Featurebox(props) {
  return (
    <React.Fragment>
      {/* START FETUREBOX */}

      {props.fetureBox.map((ele, index) => {
        return (
          <Row
            className={`mt-4 pt-4 vertical-content ${
              index % 2 === 0 ? "" : "flex-row-reverse"
            }`} key={index}
          >
            <Col lg={6}>
              <div className="mt-3">
                <img
                  src={ele.Images}
                  alt=""
                  className="mx-auto d-block img-fluid"
                />
              </div>
            </Col>
            <Col lg={6}>
              <div className="lan_features_box mt-3">
                <div className="lan_features_icon">
                  <i className=" text-center">{ele.Icon}</i>
                </div>
                <div className="lan_features_content mt-4">
                  <h3 className="fw-bold">{ele.Heading}</h3>
                  <p className="text-muted lan_features_subtitle mt-3">
                    {ele.Detail}
                  </p>
                  <p className="mb-0 text-muted">
                    <i className=" text-custom">{ele.listIcon}</i> {ele.list1}
                  </p>
                  <p className="mb-0 text-muted">
                    <i className=" text-custom">{ele.listIcon}</i> {ele.list2}
                  </p>
                  <p className="mb-0 text-muted">
                    <i className=" text-custom">{ele.listIcon}</i> {ele.list3}
                  </p>
                  <div className="mt-4">
                    <Link to="/#" className=" ">
                      <Button className="rounded-5 py-2 px-3">{ele.btn}</Button>
                    </Link>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        );
      })}

      {/* END FETUREBOX */}
    </React.Fragment>
  );
}

export default Featurebox;
