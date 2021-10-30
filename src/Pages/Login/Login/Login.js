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
          <div >
               <div className="m-5 p-5">
                    <Row className="w-50 mx-auto text-center border  p-5 bg-light shadow-lg  ">
                         <h3 className="text-success">Please Sign in or Log In</h3>
                         <Col sm={12} md={12} className="h-100">
                              <Button className="p-3 fw-bold" onClick={handleGoogleSign}><i class="fab fa-google"></i> Google sign In</Button>
                         </Col>
                    </Row>
               </div>


          </div>
     );
};

export default Login;