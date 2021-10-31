import React from 'react';
import { Card, Col, Button } from 'react-bootstrap';
import { useHistory } from 'react-router';

const Service = ({ service }) => {
     const { _id, name, place, servicePrice, img } = service;
     const history = useHistory();

     const handleBooking = () => {
          history.push(`/orderPlaced/${_id}`)
     }

     return (
          <div >
               <Col>
                    <Card className="shadow-lg p-3">
                         <Card.Img variant="top" src={img} width="" height="400" />
                         <Card.Body>
                              <Card.Title>{name}</Card.Title>
                              <Card.Text> {place}</Card.Text>
                              <Card.Text><i class="fas fa-dollar-sign"></i> {servicePrice}</Card.Text>
                              <Button onClick={handleBooking} variant="primary" className="shadow">Booking</Button>
                         </Card.Body>

                    </Card>
               </Col>
          </div>
     );
};

export default Service;