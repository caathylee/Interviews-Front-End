import React, { Component } from 'react';
import Test from './Test';
import SearchBar from './SearchBar';
import Listings from './Listings';
var data = require('!json!../web-api/search.json');


class Content extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="content">
        <SearchBar />
        <div>
          {data.search.map(function(data){ return <Listings data={data} /> })}
        </div>
      </div>
    );
  }
}

export default Content;
