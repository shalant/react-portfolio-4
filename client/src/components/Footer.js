import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import '../App.css';

function Footer() {

    return(
        <footer className='foot mt-5'>
            <Container fluid={true} className='footer'>
                <Row className='border-top justify-content-between p-3'>
                    <Col className='p=0' md={3} sm={12}>
                        Doug Rosenberg
                    </Col>
                    <Col>
                        <a href='https://www.github.com/shalant'>Github</a>
                    </Col>
                    <Col>
                        <a href='https://www.linkedin.com/in/douglasrosenberg/'>LinkedIn</a>
                    </Col>
                    <Col className='p=0 d-flex fustify-content-end' md={3}>
                        This site was made by Doug Rosenberg
                    </Col>
                </Row>
            </Container>
        </footer>
    );
}

export default Footer;