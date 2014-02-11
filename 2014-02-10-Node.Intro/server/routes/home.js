'use strict';

exports.index = function(req, res){
  res.jsonp({ok:true});
};

exports.name = function(req, res){
  res.jsonp({name: 'my name is node'});
};

exports.color = function(req, res){
  res.jsonp({color: 'my color is blue'});
};

exports.sum= function(req, res){
  var total = parseFloat(req.params.a) + parseFloat(req.params.b);
  res.jsonp({sum:total});
};

exports.canDrink= function(req, res){
  var name = req.params.a;
  var age = req.params.b;
  var response;

  if (age < 17){
    response = 'I am sorry '+name+' you cant drink';
  }  else if (age > 17 && age < 20){
    response = 'Hi '+name+' maybe I will let you drink';
  } else {
    response = 'Go have fun '+name+'!';
  }
  res.jsonp({result: response});
};

