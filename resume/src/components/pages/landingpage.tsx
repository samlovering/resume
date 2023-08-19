import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import './landingpage.css';

export default class LandingPage extends React.Component<any, any>{
    
    render(){
        return(
        <Container id="home" className="main-content">
        <Row>
            <Col md={6}>
                <Card className="intro-card mt-2">
                    <Card.Title className=""><h4>Hello, I am</h4>
                        <h1>Samuel Lovering</h1></Card.Title>
                    <Card.Text>Full Stack Developer</Card.Text>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="picture mt-2" bg="dark">
                    <Image src="logo512.png" roundedCircle />
                </Card>
            </Col>
        </Row>
        </Container>         
        )
    }
}