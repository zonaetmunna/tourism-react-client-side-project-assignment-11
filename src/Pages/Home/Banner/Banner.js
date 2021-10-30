import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';

const Banner = () => {
     const styles = {
          backgroundImage: 'url(https://i.ibb.co/tz80KcT/images.jpg)',
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat', width: '100vw',
          height: '100vh'
     }
     return (
          <div style={styles}>
               <Container>
                    <Row>
                         <Col className="text-dark mt-5">
                              <h1>World Truism</h1>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eveniet nostrum eligendi impedit, delectus incidunt quia provident odit totam. Voluptate ullam recusandae, consequuntur libero accusamus eaque a sit deserunt quos id.</p>
                              <Button>Booking</Button>
                         </Col>
                         <Col>
                              <Image src="" />
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Banner;