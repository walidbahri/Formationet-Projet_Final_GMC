import React, { Component } from 'react';
import CardFormation from './Caderformation';
import styled from "styled-components"

const Wrapper = styled.div`
    *{
        box-sizing:border-box ;
} 

.container{
    background-color: #fff ;
}

`

const info_formation = [{
    centre_logo: "",
    title: "Full stack javascript",

},
{
    centre_logo: "",
    title: "PHP",

},
{
    centre_logo: "",
    title: "Bizerte",
},
{
    centre_logo: "",
    title: "gomycode",

}
]


class FormationDetail extends React.Component {
    render() {
        return (
            <Wrapper>
                    <div className="container formations-container">
                        {info_formation.map(el => <CardFormation card={el} />)}
                    </div>
            </Wrapper>

        )
    }
}

export default FormationDetail;