import React, { Component } from 'react';



class Searchbar extends Component{


    render(){
        return (
            <div className="searchbar">
        <input
          className="bar"
          type="search"
          
          placeholder="Recherchez des formation"
          aria-label="Search"
        />
        <button className="btnsearch" type="submit">
          Search
        </button>
      </div>
)}


}

export default Searchbar;