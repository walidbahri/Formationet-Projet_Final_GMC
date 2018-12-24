import React, { Component } from 'react';
import Card from './cardcenter' ;
import styled from "styled-components" ;


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

const Wrapper = styled.div`
.centre-container{
    display: flex ;
    flex-direction: column ;

}
`
class Cardcentre extends React.Component {
    render(){
       
    return (
        <Wrapper>
        <div className="container centre-container">
            {info.map( el => <Card center={el}/>)}
           </div>
        </Wrapper>
        
    )
}}

export default Cardcentre;