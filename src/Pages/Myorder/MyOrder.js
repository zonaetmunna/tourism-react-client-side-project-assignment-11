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
               <Row xs={1} md={2} className="g-4">
                    {
                         orders.map(order => <Col>
                              <Card>
                                   <Card.Img variant="top" src="holder.js/100px160" />
                                   <Card.Body>
                                        <Card.Title>{order.service_name}</Card.Title>
                                        <Card.Text>
                                             {order.email}
                                        </Card.Text>
                                        <Button> Delete</Button>
                                   </Card.Body>
                              </Card>
                         </Col>)
                    }
               </Row>
          </div>
     );
};

export default MyOrder;