import React from "react";
import {Navbar} from "react-bootstrap";
import "./navbar.css";
import { JL } from "jsnlog";

export default class NavBar extends React.Component<any, any>{
    render(){
        return(
        <Navbar id="navbar">
            <div className="navbar-item-left">
            <a href="#home">Samuel Lovering</a></div>
            <div className="navbar-item-right">
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#experience">Experience</a>
                <a href="#contact">Contact</a>
            </div>
        </Navbar>
        )
    }
}