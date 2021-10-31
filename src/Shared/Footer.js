import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';

const Footer = () => {
     return (
          <div style={{ fontFamily: 'Poppins' }}>
               <div className="bg-dark p-3 ">
                    <Container>
                         <Row className="p-3 m-3">
                              <Col xs={12} sm={4} className="">
                                   <h3 className="text-primary">World Travel</h3>
                                   <p className="text-white">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur maxime sint nihil quo nisi totam quod libero consectetur vel fugit.</p>
                              </Col>

                              <Col xs={12} sm={4} className="text-white">
                                   <h3 className="text-primary">Contact-us</h3>
                                   <h5>Address : Strömgatan 18, Stockholm</h5>
                                   <p>telephone :Sweden(+46) 322.170.71</p>
                                   <p>email : roam@qodeinteractive.com</p>
                              </Col>
                              <Col xs={12} sm={4} className="text-white ">
                                   <h3 className="text-primary ps-2 ">About-us</h3>
                                   <i className="fab fa-facebook ps-3 "></i>
                                   <i className="fab fa-google ms-3"></i>
                              </Col>
                         </Row>
                    </Container>
               </div>

          </div>
     );
};

export default Footer;