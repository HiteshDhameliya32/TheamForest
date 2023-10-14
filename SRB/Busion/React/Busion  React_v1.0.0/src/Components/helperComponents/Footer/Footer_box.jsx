import React from 'react'
import { Col } from 'react-bootstrap'
function Footerbox(props) {
  return (
    <React.Fragment>
{
    props.footerData.map((ele,index)=>{
        return(
            <Col lg={4} key={index}>
                        <div className="text-center text-white">
                            <div className='contact-icon'>
                                <i>
                               {ele.icon}
                                </i>
                                
                            </div>
                            <div className="contact-detail mt-3">
                                <p className="mb-0">{ele.conect}</p>
                                <a className="text-secondary" href="tel:+985 123 7856">{ele.contact}</a>
                            </div>
                        </div>
                    </Col>
        )
    })
}
    </React.Fragment>
  )
}

export default Footerbox