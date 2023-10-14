import React from "react";
import { Col } from "react-bootstrap";
function Faqbox(props) {
  return (
    <React.Fragment>
      {/* START FAQ BOX */}

      {props.dataArray.map((ele,index) => (
        <Col lg={4} className="mb-5" key={index}>
          <div className="lan_faq_boxes">
            <div className="mb-3">
              <i>{ele.icon}</i>
            </div>
            <div className="lan_faq_dec">
              <h5 className="fw-bold mb-0 mt-1">{ele.title}</h5>
              <p className="text-muted mt-2 mb-0">{ele.content}</p>
            </div>
          </div>
        </Col>
      ))}

      {/* END FAQ BOX */}
    </React.Fragment>
  );
}

export default Faqbox;
