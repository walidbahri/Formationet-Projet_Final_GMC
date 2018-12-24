import React, { Component } from 'react';
import Card from './Cardregion';
import styled from "styled-components" ;


const Wrapper = styled.div`

.region-container{
    display: flex;
    justify-content:space-between;
  flex-wrap: wrap;
  margin: 20px;
}

`



const info_region = [{
    centre_logo: "",
    title: "Tunis",

},
{
    centre_logo: "",
    title: "Ariana",

},
{
    centre_logo: "",
    title: "Bizerte",
},
{
    centre_logo: "",
    title: "Béja",

}, {
    centre_logo: "",
    title: "Mannouba",

},
{
    centre_logo: "",
    title: "Ben Arous",

},
{
    centre_logo: "",
    title: "Sousse",

},
{
    centre_logo: "",
    title: "Sfax",

},
{
    centre_logo: "",
    title: "Kef",

}
]




class Region extends React.Component {
    render() {

        return (
                  <Wrapper>
           
                <div className="region-container">
                    {info_region.map(el => <Card region={el} />)}

               </div>
               </Wrapper>
        )
    }
}

export default Region;