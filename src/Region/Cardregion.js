import React from 'react';
import styled from "styled-components" ;

const Wrapper = styled.div`
.region-item{
  border: 2px solid black;
  margin-bottom: 20px;
  margin-left:10px;  
  margin-top: 80px;
  
}
.region-item-header img{
    width:100%;
}

`
const Cardregion= ({region})=>{
    return (
        <Wrapper className="col-lg-4">
            <a href="#">
            <div className="region-item ">
                <div className="region-item-header">
                    <img src="https://cdna.lematin.ma/files/lematin/images/articles/2014/07/Une-formation-en-ligne-ouverte-a-tous.jpg"  alt=""/>
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