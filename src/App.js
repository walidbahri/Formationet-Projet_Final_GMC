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
import styled from "styled-components" ;

import './App.css';

const Wrapper = styled.div`
*{
  box-sizing: border-box ;
}

.App{
  padding-bottom: 100px ;
  background-color: whitesmoke ;
  border: solid transparent 0.1px ;
}
.container{
  padding: 50px;
  margin-top: 100px ;
  background-color: #fff ;
}

`


class App extends Component {
  render() {
    return (
      <BrowserRouter>
      <Wrapper>
      <div className="App">
        <Menu className="menu"/>
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
      </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
