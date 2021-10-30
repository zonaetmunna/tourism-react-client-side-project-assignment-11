import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Row } from 'react-bootstrap';
import Service from '../Service/Service';

const Services = () => {
     const [services, setServices] = useState([])
     useEffect(() => {
          fetch('https://calm-tor-36170.herokuapp.com/services')
               .then(res => res.json())
               .then(data => {
                    console.log(data)
                    setServices(data)
               })
     }, [])
     return (
          <div className="m-3 p-3">
               <h3 className="text-center text-primary">Our Services</h3>
               <Row sm={12} md={3} className="g-4 ">
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