import React from 'react';
import styled from "styled-components" ;

const Wrapper = styled.div`
.formateur-item{
    border: solid #000 3px ;
    display: flex ;
    justify-content: space-around ;
    align-items: center ;
    margin-bottom: 10px ;
  }
  `

        
const Cardcentre = ({instructor})=>{
    return (
        <Wrapper>
        
            <div className="formateur-item col-md-12">
                <div className="formateur-item-header">
                <h1>IMAGE</h1>
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