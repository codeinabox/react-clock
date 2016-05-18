(function() {
  "use strict";

  var ReactDOM = require('react-dom');
  var main = require('./main');

  function renderClock(updateInterval, elementId) {
    var element = ReactDOM.render(
      main.createClockWithCurrentTime(),
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
