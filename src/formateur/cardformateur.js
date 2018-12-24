import React from 'react';
import styled from "styled-components" ;

const Wrapper = styled.div`
.formateur-item{
    border: 3px solid black;
    margin-bottom: 10px;
    margin-top:80px;
    display:flex;
    justify-content:space-around;
    height:100px;
    

  }
  `

        
const Cardcentre = ({instructor})=>{
    return (
        <Wrapper>
        
            <div className="formateur-item col-md-12">
                <div className="formateur-item-header">
                    <p>PHOTO</p>
                    </div>
                    <div className="formateur-item-content">
                    <div className="formateur-item-header-info">
                        <h5 class="centre-item-title">{instructor.name_formateur}</h5>
                        
                    </div>
                
                
                    <div className="formateur-item-body">
                        <p>{instructor.description}</p>
                    </div>
                    <div className="formateur-item-footer">
                        <a href="/#">Voir détails ></a>
                    </div>
                </div>
            </div>
        
        </Wrapper>
    )
}

export default Cardcentre;