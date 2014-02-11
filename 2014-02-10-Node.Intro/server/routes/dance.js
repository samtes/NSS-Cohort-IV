'use strict';

var _ = require('lodash');

exports.calculate = function(req, res){
  var names = req.query.names.split(', ');
  var filtName = _.remove(names, function(name){
    return name.length%2===0});

  var odd =_.map(names, function(name){
  return name.length});
  var even =_.map(filtName, function(name){
    return name.length});

  var result= _.reduce(odd, function(acc, num){return acc+num}, 0);
  console.log(result*result);
  var result2= _.reduce(even, function(acc, num){return acc+num}, 0);
  console.log(result1*result1*result1);
  var calc = 'odd: '+ result+ 'even: '+result2;
  res.jsonp({calculate:calc});
};
