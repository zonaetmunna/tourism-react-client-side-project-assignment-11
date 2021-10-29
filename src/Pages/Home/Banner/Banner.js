import React from 'react';
import { Col, Container, Row, Button, Image } from 'react-bootstrap';

const Banner = () => {
     return (
          <div>
               <Container>
                    <Row>
                         <Col>
                              <h1>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iure, nihil!</h1>
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