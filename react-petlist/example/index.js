import React from 'react';
import ReactDOM from 'react-dom';
import Test from 'components/Test';
import Listings from 'components/Listings';
import Content from 'components/Content';
import { Router, Route, browserHistory } from 'react-router';

const dest = document.getElementById('content');

// ReactDOM.render(
//   <div>
//     <Test value={2} default="messages" one="message" /><br/>
//     <Test value={1} default="messages" one="message" />
//   </div>,
//   dest
// );

ReactDOM.render(
  <div>
    <Content />
    <Test />
  </div>,
  dest
);

window.React = React; // enable debugger