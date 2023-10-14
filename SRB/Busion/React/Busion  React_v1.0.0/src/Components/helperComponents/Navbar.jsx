import React,{ useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Button } from "react-bootstrap";
import Scrollspy from "react-scrollspy";
function ColorSchemesExample() {
  const [sticky, setSticky] = useState("");

  // Start Sticky
  
  
  useEffect(() => {
    window.addEventListener("scroll", isSticky);
    return () => {
      window.removeEventListener("scroll", isSticky);
    };
  }, []);

  const isSticky = () => {
    const scrollTop = window.scrollY;
    const stickyclassName =
      scrollTop >= 200 ? "md-sticky-top py-3  stickyadd" : "";
    setSticky(stickyclassName);
  };

  const classNamees = ` fixed-top d-xl-block  ${sticky}`;

  // End Sticky
  return (
    <React.Fragment>
      {/* START NAVBAR */}
      <Navbar
        expand="lg"
        data-bs-theme="dark"
        className={`custom-nav py-2  ${classNamees}`}
      >
        <Container>
          <Navbar.Brand href="#home" className="logo-brand navbar-brand ">
            Busion
          </Navbar.Brand>
          
          <Navbar.Toggle aria-controls="basic-navbar-nav navbar-toggle" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto gap-3  " id="basic-navbar-nav">
              <Scrollspy
                className="  navbar-nav "
                items={[
                  "home",
                  "services",
                  "features",
                  "price",
                  "client",
                  "team",
                  "faq",
                  "contact",
                ]}
                currentClassName="active"
              >
                <Nav.Link href="#home" data-to-scrollspy-id="home">
                  Home
                </Nav.Link>

                <Nav.Link href="#services" data-to-scrollspy-id="services">
                  Services
                </Nav.Link>

                <Nav.Link href="#features" data-to-scrollspy-id="features">
                  Features
                </Nav.Link>
                
                <Nav.Link href="#price" data-to-scrollspy-id="price">
                  Pricing
                </Nav.Link>

                <Nav.Link href="#client" data-to-scrollspy-id="client">
                  Client
                </Nav.Link>

                <Nav.Link href="#team" data-to-scrollspy-id="team">
                  Team
                </Nav.Link>

                <Nav.Link href="#faq" data-to-scrollspy-id="faq">
                  FAQ
                </Nav.Link>

                <Nav.Link href="#contact" data-to-scrollspy-id="contact">
                  Contact
                </Nav.Link>

                <Button className="btn btn-custom align-middle waves-effect waves-light rounded-5 px-3 py-2">
                  Buy Now
                </Button>

              </Scrollspy>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>
      {/* END NAVBAR */}
    </React.Fragment>
  );
}

export default ColorSchemesExample;
