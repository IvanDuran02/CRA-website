import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import React from 'react';
import Home from './components/pages/Home';
import Services from './components/pages/Services';
import Coaching from './components/pages/Coaching';
import SignUp from './components/pages/SignUp';
import Footer from './components/Footer'

function App() {
  return (
  <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home} />
        <Route path='/services' component={Services} />
        <Route path='/coaching' component={Coaching} />
        <Route path='/sign-up' component={SignUp} />
        <Footer />
      </Switch>
    </Router>
  </>
  );
}

export default App;
