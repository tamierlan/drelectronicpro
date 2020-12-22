
import React from 'react';
import './App.css';

import Navbar from './navbar/Navbar'
import Error from './error/Error';
import Home from './home/Home.js';
import Contact from './contact/Contact';
import Service from './service/Service';
import Booking from './booking/Booking'

import { Route, Switch, BrowserRouter as Router} from 'react-router-dom';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/service" component={Service} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/booking" component={Booking} />
        <Route component={Error} />
      </Switch>
    </Router>
  );
}
