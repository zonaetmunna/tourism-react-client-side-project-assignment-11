import React, { useEffect, useState } from 'react';
import { Card, Col, Row, Button, Container } from 'react-bootstrap';

const ManageAllOrders = () => {
     const [orders, setOrders] = useState([]);
     useEffect(() => {
          fetch('https://calm-tor-36170.herokuapp.com/orderService')
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    setOrders(data)
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
          <div style={{ fontFamily: 'Poppins' }}>
               <div className="m-5 p-4">
                    <Container className="">
                         <h1 className="text-center text-primary mb-5">Manage All Orders</h1>
                         <Row sm={12} md={3} className="g-4">

                              {
                                   orders.map(order => <Col>
                                        <Card className="shadow border-0 p-3">
                                             <Card.Img variant="top" src="holder.js/100px160" />
                                             <Card.Body>
                                                  <Card.Text>order Owner : {order.name}</Card.Text>
                                                  <Card.Title>service name : {order.serviceName}</Card.Title>
                                                  <Card.Text>{order.id}</Card.Text>
                                                  <Button onClick={() => handleDelete(order._id)}>Delete</Button>
                                             </Card.Body>
                                        </Card>
                                   </Col>)
                              }
                         </Row>
                    </Container >
               </div >


          </div >
     );
};

export default ManageAllOrders;