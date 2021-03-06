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
.formation-item-content{
    display: flex ;
    flex-direction: column ;
    align-items: center ;
    width: 20% ;
    max-width: 20% ;
}
.formation-item-header{
    display: flex ;
    align-items: center ;
}
.formation-item-header img {
    max-width:150px;

}

`
        
const CardFormation= ({card})=>{
    return (
        <Wrapper>
            
            <div className="formation-item">
                <div className="formation-item-header">

                    <img src={card.centre_logo}  alt=""/>
                    
                </div>
                <div  className="formation-item-content">
                <div className="formation-item-header-info">
                        <h5 className="formation-item-title">{card.title}</h5>
                        
                    </div>
                    <div className="formation-item-footer">
                        <a href="/#">Voir détails ></a>
                    </div>
                </div>
        
            </div>
        
        </Wrapper>
    )
}

export default CardFormation;