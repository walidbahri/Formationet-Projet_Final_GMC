import React, { Component } from 'react';
import Card from './cardomaine';
import styled from "styled-components" ;


const Wrapper = styled.div`

.domaine-container{
   display: flex;
   justify-content:space-between;
   flex-wrap: wrap;
}
`

const info_region = [{
    centre_logo: "",
    title: "Informatique",

},
{
    centre_logo: "",
    title: "Langues",

},
{
    centre_logo: "",
    title: "Communication",
},
{
    centre_logo: "",
    title: "Management",

}, {
    centre_logo: "",
    title: "Gestion",

},
{
    centre_logo: "",
    title: "Achat et Logistique",

},
{
    centre_logo: "",
    title: "Finance",

}
]




class Domaine extends React.Component {
    render() {

        return (
                  <Wrapper>
           
                <div className="container domaine-container">
                    {info_region.map(el => <Card domaine={el} />)}

               </div>
               </Wrapper>
        )
    }
}

export default Domaine;