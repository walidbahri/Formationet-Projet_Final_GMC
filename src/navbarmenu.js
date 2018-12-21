import React, { Component } from 'react';
import { Link} from 'react-router-dom';
import styled from "styled-components" ;
import ModalExampleDimmer from "./Inscription/Inscription-modal"


const Wrapper = styled.div`
*{
    box-sizing: border-box
}
    
    height: 100px ;
    font-family: sans-serif ;
    font-weight: 600 ;
    font-size: 16px
    
a{
  text-decoration: none;
  color: white ;
}
.menubar{
    background-color: #333 ;
    width: 100% ;
    height: 15% ;
    display: flex ;
    justify-content: space-between ;
    align-items: center ;
    position: fixed ;
    top: 0 ;
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
    background-color: white ;
    color: #333 ;
    transition: .2s;
    cursor: pointer ;
}
.connection{
    color: #333 ;
    margin: 0px 10px ;
    padding: 8px ;
    background-color: white ;
    border-radius: 8px ;
}
.connection:hover{
    background-color: #333 ;
    color: #fff ;
    border: solid white 1px ;
    border-radius: 8px ;
    transition: .2s;
}
.homeLinks{
    display: flex ;
    justify-content: space-around ;
}
.homelink{
    margin: 0px 20px
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
<a href="#" className="connection action-button"> Connection </a>
</div>
</div>
</Wrapper>

)}


}

export default Menu;