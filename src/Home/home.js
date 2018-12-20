import React, { Component } from 'react';
import Menu from "../navbarmenu";
import Search from "./Search";
import Searchbar from './Search-bar';



class Home extends Component{


    render(){
        return (
            <div>
               
             <Searchbar/>
             <Search/>
            </div>

)}


}

export default Home;