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
    centre_logo: "https://frenchcoding.files.wordpress.com/2014/11/javascript_logo1.png?w=840",
    title: "Full stack javascript",

},
{
    centre_logo: "http://www.tunisie-formation.com/images/logo/20151027035749_8c72985ce0e9fbda58f82d5f683545a6.png",
    title: "Formation Infographie",

},
{
    centre_logo: "http://tunisieformation.com/webroot/image/logo/Sans%20titre-3.jpg",
    title: "Formation en MARKETING DIGITAL",
},
{
    centre_logo: "http://tunisieformation.com/webroot/image/logo/Logo%20CPFMI.jpg",
    title: "Formation Loi des finances 2018",

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