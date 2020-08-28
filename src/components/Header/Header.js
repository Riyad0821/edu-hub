import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';
import { Form, FormControl, Button, Navbar, Nav } from 'react-bootstrap';
const Header = () => {
    return (
         <div className="Header">
             <div>
                <img src={logo} alt=""/>
             </div>
             <div>
                    <Navbar bg="dark" variant="dark">
                        <Navbar.Brand href="#home"></Navbar.Brand>
                        <Nav className="mr-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#features">Features</Nav.Link>
                        <Nav.Link href="#pricing">Pricing</Nav.Link>
                        </Nav>
                        <Form inline>
                        <FormControl type="text" placeholder="Search" className="mr-sm-2" />
                        <Button variant="outline-info">Search</Button>
                        </Form>
                    </Navbar>
                    
             </div>
         </div>
    );
};

export default Header;