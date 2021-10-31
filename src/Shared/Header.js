import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
     const { user, logOut } = useAuth();
     return (
          <div style={{ fontFamily: 'Poppins' }}>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark" className="shadow-lg">
                    <Container>
                         <Navbar.Brand as={Link} to="/home" className="text-primary">World Travel</Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link as={Link} to="/home" className="text-white">Home</Nav.Link>

                              </Nav>
                              <Nav className="">
                                   {user.displayName && <Nav.Link as={Link} to="/myOrder" className="text-white">my order</Nav.Link>}
                                   {user.displayName && <Nav.Link as={Link} to="/manageAllOrders" className="text-white">Manage All Orders</Nav.Link>}
                                   {user.displayName && <Nav.Link as={Link} to="/addNewService" className="text-white">Add New service</Nav.Link>}

                                   {user.displayName ? <Button onClick={logOut}>LogOut</Button> : <Nav.Link as={Link} to="/login" className="text-white">Login</Nav.Link>}
                                   {user.displayName && <Nav.Link as={Link} to="">{user.displayName}</Nav.Link>}
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;