import React from "react";
import { Col, Row } from "react-bootstrap";
import { useForm } from "react-hook-form";

const AddNewService = () => {
  const { register, handleSubmit, reset } = useForm();

  const onSubmit = (data) => {
    fetch(
      "https://tourism-react-server-side-project-assignment-11.vercel.app/services",
      {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(data),
      }
    )
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          alert("services added successfully");
          reset();
        }
      });
    console.log(data);
  };
  return (
    <div style={{ fontFamily: "Poppins" }}>
      <div className="m-5 p-3">
        <Row className="mx-auto text-center">
          <Col xs={12} md={12} className="shadow p-4">
            <h1 className="text-success">Add New Service</h1>
            <form onSubmit={handleSubmit(onSubmit)}>
              <input {...register("name")} placeholder="name" className="m-2" />
              <br />
              <input
                {...register("place")}
                placeholder="place"
                className="m-2"
              />
              <br />
              <input
                {...register("description")}
                placeholder="Description"
                className="m-2"
              />
              <br />
              <input
                {...register("servicePrice")}
                placeholder="servicePrice"
                className="m-2"
              />
              <br />
              <input
                {...register("img")}
                placeholder="image url"
                className="m-2"
              />
              <br />
              <input type="submit" value="add service" className="m-2" />
            </form>
          </Col>
        </Row>
      </div>
    </div>
  );
};

export default AddNewService;
