import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Test from './Inscription/test';
import Formation from './formation/formation';
import Formateur from './formateur/formateur';
import Centre from './centredeformation/centre';
import Menu from './navbarmenu'

import Home from './Home/home'

import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <Menu/>
        <Route exact path="/" component={Home}/>
        <Route path="/formation" component={Formation}/>
        <Route path="/Centredeformation" component={Centre}/>
        <Route path="/formateur" component={Formateur}/>
        
        <Route path="/Test" component={Test}/>
       

  
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
