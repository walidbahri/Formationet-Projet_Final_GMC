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
.centre-item-content{
    max-width:200px;
}

.centre-item-header-info img {
    max-width:200px;

}

`
        
const Cardcentre = ({center})=>{
    return (
        <Wrapper>
            <div className="col-md-12 centre-item">
                <div className="centre-item-header">
                    <div className="centre-item-header-info">
                    <img src="https://animalbook.tv/images/2016/08/Default-Author.jpg" width="100px" height="100px"/>
                    </div>
                </div>
                <div className="centre-item-content">
                    <div className="centre-item-body">
                    <h3 class="centre-item-title">{center.nom}</h3>
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