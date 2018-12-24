import React, { Component } from 'react';
import Card from './Cardregion';

const info_region = [{
    centre_logo: "",
    title: "Tunis",

},
{
    centre_logo: "",
    title: "ariana",

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

}
]




class Region extends React.Component {
    render() {

        return (
            <div className="">
                <h2>Liste des regions</h2>
                <div className="centre-container col-md-8">
                    {info_region.map(el => <Card region={el} />)}


                </div>
            </div>

        )
    }
}

export default Region;