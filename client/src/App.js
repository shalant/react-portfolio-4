import React from 'react';
import './App.css';
import Container from 'react-bootstrap/Container'
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import Footer from './components/Footer';
import Particles from 'react-particles-js';
import NavbarD from './components/Navbar';
import About from './pages/About';
import Home from './pages/Home';
import Resume from './pages/Resume';
import Contact from './pages/Contact';
import Portfolio from './pages/Portfolio';
import Cards from './components/Cards';
import { Navbar, Nav } from 'react-bootstrap';
import ContactGlove from './pages/ContactGlove';


function App() {
  return (
    <Router>
      <Container fluid>
        <NavbarD />
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
        <Switch>
          <Route exact path='/' component={Home} />
          <Route path='/about' component={About} />
          <Route path='/portfolio' component={Portfolio} />
          <Route path='/resume' component={Resume} />
          <Route path='/contact' component={ContactGlove} />
          <Route path='/cards' component={Cards} />
        </Switch>
        <Footer />
      </Container>
    </Router>
  );
}

export default App;
