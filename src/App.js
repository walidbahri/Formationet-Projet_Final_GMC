import React, { Component } from 'react';
import {BrowserRouter, Route} from 'react-router-dom';
import Formation from './formation/formation';
import Formateur from './formateur/formateur';
import Centre from './centredeformation/centre';
import Menu from './navbarmenu'
import Home from './Home/home'
import InscriptionNormal from './Inscription/InscriptionNormal'
import InscriptionFormateur from './Inscription/InscriptionFormateur'
import InscriptionCentre from './Inscription/InscriptionCentre'
import styled from "styled-components" ;


import './App.css';

const Wrapper = styled.div`
*{
  box-sizing: border-box ;
}
.App{
  padding-bottom: 100px ;
  background-color: whitesmoke ;
}
.menu{
  padding: 0 ;
  margin: 0 ;
  z-index: 100 ;
}
.container{
  padding: 50px;
  margin-top: 100px ;
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
        <Route path="/formation" component={Formation}/>
        <Route path="/Centredeformation" component={Centre}/>
        <Route path="/formateur" component={Formateur}/>
        <Route path="/Inscription/InscriptionNormal" component={InscriptionNormal}/>   
        <Route path="/Inscription/InscriptionFormateur" component={InscriptionFormateur}/>  
        <Route path="/Inscription/InscriptionCentre" component={InscriptionCentre}/>  
      </div>
      </Wrapper>
      </BrowserRouter>
    );
  }
}

export default App;
