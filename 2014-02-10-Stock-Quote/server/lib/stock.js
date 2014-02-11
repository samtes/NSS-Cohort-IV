'use strict';

function Stock(sym){
  this.symbol = sym;
  this.quote = '$'+(Math.random() * 200 + 50).toFixed(2);
}

module.exports = Stock;
