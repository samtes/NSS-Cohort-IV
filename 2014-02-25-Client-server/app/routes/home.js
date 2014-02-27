'use strict';

var _ = require('lodash');

exports.index = function(req, res){
  res.render('home/index', {title: 'Client Server Baby'});
};

exports.calc = function(req, res){
  res.render('home/calc', {title: 'Calculator'});
};

exports.add = function(req, res){
  var result = (req.query.x)*1 + (req.query.y)*1;
  res.send({result:result});
};

exports.mult = function(req, res){
  var nums = req.query.nums.split(',');
  var mult = _.reduce(nums, function(acc, x){return acc * x;}, 1);
  res.send({result:mult});
};
