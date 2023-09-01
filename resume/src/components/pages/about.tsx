import React from "react";
import { Container, Row, Col, Card } from "react-bootstrap";
import "./about.css"

export default class About extends React.Component<any, any>{
    render(){
        return(
            <div id="about" className="about">
            <Container> About Me!
            <Row>
                <Card>
                    <Card.Body>
                    <Card.Title>About Me</Card.Title>
                    <Card.Text>
                        Hi, I'm [Your Name]. I am a passionate web developer with a strong background in front-end development. I love creating beautiful and interactive web applications that provide great user experiences.
                    </Card.Text>
                    </Card.Body>
                </Card>
            </Row>
            </Container>
        
            </div>
        )
    }
}