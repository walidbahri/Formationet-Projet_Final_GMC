import React from 'react';
import styled from "styled-components" ;

const Wrapper = styled.div`
.region-item{
  border: 2px solid black;
  margin-bottom: 20px;
  margin-left:10px;  
  margin-top: 80px;
  height: 200px ;  
  display:flex ;
  justify-content: center ;
  align-items: center ;
  background-image: url("https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60") ;
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
.region-item:hover h5{
    color: #000 ;
    transition: .2s ;
}
.region-item:hover{
    background-color: rgba(0, 0, 0, 0.5) ;
}
`
const Cardregion= ({region})=>{
    return (
        <Wrapper className="col-lg-4">
            <a href="#">
            <div className="region-item ">
                <div className="region-item-header">
                    <div className="region-item-header-info">
                        <h5 class="region-item-title">{region.title}</h5>
                    </div>
                </div>
                
            </div>
            </a>
            </Wrapper>
        
    )
}

export default Cardregion;