import React from "react";
import {Col, Nav, Navbar} from "react-bootstrap";
import "./navbar.css";


/**
 * TODO:
 * Needs a little beautifying
 * Logo?
 * lightmode/darkmode color schemes
*/

export default class NavBar extends React.Component<any, any>{
    render(){
        return(
        <Navbar id="navbar" sticky="top">
            <Nav className="container-fluid">
                <Nav.Item>
                    <Navbar.Brand href="#top">SL</Navbar.Brand>
                </Nav.Item>
            </Nav>
            <Nav className="ml-auto">     
                <Nav.Item className="navbar-item-right"><Nav.Link href="#about">About</Nav.Link></Nav.Item>
                <Nav.Item className="navbar-item-right"><Nav.Link href="#experience">Experience</Nav.Link></Nav.Item>
                <Nav.Item className="navbar-item-right"><Nav.Link href="#contact">Contact</Nav.Link></Nav.Item>
            </Nav>
        </Navbar>
        )
    }
}