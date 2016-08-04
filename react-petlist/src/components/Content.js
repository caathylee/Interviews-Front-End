import React, { Component } from 'react';
import Test from './Test';
import Listings from './Listings';
var data = require('!json!../web-api/search.json');


class Content extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedBoarding: false,
      clickedSitting: false
    }
  }

  handleChange(){
    if(boardingBox.checked){
      this.setState({clickedBoarding: true});
    } else if(!boardingBox.checked) {
      this.setState({clickedBoarding: false});
    } else if(sittingBox.checked){
      this.setState({clickedSitting: true});
    } else {
      this.setState({clickedSitting: false}); 
    }
  }

  render() {
    return (
      <div id="content">
        <div id="search-filter-section">
        <hr></hr>
        <ul id="search-nav">
          <li>Looking For</li>
          <li><input onClick={() => this.setState({clickedBoarding: !this.state.clickedBoarding})} id="boardingBox" type="checkbox" onChange={this.handleChange.bind(this)} value="boarding-checkbox"/> Boarding <span className="subheading"> at Host's home</span></li>
          <li><input onClick={() => this.setState({clickedSitting: !this.state.clickedSitting})} id="sittingBox" type="checkbox" onChange={this.handleChange.bind(this)} value="sitting-checkbox"/> Sitting <span className="subheading">at my home</span></li>
        </ul>
        <hr></hr>
      </div>
        <div>
          {data.search.map(function(data){ return <Listings data={data} clickedBoarding={this.state.clickedBoarding} clickedSitting={this.state.clickedSitting}/>}, this)}
        </div>
      </div>
    );
  }
}

export default Content;
