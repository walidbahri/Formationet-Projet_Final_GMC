import React, { Component } from 'react';


let big = "https://www.cgt-culture.fr/wp-content/uploads/2015/06/Reforme-Formation-professionnelle-2015.jpg"

let pic ="https://images.unsplash.com/photo-1535990060383-64117472ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"


class Search extends React.Component {
    constructor(props) {
      super(props);
    }

    
    render() {
     
      return (
        
        <div className="container">
             <div className="intro-text">
             <p>
               Lorem ipsum dolor sit amet, laudem verear vocibus ut vim. Ne vero dolore eloquentiam pro, te eam ullum nulla, quo ei iisque consulatu. Zril corrumpit ex vel, in usu movet commune cotidieque. Mandamus repudiandae consequuntur ea nam, ea mel iudico eligendi comprehensam. Nostrum placerat expetenda at vim, verear deleniti vel et, vis et sonet similique eloquentiam.
              </p>
             </div>

             <div className="seach-by">
             <div className="search-type domaine">
               <a href="#">
               <div className="search-image domaine-image" style={{ backgroundImage: "url(" + big + ")"}}>
               <h3>DOMAINE</h3>
               </div>
             </a>
             </div>

             <div className="search-type region">
               <a href="#">
               <div className="search-image region-image" style={{ backgroundImage: "url(" + pic + ")"}}>
               <h3>REGION</h3>
               </div>
             </a>
             </div>
            </div>
             
        </div>
      );
    
    }
  };

  export default Search;