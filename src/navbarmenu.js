import React, { Component } from 'react';

import { Link} from 'react-router-dom';

class Menu extends Component{
    constructor(){
    super()
    
    }

    render(){
return (

<div className="menubar">
<Link className="homelink" to="/">HOME</Link>
<Link className="homelink" to="/Formation"> FORMATION   </Link>
<Link className="homelink" to="/Centredeformation">     CENTRE DE FORMATION</Link>
<Link className="homelink" to="/Formateur">   Formateur   </Link>

<Link to="/Test">  INSCRIPTION </Link>
            
               
               
               {/* <div class="logo">
                  FORMATIONET
               </div>
               <nav>
               <div class="menu">
                  <ul>
                     <li><a href="#">Home</a></li>
                     <li><a href="#">FORMATION</a></li>
                     <li><a href="#">CENTRE DE FORMATION</a></li>
                     <li><a href="#">FORMATEUR</a></li>
                     <li><a href="#">Inscription</a></li>
                  </ul>
               </div>
            </nav>  */}
         


</div>

)}


}

export default Menu;