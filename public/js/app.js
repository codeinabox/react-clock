(function() {
  "use strict";

  function renderClock(updateInterval, elementId) {

    var Clock = React.createClass({
      getInitialState : function() {
        return {
          hour : null,
          minutes  : null,
          second: null
        };
      },

      updateDate: function(dateNow) {
        if (dateNow instanceof Date === false) {
          throw new Error("Expected object of type Date");
        }

        this.setState({hour: dateNow.getHours(), minutes: dateNow.getMinutes(), seconds: dateNow.getSeconds()});
      },

      render: function() {
        var separator = React.createElement('span', {className: 'separator'}, ":");
        return (
            React.createElement('div', {className: 'clock'},
              React.createElement('span', {className: 'hour'}, this.state.hour),
              separator,
              React.createElement('span', {className: 'minutes'}, this.state.minutes),
              separator,
              React.createElement('span', {className: 'seconds'}, this.state.seconds)
            )
          );
      }
    });

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
