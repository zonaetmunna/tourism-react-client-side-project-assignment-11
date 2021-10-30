import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { useForm } from "react-hook-form";


const AddNewService = () => {
     const { register, handleSubmit, watch, formState: { errors } } = useForm();

     const onSubmit = data => {
          fetch('https://calm-tor-36170.herokuapp.com/services', {
               method: "POST",
               headers: {
                    "content-type": "application/json"
               },
               body: JSON.stringify(data)
          })
               .then(res => res.json())
               .then(data => {
                    if (data.insertedId) {
                         alert('services added successfully')
                    }
               })
          console.log(data)
     };
     return (
          <div>
               <Row className="w-50 mx-auto">
                    <Col>
                         <h1>add new service</h1>
                         <form onSubmit={handleSubmit(onSubmit)}>

                              <input  {...register("name")} placeholder="name" />
                              <br />
                              <input {...register("place")} placeholder="place" />
                              <br />
                              <input {...register("description")} placeholder="Description" />
                              <br />
                              <input {...register("servicePrice")} placeholder="servicePrice" />
                              <br />
                              <input {...register("image")} placeholder="image url" />
                              <br />
                              <input type="submit" value="add service" />
                         </form>

                    </Col>
               </Row>
          </div>
     );
};

export default AddNewService;