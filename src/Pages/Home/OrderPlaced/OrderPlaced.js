import React, { useEffect, useState } from "react";
import { Card, Col, Container, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

import { useParams } from "react-router";

const OrderPlaced = () => {
  const { id } = useParams();
  const [service, setService] = useState([]);

  useEffect(() => {
    const url = `http://localhost:5000/services/${id}`;
    fetch(url)
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setService(data);
      });
  }, []);

  const { register, handleSubmit, reset } = useForm();
  const onSubmit = (data) => {
    const url = "http://localhost:5000/orderService";
    fetch(url, {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          alert("order added successfully");
          reset("");
        }
      });
  };

  return (
    <div style={{ fontFamily: "Poppins" }} className="m-5 p-3">
      <Container className="">
        <h3 className="text-center text-primary mb-5">Booking Details</h3>
        <Row className="">
          <Col sm={12} md={6} className="mb-3">
            <Card className="shadow-lg p-3">
              <Card.Img variant="top" src={service.img} />
              <Card.Body>
                <Card.Title>{service.name}</Card.Title>
                <Card.Text>place-Name : {service.place}</Card.Text>
                <Card.Text>service-id : {service._id}</Card.Text>
                <Card.Text>
                  service-Price : <i class="fas fa-dollar-sign"></i>{" "}
                  {service.servicePrice}
                </Card.Text>
                <Card.Text>{service.description}</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col sm={12} md={6} className="text-center  ">
            <h3>Please Give your information</h3>
            <form onSubmit={handleSubmit(onSubmit)} className="shadow-lg p-4">
              <input
                type="text"
                {...register("userName", { required: true })}
                placeholder="your name"
                className="mb-2 p-1"
              />
              <br />
              <input
                type="email"
                {...register("UserEmail", { required: true })}
                placeholder="your email"
                className="mb-2 p-1"
              />
              <br />
              <input
                type="text"
                {...register("UserAddress", { required: true })}
                placeholder="your address"
                className="mb-2 p-1"
              />
              <br />
              <input
                value={service._id}
                {...register("serviceId", { required: true })}
                placeholder="service id"
                className="mb-2 p-1"
              />
              <br />
              <input
                value={service.name}
                {...register("serviceName", { required: true })}
                placeholder="serviceName"
                className="mb-2 p-1 "
              />
              <br />
              <input
                value={service.servicePrice}
                {...register("servicePrice", { required: true })}
                placeholder="service-price"
                className="mb-2 p-1 "
              />
              <br />
              <input
                value={service.img}
                {...register("serviceImg", { required: true })}
                placeholder="serviceName"
                className="mb-2 p-1 "
              />
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
