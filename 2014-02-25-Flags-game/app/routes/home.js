'use strict';

var _= require('lodash');

exports.index = function(req, res){
  var random = _.random(2, 4);
  var flags = _.sample(global.flags, random);
  var countries = _.shuffle(flags);
  res.render('home/index', {flags:flags, countries:countries, title: 'Flags of the World'});
};

exports.find = function(req, res){

  var check = _.find(global.flags, function(country){
    return country.country === req.query.country;
  });
  res.send({country:check});
};
