// Modules
var React = require('react');
var Clock = require('./components/clock');

var main = {
  createClockWithCurrentTime: function() {
    var dateNow = new Date();
    return React.createElement(Clock, {date: dateNow});
  }
};

module.exports = main;
