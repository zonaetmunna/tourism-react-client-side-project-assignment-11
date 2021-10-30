import React, { useEffect, useState } from 'react';
import { Col, Row } from 'react-bootstrap';

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
          <div>
               <Row className="w-50 mx-auto">
                    <Col>
                         <ul>
                              {
                                   orders.map(order => <li>{order.serviceName} {order.name} <button onClick={() => handleDelete(order._id)}>Delete</button></li>)
                              }
                         </ul>
                    </Col>
               </Row>
          </div>
     );
};

export default ManageAllOrders;