import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';

const Banner = () => {
     const styles = {
          backgroundImage: 'url(https://i.ibb.co/bbg2vzQ/images.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', width: '100vw',
          height: '100vh'
     }
     return (
          <div style={styles}>
               <Container style={{ fontFamily: 'Poppins' }}>
                    <Row>
                         <Col sm={12} md={6} className="text-dark mt-5">
                              <h1>World Travel</h1>
                              <h5>Peru and Bolivia are both lands of the epic and that which must be seen to be believed. This 25-day odyssey takes you to the world’s highest-navigable lake (Titicaca), the world’s largest tropical rainforest (the Amazon), the world’s highest administrative capital (La Paz) and the world’s largest salt flats (Uyuni)</h5>
                              <Button>Booking</Button>
                         </Col>

                    </Row>
               </Container>
          </div>
     );
};

export default Banner;