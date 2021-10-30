import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button } from 'react-bootstrap';

const MyOrder = () => {
     const [orders, setOrders] = useState([]);
     useEffect(() => {
          fetch('https://calm-tor-36170.herokuapp.com/orderService')
               .then(res => res.json())
               .then(data => {
                    setOrders(data);
               })
     }, [])
     return (
          <div>
               <div className="m-3 p-3">
                    <h1 className="text-center text-primary mb-3">My Order</h1>
                    <Row xs={1} md={4} className="g-4">
                         {
                              orders.map(order => <Col>
                                   <Card className="shadow border-0 p-3">
                                        <Card.Img variant="top" src="holder.js/100px160" />
                                        <Card.Body>
                                             <Card.Title>{order.serviceName}</Card.Title>


                                        </Card.Body>
                                   </Card>
                              </Col>)
                         }
                    </Row>
               </div>

          </div>
     );
};

export default MyOrder;