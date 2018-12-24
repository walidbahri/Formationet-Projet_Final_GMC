import React from 'react';
import styled from "styled-components" ;
const Wrapper = styled.div`
.centre-item{
  border: 2px solid black;
  margin-bottom: 20px;
  margin-left:10px;
  
}
.centre-container{
  display: flex;
  flex-wrap: wrap;
  margin: 20px;
}

`


const Cardregion= ({region})=>{
    return (
        <Wrapper>
            <div className="centre-item ">
                <div className="centre-item-header">
                    <img src="images/logo/20170525033544_2ec25344ad50b41db8060e3d4f9e3840.png"  alt=""/>
                    <div className="centre-item-header-info">
                        <h5 class="centre-item-title">{region.title}</h5>
                        
                    </div>
                </div>
                <div className="centre-item-content">
                    
                    <div className="centre-item-footer">
                        <a href="/#">Voir détails ></a>
                    </div>
                </div>
            </div>
            </Wrapper>
        
    )
}

export default Cardregion;