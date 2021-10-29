import React from 'react';
import { Button } from 'react-bootstrap';
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
          <div>
               <Button onClick={handleGoogleSign}> Google sign In</Button>
          </div>
     );
};

export default Login;