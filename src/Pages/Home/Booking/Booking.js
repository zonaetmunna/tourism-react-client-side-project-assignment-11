import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const Booking = () => {
     const { id } = useParams();
     const [service, setService] = useState([]);
     useEffect(() => {
          const url = `http://localhost:5000/services/${id}`;
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    setService(data)
               });
     }, [])
     return (
          <div>
               <h1>{id}</h1>
               <Container>
                    <Row>
                         <Col sm={8}>
                              <Card >
                                   <Card.Img variant="top" src={service.img} />
                                   <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>{service.place}</Card.Text>
                                        <Button variant="primary">Go somewhere</Button>
                                   </Card.Body>
                              </Card>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default Booking;