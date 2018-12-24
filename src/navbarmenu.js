import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import styled from "styled-components" ;
import ModalExampleDimmer from "./Inscription/Inscription-modal"


const Wrapper = styled.div`
*{
    box-sizing: border-box
}
    font-family: sans-serif ;
    font-size: 16px ;
    z-index: 100 ;
    
a{
  text-decoration: none;
  color: white ;
}
.menubar{
    background-color: transparent ;
    width: 100% ;
    height: 70px ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    position: fixed ;
    top: 0 ;
    background-color: rgba(0 ,0 ,0 ,0.7) ;
    z-index: 100 ;
}
.user-action-buttons{
    display: flex ;
}
.inscription{
    margin: 0px 10px ;
    padding: 8px ;
    border: solid white 1px ;
    border-radius: 8px ;
}
.inscription:hover{
    background-color: rgba(255 ,255 ,255 ,0.8) ;
    color: #000 ;
    transition: .2s;
    cursor: pointer ;
}
.connection{
    color: lightgreen ;
    margin: 0px 10px ;
    padding: 8px ;
    border: solid 1px lightgreen ;
    border-radius: 8px ;
}
.connection:hover{
    background-color: rgba(144, 238, 144, 0.5) ;
    color: #fff ;
    border: solid white 1px ;
    border-radius: 8px ;
    transition: .2s;
}
.user-action-buttons{
    font-weight: 600 ;
}
.homeLinks{
    display: flex ;
    justify-content: space-around ;
    font-size: 25px ;
    text-shadow: 3px 3px 3px rgba(0 ,0 ,0 ,0.5) ;
}
.homelink{
    margin: 0px 20px ;
    padding: 10px ;
}

.homelink:hover{
    color: #fff ;
}

`

class Menu extends Component{
    constructor(){
    super()
    
    }

    render(){
return (
<Wrapper>
<div className="menubar">
<div className="homeLinks">
<Link className="homelink" to="/">Home</Link>
<Link className="homelink" to="/Formation"> Formations </Link>
<Link className="homelink" to="/Centredeformation"> Centres de formation </Link>
<Link className="homelink" to="/Formateur"> Formateur </Link>
</div>
<div className="user-action-buttons">
<a href="#" className="inscription"><ModalExampleDimmer /></a>
<a href="#" className="connection action-button"> Connexion </a>
</div>
</div>    
</Wrapper>

)}


}

export default Menu;