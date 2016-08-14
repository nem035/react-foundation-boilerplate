/*
eslint
  import/no-unresolved: "off",
  import/no-extraneous-dependencies: "off",
  import/newline-after-import: "off"
  */
const React = require('react');
const ReactDOM = require('react-dom');

// load foundation
$(document).foundation(); // eslint-disable-line no-undef

// load styles
require('style!css!sass!applicationStyles');

// DOM Rendering
ReactDOM.render(
  <h1>React Boilerplate 3</h1>,
  document.getElementById('app') // eslint-disable-line no-undef
);
