import React from 'react';
import styled from "styled-components" ;

const Wrapper = styled.div`
.centre-item{
    border: solid #000 3px ;
    display: flex ;
    justify-content: space-around ;
    align-items: center ;
    margin-bottom: 10px ;
}
`
        
const Cardcentre = ({center})=>{
    return (
        <Wrapper>
            <div className="col-md-12 centre-item">
                <div className="centre-item-header">
                    <img src="images/logo/20170525033544_2ec25344ad50b41db8060e3d4f9e3840.png"  alt=""/>
                    <div className="centre-item-header-info">
                    <h1>IMAGE</h1>
                        
                        
                    </div>
                </div>
                <div className="centre-item-content">
                    <div className="centre-item-body">
                    <h5 class="centre-item-title">{center.title}</h5>
                        <p>{center.description}</p>
                    </div>
                    <div className="centre-item-footer">
                        <a href="/#">Voir détails ></a>
                    </div>
                </div>
            </div>
        </Wrapper>
        
    )
}

export default Cardcentre;