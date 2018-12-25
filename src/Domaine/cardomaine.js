import React from 'react';
import styled from "styled-components" ;

const Wrapper = styled.div`
.domaine-item{
  border-radius: 5px ;
  margin-bottom: 20px;
  margin-left:10px;  
  margin-top: 80px;
  height: 200px ;  
  background-image: url("https://images.unsplash.com/photo-1507925921958-8a62f3d1a50d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=755&q=80") ;
  background-size: cover ;
  background-repeat: no-repeat ;
  background-position: center ;
}
a{
    color: #fff ;
    text-decoration: none ;
    text-shadow: 3px 3px 3px rgba(0 ,0 ,0 ,0.5) ;
}
h5{
    font-size: 40px ;
}
.domaine-item:hover h5{
    color: #000 ;
    transition: .2s ;
}
.domaine-item-header{
    width: 100% ;
    height: 100% ;
    display:flex ;
    justify-content: center ;
    align-items: center ;
}
.domaine-item-header:hover{
    background-color: rgba(0, 0, 0, 0.2) ;
    transition: .2s ;
    border: 2px solid black;
    border-radius: 5px ;
    box-shadow: 0px 15px  rgba(0, 0, 0, 0.199) ;
    margin-top: -5px ; 
}
`
const Cardomaine= ({domaine})=>{
    return (
        <Wrapper className="col-lg-4">
            <a href="#">
            <div className="domaine-item ">
                <div className="domaine-item-header">
                    <div className="domaine-item-header-info">
                        <h5 class="domaine-item-title">{domaine.title}</h5>
                    </div>
                </div>
                
            </div>
            </a>
            </Wrapper>
        
    )
}

export default Cardomaine;