'use strict';

var React = require('react');

var Clock = React.createClass({
  getInitialState : function() {
    var initialState = { hour: null, minutes: null, seconds: null }

    if (this.props.date && this.props.date instanceof Date) {
      initialState.hour = this.props.date.getHours();
      initialState.minutes = this.props.date.getMinutes();
      initialState.seconds = this.props.date.getSeconds();
    }

    return initialState;
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
