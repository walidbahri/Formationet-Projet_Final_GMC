import React, { Component } from 'react';
import Search from "./Search";
import Searchbar from './Search-bar';
import { Jumbotron , Button } from 'reactstrap';
import styled from "styled-components"

const Wrapper = styled.div`
*{
    box-sizing: border-box ;
}
.home-image{
    background-image: url("https://images.unsplash.com/photo-1542463338719-2433baf65ba3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60")  ;
    background-size: cover ;
    background-repeat: no-repeat ;
    background-position: center ;
    color: #fff ;
    width: 100% ;
    height: 600px ;
    display: flex ;
    justify-content: center ;
    align-items: center ;
}
.home-image img{
    width: 100% ;
    max-height: 400px  ;
}
.intro-text{
    border: solid white 7px ;
    padding: 50px ;
    text-shadow: 3px 3px 3px rgba(0 ,0 ,0 ,0.5) ;
    box-shadow: 0px 3px 3px rgba(0 ,0 ,0 ,0.5) ;
}

.container{
    background-color: #fff ;
}

`

class Home extends Component{


    render(){
        return (
        <Wrapper>
        <div>
            <Jumbotron fluid className="home-image">
            <div className="intro-text">
            <h1>Formation-NET</h1>
            </div>
            </Jumbotron>
        <div className="container">
             <Searchbar/>
             <Search/>
        </div>
        </div>
        </Wrapper>

)}


}

export default Home;