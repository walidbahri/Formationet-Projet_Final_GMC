import React, { Component } from 'react';
import styled from "styled-components" ;
import container from "reactstrap"
const Wrapper = styled.div`
.search-text{
  margin: 60px 50px ;
  font-size: 20px ;
  text-align: center ;
}
.seach-by{
  display: flex;
  justify-content: space-around;
}
.search-type{
  width: 40%;
  height: 300px;
  border-radius: 10px;
  overflow: hidden;
}
.search-type-text{
  height: 100%;
  text-shadow: 3px 4px rgba(0, 0, 0, 0.199) ;
  color: #fff ;
  display: flex;
  justify-content: center ;
  align-items: center;
}
.search-type-link:hover{
  text-decoration: none ;
  color: red ;
}
.search-image{
  background-position: bottom ;
  background-size: cover;
  background-repeat: no-repeat;
  height: 100%;
}
.search-type:hover{
  box-shadow: 0px 15px  rgba(0, 0, 0, 0.199) ;
  margin-top: -5px ;
  transition: .2s;
}

.search-type:hover .search-type-text{
  color: #000;
  transition: .2s;
  background-color: rgba(0, 0, 0, 0.2) ;
}
.search-type:hover .search-type-text::before{
  content: "{" ;
  color: #000;
  transition: .2s;
  margin: 10px ;
}
.search-type:hover .search-type-text::after{
  content: "}" ;
  color: #000;
  transition: .2s;
  margin: 10px ;
}
`

let big = "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60"

let pic ="https://images.unsplash.com/photo-1535990060383-64117472ffd8?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=350&q=80"


class Search extends React.Component {
    constructor(props) {
      super(props);
    }

    
    render() {
     
      return (
        <Wrapper>
        <div className="container">
             <div className="search-text">
             <p>
               Lorem ipsum dolor sit amet, laudem verear vocibus ut vim. Ne vero dolore eloquentiam pro, te eam ullum nulla, quo ei iisque consulatu. Zril corrumpit ex vel, in usu movet commune cotidieque. Mandamus repudiandae consequuntur ea nam, ea mel iudico eligendi comprehensam. Nostrum placerat expetenda at vim, verear deleniti vel et, vis et sonet similique eloquentiam.
              </p>
             </div>

             <div className="seach-by">
             <div className="search-type domaine">
               <a className="search-type-link" href="#">
               <div className="search-image domaine-image" style={{ backgroundImage: "url(" + big + ")"}}>
               <h3 className="search-type-text">DOMAINE</h3>
               </div>
             </a>
             </div>

             <div className="search-type region">
               <a className="search-type-link" href="#">
               <div className="search-image region-image" style={{ backgroundImage: "url(" + pic + ")"}}>
               <h3 className="search-type-text">REGION</h3>
               </div>
             </a>
             </div>
            </div>
             
        </div>
        </Wrapper>
      );
    
    }
  };

  export default Search;