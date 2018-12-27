import React, { Component } from 'react';
import Card from './cardcenter' ;
import styled from "styled-components" ;
import axios from 'axios'




const Wrapper = styled.div`
.centre-container{
    display: flex ;
    flex-direction: column ;

}
`
class Cardcentre extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            centres: [],
         
        };
    }

    componentDidMount() {
        axios.get("http://localhost:3000/centres")
            .then(res => {
                // console.log(res.data.url);
                // console.log(res.data.explanation);
                this.setState({
                    centres: res.data
                })
            })

    }

  
    render(){
       
    return (
        <Wrapper>
        <div className="container centre-container">
            {this.state.centres.map( el => <Card center={el}/>)}
           </div>
        </Wrapper>
        
    )
}}

export default Cardcentre;