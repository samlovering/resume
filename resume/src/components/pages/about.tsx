import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.css"

export default class About extends React.Component<any, any>{
    render(){
        return(
            <Container id="about" className="about">
            <Row>
                <Col>
                <Card className="about-card">
                    <Card.Body>
                    <Card.Title>About Me</Card.Title>
                    <Card.Text className="card-text">
                      I am a computer engineering and music student at Montana State University. 
                      I am passionate about all things computers. Through school and self learning I have gained knowledge ranging from Kafka clusters to the transistor architechture of memory.
                      When I am not at my computer, I can be found practicing my saxophone or guitar, snowboarding, or trying new food.
                    </Card.Text>
                    </Card.Body>
                </Card>
                </Col>
            </Row>
            </Container>
        )
    }
}