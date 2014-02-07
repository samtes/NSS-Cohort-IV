/* exported Cart */

var Cart = (function(){

  'use strict';

  function Cart(){
    this.products = [];
  }
 
  Object.defineProperty(Cart.prototype, 'Total', {
    get: function(){
      var total = 0;
      for (var i = 0; i < this.products.length; i++){
        total += this.products[i].price;
      }
      return total;
    }
  });

  Cart.prototype.add = function(product, quantity){
    if (quantity === undefined){
      quantity = 1;
    } else {
      quantity = quantity;
    }
    for (var i = 0; i < quantity; i++){
      this.products.push(product);
    }
    console.log(this.products);
  };

  Cart.prototype.remove = function(productName, quantity){
      debugger;
      var array = _.remove(this.products, function(product){
          return product.name === productName;
        });
      var splice = array.splice(0, quantity);
      console.log(splice);
      this.products = this.products.concat(array);
      return splice;
    };

  return Cart;
})();

