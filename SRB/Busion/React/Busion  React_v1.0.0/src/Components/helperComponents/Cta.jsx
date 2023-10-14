import React from 'react'
import { Button, Col, Container, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
function Cta() {
  return (
    <React.Fragment>
    {/* START CTA  */}
         <section className="section bg-dark">
        <Container>
          <Row className=" justify-content-center">
            <Col>
              <div className="text-center">
                <h2 className="text-white">Busion Bootstrap Landing Page Design</h2>
                <p className="text-secondary mx-auto cta-desc mt-4 pt-2">
                  Lorem ipsum dolor sit amet, consectetur adipisicing eli.Lorem
                  ipsum dolor sit amet, consectetur adipisicing eli.
                </p>
                <div className="mt-4 pt-3">
                  
                  <Link >
                  <Button variant='primary' className='rounded-5 py-2 px-3'>
                  Start Trial Free
                  </Button>
                  </Link>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>
      {/* END CTA  */}
    </React.Fragment>
  )
}

export default Cta