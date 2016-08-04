import React, { Component } from 'react';
import Content from './Content';
require("!css!../../example/style.css");
// var data = require('!json!../web-api/search.json');

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      clickedBoarding: false,
      clickedSitting: false,
      shortenedDescription: this.props.data.description
    }
  }

  render() {
    return (
      <ul id="one-listing">
        <li className="title">{this.props.data.title}</li>
        <li>http://localhost:3000//{this.props.data.pet.type}-id-{this.props.data.pet.id}-{this.props.data.pet.name}</li>
        <li>{this.props.data.user.first[0].toUpperCase() + this.props.data.user.first.slice(1).toLowerCase() + ' ' + this.props.data.user.last[0].toUpperCase() + '.'}</li>
        <li>{this.props.data.pet.name[0].toUpperCase() + this.props.data.pet.name.slice(1).toLowerCase()}</li>
        <li>{this.props.data.description}</li>
      </ul>
    );
  }
}

export default Listings;

