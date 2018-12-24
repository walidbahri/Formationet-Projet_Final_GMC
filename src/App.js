import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import FormationDetail from './formation/formation';
import Formateur from './formateur/formateur';
import Cardcentre from './centredeformation/centre';
import Menu from './navbarmenu';
import Home from './Home/home';
import InscriptionNormal from './Inscription/InscriptionNormal';
import InscriptionFormateur from './Inscription/InscriptionFormateur';
import InscriptionCentre from './Inscription/InscriptionCentre';
import Region from './Region/region';
import Domaine from './Domaine/domaine'


import './App.css';


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <div className="App">

        <Menu/>
        <Route exact path="/" component={Home}/>
        <Route path="/formation" component={FormationDetail}/>
        <Route path="/Centredeformation" component={Cardcentre}/>
        <Route path="/formateur" component={Formateur}/>
        <Route path="/Inscription/InscriptionNormal" component={InscriptionNormal}/>   
        <Route path="/Inscription/InscriptionFormateur" component={InscriptionFormateur}/>  
        <Route path="/Inscription/InscriptionCentre" component={InscriptionCentre}/>
        <Route path="/Region"  component={Region}/>
        <Route path="/Domaine" component={Domaine}/>
      </div>
      </BrowserRouter>
    );
  }
}

export default App;
