import React, { Component } from 'react';
import Content from './Content';

class Listings extends Component {
  constructor(props) {
    super(props);
    this.state = {
      description: this.props.data.description,
      currChar: 47,
      shortened: ''
    }
  }

  componentDidMount() {

  var description = this.props.data.description;
  this.setState({ shortened: description});

    if (description.length > 47) {
      var wordsArr = description.split(' ');
      var charCount = 0;
      var shortened = "";
      for(var i = 0; i < wordsArr.length; i++) {
        if (charCount + wordsArr[i].length > 47)
        {
          shortened += "...";
          break;
        }

        if (i > 0)
          shortened += " ";
        shortened += wordsArr[i];
        charCount += wordsArr[i].length + 1;
      }
      this.setState({ shortened: shortened});
    }
  }

  render() {

    if((this.props.clickedBoarding && this.props.data.service==="boarding") || (this.props.clickedSitting && this.props.data.service==="sitting"))
      return (
        <ul id="one-listing">
          <li className="title">{this.props.data.title}</li>
          <li>http://localhost:3000/{this.props.data.pet.type}-id-{this.props.data.pet.id}-{this.props.data.pet.name}</li>
          <li>{this.props.data.user.first[0].toUpperCase() + this.props.data.user.first.slice(1).toLowerCase() + ' ' + this.props.data.user.last[0].toUpperCase() + '.'}</li>
          <li>{this.props.data.pet.name[0].toUpperCase() + this.props.data.pet.name.slice(1).toLowerCase()}</li>
          <li>{this.state.shortened}</li>
        </ul>
      );
    return (<div></div>);
  }
}

export default Listings;

