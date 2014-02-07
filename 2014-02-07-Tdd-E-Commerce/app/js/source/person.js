/* exported Person */
/* global Cart: false */

var Person = (function(){

  'use strict';

  function Person(name, cash){
    this.name = name;
    this.cash = cash;
    this.cart = new Cart();
  }
  
// this function checksout the products in the cart if the user has enough cash //
  Person.prototype.checkOut = function(){
    if (this.cash > this.cart.Total){
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
    }
    else {
      prompt('You do not have enough cash!');
    }
  };

  return Person;
})();
