import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useParams } from 'react-router';

const OrderPlaced = () => {
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

     const handleAddBooking = (id) => {


          const url = 'http://localhost:5000/orderService';
          fetch(url, {
               method: "POST",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(id)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {

                         alert('order added successfully');

                    }
               })
     }

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
                                        <Button variant="primary" onClick={() => handleAddBooking(service._id)}>Add to booking</Button>
                                   </Card.Body>
                              </Card>
                         </Col>
                    </Row>
               </Container>
          </div>
     );
};

export default OrderPlaced;