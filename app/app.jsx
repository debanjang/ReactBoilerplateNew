var React = require('react');
var ReactDOM = require('react-dom');
var {Route, Router, IndexRoute, hashHistory} = require('react-router');

import ComponentOne from './components/ComponentOne';
import ComponentTwo from './components/ComponentTwo';

// Load foundation
$(document).foundation();

// App css
require('style!css!sass!applicationStyles')

ReactDOM.render(
  <div>
    <ComponentOne count={20}/>
    <ComponentTwo count={30}/>
  </div>,
  document.getElementById('app')
);
