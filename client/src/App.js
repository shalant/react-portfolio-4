import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Particles from 'react-particles-js';
import About from './pages/About';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import { Navbar, Nav } from 'react-bootstrap';


function App() {
  return (
    <Router>
      <Container fluid>
      <Navbar className='border-bottom nav' expand='lg'>
                <Navbar.Brand>Doug Rosenberg</Navbar.Brand>
                <Navbar.Toggle className='border-0' aria-controls='navbar-toggle' />
                <Navbar.Collapse classname='nav' id='navbar-toggle'>
                    <Nav className='ml-auto'>
                        <Link className='nav-link' to='/'>Home</Link>
                        <Link className='nav-link' to='/about'>About</Link>
                        <Link className='nav-link' to='/portfolio'>Portfolio</Link>
                        <Link className='nav-link' to='/resume'>Resume</Link>
                        <Link className='nav-link' to='/contact'>Contact</Link>
                    
                    </Nav>
                </Navbar.Collapse>
      </Navbar>
      
      <Switch>
        <Route path='/home' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/portfolio' component={Portfolio} />
        <Route path='/resume' component={Resume} />
        <Route path='/contact' component={Contact} />
      </Switch>
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
        
        <Home />
        
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
