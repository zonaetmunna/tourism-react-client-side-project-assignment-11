import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';

const Offer = () => {
     return (
          <div style={{ fontFamily: 'Poppins' }} >
               <div className="mt-4 m-2 mb-4  shadow-lg">
                    <Container>
                         <Row className=" text-dark align-items-center">
                              <Col sm={12} md={6} className="p-2 mt-3 bg-success mb-4">
                                   <Image src='https://i.ibb.co/khg9Bxx/h2-img-1.png' className="p-5 img-fluid shadow-lg" />
                              </Col>
                              <Col sm={12} md={6} className="ps-5 ">
                                   <h2>Last Minute offer</h2>
                                   <h5>Aerial view of Cape Town with Cape Town Stadium</h5>
                                   <p>Peru and Bolivia are both lands of the epic and that which must be seen to be believed. This 25-day odyssey takes you to the world’s highest-navigable lake (Titicaca), the world’s largest tropical rainforest (the Amazon), the world’s highest administrative capital (La Paz) and the world’s largest salt flats (Uyuni)</p>
                                   <Button variant="primary" className="shadow">Learn now</Button>
                              </Col>
                         </Row>
                    </Container>
               </div>

          </div>
     );
};

export default Offer;