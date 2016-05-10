(function() {
  "use strict";

  var React = require('react');
  var ReactDOM = require('react-dom');
  var Clock = require('./components/clock');

  function renderClock(updateInterval, elementId) {

    var element = ReactDOM.render(
      React.createElement(Clock),
      document.getElementById(elementId)
    );

    element.updateDate(new Date());
    window.setInterval(function() { element.updateDate(new Date()); }, updateInterval);
  }

  // Check the browser "cuts the mustard"
  if ('querySelector' in document && 'addEventListener' in window && 'XMLHttpRequest' in window) {
    document.addEventListener('DOMContentLoaded', function() {
        renderClock(10, 'react-app');
    });
  }
})();
