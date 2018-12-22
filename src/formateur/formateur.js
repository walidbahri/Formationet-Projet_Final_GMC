import React, { Component } from 'react';
import Card from './cardformateur' ;

const info = [{
    formateur_pic:"",
    name_formateur:"aaaaaaa",
    description:"fdgfjf"
},
{
    formateur_pic:"",
    name_formateur:"gomycode",
    description:"fdgfjf"
},
{
    formateur_pic:"",
    name_formateur:"gomycode",
    description:"fdgfjf"
},{
    formateur_pic:"",
    name_formateur:"gomycode",
    description:"fdgfjf"
},{
    formateur_pic:"",
    name_formateur:"gomycode",
    description:"fdgfjf"
}
]

   


class Cardcentre extends React.Component {
    render(){
       
    return (
        <div>
        <h2>LISTE DES FORMATEUR</h2>
        <div className="centre-container">
        
            {info.map( el => <Card instructor={el}/>)}

            </div>
           </div>
        
    )
}}

export default Cardcentre;