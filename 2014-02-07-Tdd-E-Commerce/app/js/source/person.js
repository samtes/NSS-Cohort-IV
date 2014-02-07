/* exported Person */
/* global Cart: false */

var Person = (function(){

  'use strict';

  function Person(name, cash){
    this.name = name;
    this.cash = cash;
    this.cart = new Cart();
  }
  Person.prototype.checkOut = function(){
    debugger;
    this.cash -= this.cart.Total;
    this.cart.products = [];
    console.log(this.cash);
    console.log(this.cart.products);
    var list = this.cart.products;
    var num;
    var item;
    var price;
    var checkedOut;
    var format;
    var total = 0;
    for (var i =0 ;i < list.length; i++){
      num = i + 1;
      item = list[i].name;
      price = list[i].price;
      format = num +'. '+ 'item: '+item +' Price: $'+price;
      checkedOut = format;
      total += price;
      console.log(checkedOut);
    }
    console.log('Total Ptice is: $'+ total);
    return checkedOut;
  };

  /*Object.defineProperty(Person.prototype, 'checkOut', {
    get: function(){
      var total = this.cart.Total;
      this.cash = total;
      return total;
    }
  });*/

  return Person;
})();
