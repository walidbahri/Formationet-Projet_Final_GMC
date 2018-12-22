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
    title: "gomycode",

}, {
    centre_logo: "",
    title: "gomycode",

}
]




class Region extends React.Component {
    render() {

        return (
            <div>
                <h2>Liste des regions</h2>
                <div className="centre-container">
                    {info_region.map(el => <Card region={el} />)}


                </div>
            </div>

        )
    }
}

export default Region;