import React, { Component } from 'react';
// import Content from './Content';
require("!css!../../example/style.css");
// var data = require('!json!../web-api/search.json');

class SearchBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedBoarding: false,
      clickedSitting: false,
      filter: function() {
        if (clickedBoarding === true) {
          //only display service: boarding
        } else if(clickedSitting == true) {
          //only display service: sitting
        } else {
          //display all
        }
      },
    }

  }

  handleChange() {
    this.setState({clickedBoarding: !this.state.clickedBoarding});
  }


  render() {
    return (
      <div id="search-filter-section">
        <hr></hr>
        <ul id="search-nav">
          <li>Looking For</li>
          <li><input onClick={() => this.setState({clickedBoarding: !this.state.clickedBoarding})} id="boarding-box" type="checkbox" onChange={this.handleChange.bind(this)} value="boarding-checkbox"/> Boarding <span className="subheading"> at Host's home</span></li>
          <li><input onClick={() => this.setState({clickedSitting: !this.state.clickedSitting})} id="sitting-box" type="checkbox" onChange={this.handleChange.bind(this)} value="sitting-checkbox"/> Sitting <span className="subheading">at my home</span></li>
        </ul>
        <hr></hr>
      </div>
    );
  }
}

export default SearchBar;
