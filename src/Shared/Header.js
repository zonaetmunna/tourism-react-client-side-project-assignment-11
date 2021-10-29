import React from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../Hooks/useAuth';

const Header = () => {
     const { user, logOut } = useAuth();
     return (
          <div>
               <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
                    <Container>
                         <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
                         <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                         <Navbar.Collapse id="responsive-navbar-nav">
                              <Nav className="me-auto">
                                   <Nav.Link as={Link} to="/home">Home</Nav.Link>
                                   <Nav.Link href="#pricing">service</Nav.Link>

                              </Nav>
                              <Nav>
                                   {user.email && <Nav.Link as={Link} to="/myOrder">my order</Nav.Link>}
                                   {user.email && <Nav.Link as={Link} to="/manageAllOrders">Manage All Orders</Nav.Link>}
                                   {user.email && <Nav.Link as={Link} to="/addNewService">Add New service</Nav.Link>}

                                   {user.email ? <Button onClick={logOut}>LogOut</Button> : <Nav.Link as={Link} to="/login">Login</Nav.Link>}
                              </Nav>
                         </Navbar.Collapse>
                    </Container>
               </Navbar>
          </div>
     );
};

export default Header;