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

     const handleDelete = (id) => {
          const proceeded = window.confirm('are you sure?');
          if (proceeded) {
               const url = `https://calm-tor-36170.herokuapp.com/orderService/${id}`;
               fetch(url, {
                    method: "DELETE"
               })
                    .then(res => res.json())
                    .then(data => {
                         if ('data.deletedCount' > 0) {
                              alert('delete successfully');
                              const remainingOrder = orders.filter(order => order._id !== id);
                              setOrders(remainingOrder);
                         }
                    })

          }
     }
     return (
          <div>
               <div className="m-3 p-3">
                    <h1 className="text-center text-primary mb-3">My Order</h1>
                    <Row xs={1} md={4} className="g-4">
                         {
                              orders.map(order => <Col>
                                   <Card className="shadow border-0 p-3">
                                        <Card.Img variant="top" src={order.serviceImg} />
                                        <Card.Body>
                                             <Card.Title>{order.serviceName}</Card.Title>
                                             <Card.Text>{order.id}</Card.Text>
                                             <Button onClick={() => handleDelete(order._id)}>Delete</Button>

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