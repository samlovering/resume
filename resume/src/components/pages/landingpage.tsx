import React from "react";
import { Container, Card, Row, Col, Image } from "react-bootstrap";
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import './landingpage.css';

export default class LandingPage extends React.Component<any, any>{
    
    render(){
        return(
        <Container id="landingpage" className="landingpage">
        <Row>
            <Col md={6}>
                <Card className="intro-card mt-2">
                    <Card.Title className="intro-card-title"><h4>Hello, I am</h4>
                        <h1>Samuel Lovering</h1></Card.Title>
                    <Card.Text className="card-text">
                        <h3>Full Stack Developer</h3>
                        <Row className="icon-buttons">
                            <Col md={1}>
                            <a className='landingpage-icon' href='https://github.com/samlovering'><GitHubIcon/></a>
                            </Col>
                            <Col md={1} className="ml-3">
                            <a className='landingpage-icon' href='https://www.linkedin.com/in/samuellovering/'><LinkedInIcon/></a>
                            </Col>
                        </Row>
                    </Card.Text>
                </Card>
            </Col>
            <Col md={6}>
                <Card className="picture mt-4">
                    <Image src="headshot.jpg" roundedCircle/>
                </Card>
            </Col>
        </Row>
        </Container>         
        )
    }
}