import React from "react";
import { Col } from "react-bootstrap";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Pricebox(props) {

  if (!props.priceBox && !props.Testimonial && !props.logo) {
    return null;
  }

  return (
    <React.Fragment>

      {/*START PRICEBOX */}
      {props.priceBox &&
        props.priceBox.map((ele, index) => {
          return (
            <Col lg={4} className="mt-4" key={index}>
              <div
                className={`mt-3 bg-white text-center price_bus_box ${
                  index % 2 === 0 ? " " : "active"
                }`} 
              >
                <div className="price-name">
                  <h4 className="fw-bold mb-0">{ele.Heading}</h4>
                </div>
                <div className="lan-price mt-4">
                  <h1 className="text-custom fw-bold mb-0">
                    <sup>$</sup>
                    {ele.price}
                    <sub className="text-dark">{ele.time}</sub>
                  </h1>
                </div>
                <div className="lan_price_feat">
                  <p>
                    Project:{" "}
                    <span className="fw-bold text-dark">
                      {ele.totalProject}
                    </span>
                  </p>
                  <p>{ele.Theme}</p>
                  <p>
                    Support:{" "}
                    <span className="fw-bold text-dark">{ele.Support}</span>
                  </p>
                  <p>{ele.Domin}</p>
                  <p className="mb-0">{ele.Security}</p>
                </div>
                <div>
                  <Link to="/#" className="">
                    <Button size="md">{ele.btn}</Button>
                  </Link>
                </div>
              </div>
            </Col>
          );
        })}

      {/*END PRICEBOX */}
      
      {/* START TESTIMONIALBOX */}
      {props.Testimonial &&
        props.Testimonial.map((ele,index) => {
          return (
            <Col lg={4} key={index}>
              <div className="text-center testi_boxes mt-3 rounded">
                <div className="bus_testi_icon text-custom">
                  <i className="mbri-quote-left">{ele.icon}</i>
                </div>
                <div className="mt-3">
                  <p className="client_review font-italic text-center">
                    " {ele.client_review}"
                  </p>
                  <p className="client_name text-center text-white mb-0 mt-4">
                    {ele.client_name}
                  </p>
                </div>
              </div>
            </Col>
          );
        })}
      {/* END TESTIMONIALBOX */}

      {/* START TESTIMONIAL SYMBOL  */}
      {props.logo &&
        props.logo.map((ele,index) => {
          return (
            <Col lg={2} className=" mt-3" key={index}>
              <div className="logo_img">
                <a href="/#">
                  <img
                    src={ele.img}
                    alt="logo-img"
                    className="mx-auto img-fluid d-block"
                  />
                </a>
              </div>
            </Col>
          );
        })}
      {/* END TESTIMONIAL SYMBOL  */}

    </React.Fragment>
  );
}

export default Pricebox;
