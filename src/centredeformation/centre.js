import React, { Component } from 'react';
import Card from './cardcenter' ;

const info = [{
    centre_logo:"",
    title:"gomycode",
    description:"fdgfjf"
},
{
    centre_logo:"",
    title:"gomycode",
    description:"fdgfjf"
},
{
    centre_logo:"",
    title:"gomycode",
    description:"fdgfjf"
},{
    centre_logo:"",
    title:"gomycode",
    description:"fdgfjf"
},{
    centre_logo:"",
    title:"gomycode",
    description:"fdgfjf"
}
]

   


class Cardcentre extends React.Component {
    render(){
       
    return (
        <div>
            <h2>CENTRE DE FORMATION</h2>
        <div className="centre-container">
            {info.map( el => <Card center={el}/>)}


           </div>
           </div>
        
    )
}}

export default Cardcentre;