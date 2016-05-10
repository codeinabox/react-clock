'use strict';

var React = require('react');

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

module.exports = Clock;
