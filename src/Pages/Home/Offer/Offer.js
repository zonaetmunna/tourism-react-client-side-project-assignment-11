import React from 'react';
import { Col, Container, Image, Row, Button } from 'react-bootstrap';

const Offer = () => {
     return (
          <div >
               <div className="mt-4 m-2 mb-4 bg-success shadow-lg">
                    <Container>
                         <Row className=" text-dark align-items-center">
                              <Col className="p-3">
                                   <Image src='https://i.ibb.co/khg9Bxx/h2-img-1.png' className="p-3" />
                              </Col>
                              <Col className="p-3">
                                   <h2>Last Minute offer</h2>
                                   <h5>Aerial view of Cape Town with Cape Town Stadium</h5>
                                   <p>Lorem ipsum dolor sit amet. Lorem Ipsn gravida. Pro ain gravida nibh vel velit an auctor aliqueenean ollicitudin ain gravida nibh vel version an ipsum. Lorem ipsim dolor sit amet auctor aliqueenean ollicitudin.</p>
                                   <Button variant="primary">Learn now</Button>
                              </Col>
                         </Row>
                    </Container>
               </div>

          </div>
     );
};

export default Offer;