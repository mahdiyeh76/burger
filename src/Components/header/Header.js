import React,{Component} from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import 'bootstrap/dist/css/bootstrap.min.css';
// import {Route,Switch} from 'react-router-dom';
// import BurgerBuilder from '../BurgerBuilder/Burgerbuilder';
// import Checkout from '../Checkout/Checkout';
import {NavLink}  from 'react-router-dom'

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
                                <Nav className="mr-auto ">
                               
           
           
                                    <NavLink to="/"  active >BurgerBuilder</NavLink>
                                    <NavLink to="/Orders">Orders</NavLink>
                                </Nav>
                            </Navbar.Collapse>
                </Navbar>
            </div>
        );
        
    }
}