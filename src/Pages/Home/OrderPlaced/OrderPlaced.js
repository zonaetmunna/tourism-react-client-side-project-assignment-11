import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Card, Col, Container, Row, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";

import { useParams } from 'react-router';

const OrderPlaced = () => {
     const { id } = useParams();
     const [service, setService] = useState([]);

     useEffect(() => {
          const url = `https://calm-tor-36170.herokuapp.com/services/${id}`;
          fetch(url)
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    setService(data)
               });
     }, [])



     const { register, handleSubmit, watch, formState: { errors } } = useForm();
     const onSubmit = (data) => {
          const url = 'http://localhost:5000/orderService';
          fetch(url, {
               method: "POST",
               headers: {
                    'content-type': 'application/json'
               },
               body: JSON.stringify(data)
          })
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    if (data.insertedId) {

                         alert('order added successfully');

                    }
               })

     };

     return (
          <div>
               <h1>{id}</h1>
               <Container>
                    <Row className="">
                         <Col sm={6}>
                              <Card >
                                   <Card.Img variant="top" src={service.img} />
                                   <Card.Body>
                                        <Card.Title>{service.name}</Card.Title>
                                        <Card.Text>{service.place}</Card.Text>
                                        <Button variant="primary">Add to booking</Button>
                                   </Card.Body>
                              </Card>
                         </Col>
                         <Col>
                              <h3>Please Give your information</h3>
                              <form onSubmit={handleSubmit(onSubmit)}>
                                   <input {...register("name")} placeholder="your name" className="mb-2" />
                                   <br />
                                   <input {...register("email")} placeholder="your email" className="mb-2" />
                                   <br />
                                   <input {...register("id")} placeholder="service id" className="mb-2" />
                                   <br />
                                   <input {...register("serviceName")} placeholder="serviceName" className="mb-2" />
                                   <br />
                                   <input {...register("address")} placeholder="your address" className="mb-2" />
                                   <br />

                                   <input type="submit" value="booking" />
                              </form>
                         </Col>
                    </Row>

               </Container>
          </div>
     );
};

export default OrderPlaced;