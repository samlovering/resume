import React from "react";
import { Button, Card, Col, Image, Container, Row } from "react-bootstrap";
import "./experience.css"
//Will be replaced with projects when i actually do projects lol :D
export default class Experience extends React.Component<any, any>{
    render(){
        return(
            <Container id="experience" className="experience">
                    <Card className="experience-card">
                        <Card.Title className="experience-card-title">Experience</Card.Title>
                        <Row>
                            <Col>2023</Col>
                            <Col><Button variant="light" className="rounded-circle"></Button></Col>
                            <Col><Image src="pfllogo.svg" className=""/></Col>
                        </Row>
                    </Card>
            </Container>
        )
    }
}