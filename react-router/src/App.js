import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import Jumbotron from './components/Jumbotron';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Navbar />
          <Jumbotron title="About Me!" subtitle="This page is all about me and my work!" />
          <Route exact path='/' component={Home} />
          <Route path='/contact/:id' component={Contact} />
          <Route path='/about' component={About} />
          <Footer />
        </div>
      </Router>
    );
  }
}

export default App;
