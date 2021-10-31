import React, { useState } from 'react';
import { Carousel, Row, Button } from 'react-bootstrap';

const CarusalService = () => {
     const [index, setIndex] = useState(0);

     const handleSelect = (selectedIndex, e) => {
          setIndex(selectedIndex);
     };
     return (
          <div style={{ fontFamily: 'Poppins' }} className="mt-5">

               <Row className="mx-auto text-center w-75 mt-5 mb-5 shadow-lg">
                    <h3 className="text-center text-primary">Our service Gallery</h3>
                    <Carousel activeIndex={index} onSelect={handleSelect}>
                         <Carousel.Item>
                              <img
                                   className="d-block w-100"
                                   src={'https://i.ibb.co/61zpq5y/1.jpg'} height="500"
                                   alt="First slide"
                              />
                              <Carousel.Caption>
                                   <h3>Discover CostaRica</h3>
                                   <p>costarica,panama</p>
                                   <Button>Booking</Button>
                              </Carousel.Caption>
                         </Carousel.Item>
                         <Carousel.Item>
                              <img
                                   className="d-block w-100"
                                   src={'https://i.ibb.co/stvwfhj/2.jpg'} height="500"
                                   alt="Second slide"
                              />

                              <Carousel.Caption>
                                   <h3>Hiking Peru</h3>
                                   <p>Peru, Bolivia</p>
                                   <Button>Booking</Button>
                              </Carousel.Caption>
                         </Carousel.Item>
                         <Carousel.Item>
                              <img
                                   className="d-block w-100"
                                   src={'https://i.ibb.co/MMX5Rw2/4.jpg'} height="500"
                                   alt="Third slide"
                              />

                              <Carousel.Caption>
                                   <h3>Wondering Cuba</h3>
                                   <p>
                                        Cuba, Havana
                                   </p>
                                   <Button>Booking</Button>
                              </Carousel.Caption>
                         </Carousel.Item>
                    </Carousel>

               </Row>
          </div>
     );
};

export default CarusalService;