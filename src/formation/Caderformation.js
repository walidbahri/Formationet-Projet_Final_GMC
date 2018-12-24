import React from 'react';
import styled from "styled-components" ;

const Wrapper = styled.div`
.formation-item{
    border: 3px solid black;
    margin-bottom: 10px;
  }
  .formation-item{
      display:flex;
      justify-content: space-around;
  }
`
        
const CardFormation= ({card})=>{
    return (
        <Wrapper>
        <div className=" col-md-8">
            <div className="formation-item">
                <div className="formation-item-header">
                <p>PHOTO</p>
                    <img src="images/logo/20170525033544_2ec25344ad50b41db8060e3d4f9e3840.png"  alt=""/>
                    
                </div>
                <div className="formation-item-content">
                <div className="formation-item-header-info">
                        <h5 className="formation-item-title">{card.title}</h5>
                        
                    </div>
                    <div className="formation-item-footer">
                        <a href="/#">Voir détails ></a>
                    </div>
                </div>
            </div>
        </div>
        </Wrapper>
    )
}

export default CardFormation;