'use strict';

var Stock = require('../lib/stock');

exports.getQuote = function (req, res){
  var quote = new Stock(req.params.a);
  console.log(Stock);
  res.jsonp({quote:quote});
};
