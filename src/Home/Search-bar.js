import React, { Component } from 'react';
import { InputGroup, InputGroupAddon, Input, Button } from 'reactstrap';
import styled from "styled-components"

const Wrapper = styled.div`
.searchbar{
  margin: 30px 200px -150px 200px ;
}
.input{
  border: solid #888 2px ;
  border-left: none ;
}
`

class Searchbar extends Component{


    render(){
        return (
          <Wrapper>
      <div className="searchbar">
         <InputGroup>
          <InputGroupAddon addonType="prepend"><Button color="primary" size="lg">Recherche</Button></InputGroupAddon>
          <Input size="lg" className="input" />
        </InputGroup>
      </div>
      </Wrapper>
)}


}

export default Searchbar;