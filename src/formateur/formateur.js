import React, { Component } from 'react';
import Card from './cardformateur' ;

const info = [{
    formateur_pic:"",
    name_formateur:"formateur 1",
    description:"description"
},
{
    formateur_pic:"",
    name_formateur:"formateur 2",
    description:"description"
},
{
    formateur_pic:"",
    name_formateur:"formateur 3",
    description:"description"
},{
    formateur_pic:"",
    name_formateur:"formateur 4",
    description:"fdgfjf"
},{
    formateur_pic:"",
    name_formateur:"formateur 5",
    description:"fdgfjf"
}
]

   


class Cardcentre extends React.Component {
    render(){
       
    return (
        
        
        <div className="formateur-container container">
        
            {info.map( el => <Card instructor={el}/>)}

            </div>
           
        
    )
}}

export default Cardcentre;