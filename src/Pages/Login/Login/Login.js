import React from 'react';
import { Button, Col, Row } from 'react-bootstrap';
import { useHistory, useLocation } from 'react-router';
import useAuth from '../../../Hooks/useAuth';


const Login = () => {
     const { user, signInWithGoogle } = useAuth()
     const history = useHistory();
     const location = useLocation();

     const redirect_url = location.state?.from || '/home';

     const handleGoogleSign = () => {
          signInWithGoogle()
               .then(result => {
                    history.push(redirect_url);
               })
     }
     return (
          <div style={{ fontFamily: 'Poppins' }}>
               <div className="m-5 p-5">
                    <Row className=" mx-auto text-center border  p-5 bg-light shadow-lg  ">
                         <h3 className="text-success mb-3">Please Sign in with Google</h3>
                         <Col sm={12} md={12} className="mx-auto ">
                              <Button className="p-3 fw-bold" onClick={handleGoogleSign}><i class="fab fa-google"></i> Google sign In</Button>
                         </Col>
                    </Row>
               </div>


          </div>
     );
};

export default Login;