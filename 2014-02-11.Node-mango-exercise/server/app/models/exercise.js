'use strict';

//this is an exercise constructor
var Exercise = function(name, time, calories, date){
  this.name = name;
  this.time = parseInt(time);
  this.calories = parseInt(calories);
  this.date = date;
};

module.exports = Exercise;
