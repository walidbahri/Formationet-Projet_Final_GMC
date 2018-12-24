import React from 'react';

        
const Cardcentre = ({center})=>{
    return (
        <div className="col-md-4">
            <div className="centre-item">
                <div className="centre-item-header">
                    <img src="images/logo/20170525033544_2ec25344ad50b41db8060e3d4f9e3840.png"  alt=""/>
                    <div className="centre-item-header-info">
                        <h5 class="centre-item-title">{center.title}</h5>
                        
                    </div>
                </div>
                <div className="centre-item-content">
                    <div className="centre-item-body">
                        <p>{center.description}</p>
                    </div>
                    <div className="centre-item-footer">
                        <a href="/#">Voir détails ></a>
                    </div>
                </div>
            </div>
        </div>
        
    )
}

export default Cardcentre;