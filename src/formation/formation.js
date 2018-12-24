import React, { Component } from 'react';

import CardFormation from './Caderformation';

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
            <div>
                <h2>Liste des FORMATION</h2>
                <div className="formation-container">
                    {info_formation.map(el => <CardFormation card={el} />)}


                </div>
            </div>

        )
    }
}

export default FormationDetail;