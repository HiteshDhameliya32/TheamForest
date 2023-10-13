import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { MobileFriendly } from "@mui/icons-material";
import { Email } from "@mui/icons-material";
import { LocationOn } from "@mui/icons-material";
import Footerbox from "./Footer_box";
function Footer() {
  
  const currentYear = new Date().getFullYear();
 

  const footerData = [
    {
      icon: <MobileFriendly fontSize="large" />,
      conect: "Call Us On",
      contact: "+985 123 7856",
    },
    {
      icon: <Email fontSize="large" />,
      conect: "Email Us At",
      contact: "Website.Busion@gmail.com",
    },
    {
      icon: <LocationOn fontSize="large" />,
      conect: "Visit Office",
      contact: "202, Grasselli Street , Conway.",
    },
  ];
  return (
    <React.Fragment>
      {/* START FOOTER */}
      <footer className="bg-dark section pb-0">
        <Container>
          <Row>
            <Footerbox footerData={footerData} />
          </Row>
          <div className="lan_footer_alt_border mt-5"></div>
          <Row>
            <Col>
              <div className="text-center pt-4 pb-4">
                <p className="mb-0 text-white">
                  {currentYear}
                  &copy; Busion. Design by{" "}
                  <a
                    className="text-white"
                    href="https://themeforest.net/user/srbthemes"
                    target="_blank"  rel="noopener noreferrer"
                  >
                    SRBThemes.
                  </a>
                </p>
              </div>
            </Col>
          </Row>
        </Container>
      </footer>
      {/* END FOOTER */}
    </React.Fragment>
  );
}

export default Footer;
