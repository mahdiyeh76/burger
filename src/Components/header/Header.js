import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';



export default class Header extends Component{
    render(){
        return(
            <div>
                <Navbar bg="light" expand="lg">
                    <Navbar.Brand href="#home">
                        <img src={require('../../static/logo2.png')} 
                            width="50"
                            height="50"
                            className="d-inline-block align-top"
                            alt="logo"/>
                        </Navbar.Brand>
                        <Navbar.Toggle aria-controls="basic-navbar-nav" />
                            <Navbar.Collapse id="basic-navbar-nav">
                                <Nav className="mr-auto">
                                    <Nav.Link href="#home">Home</Nav.Link>
                                    <Nav.Link href="#link">Link</Nav.Link>
                                </Nav>
                            </Navbar.Collapse>
                </Navbar>
            </div>
        );
        
    }
}