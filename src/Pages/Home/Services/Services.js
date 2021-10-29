import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
     const [services, setServices] = useState([])
     useEffect(() => {
          fetch('http://localhost:5000/services')
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    setServices(data)
               })
     }, [])
     return (
          <div>
               <h3 className="text-center text-primary">this is services</h3>
               <Row xs={1} md={3} className="g-4">
                    {
                         services.map(service => <Service
                              key={service._id}
                              service={service}
                         ></Service>)
                    }
               </Row>
          </div>
     );
};

export default Services;