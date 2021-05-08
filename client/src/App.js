import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import Header from './components/Header';
import ImageSlider from './components/ImageSlider';
import { SliderData } from './components/SliderData';
import Particles from 'react-particles-js';


function App() {
  return (
    <Router>
      <Container>

      <Navbar 
            className='border-bottom nav' 
            expand='lg'
          >
            <Navbar.Brand>Doug Rosenberg</Navbar.Brand>
            <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
            <Navbar.Collapse classname='nav' id='navbar-toggle'>
              <Nav className='ml-auto'>
                <Link className='nav-link' to='/'>Home</Link>
                <Link className='nav-link' to='/about'>About</Link>
                <Link className='nav-link' to='/resume'>Resume</Link>
                <Link className='nav-link' to='/contact'>Contact</Link>
              </Nav>
            </Navbar.Collapse>
          </Navbar>

        <Particles 
          className='particles-canvas'
          params={{
            particles: {
              number: {
                value: 30,
                density: {
                  enable: true,
                  value_area: 900
                }
              },
              shape: {
                type: 'polygon',
                stroke: {
                  width: 6,
                  color: '#f9ab00'
                }
              }
            }
          }}
        />
        
        <Header />
        <ImageSlider slides={SliderData} />
      </Container>
    </Router>
  );
}

export default App;
