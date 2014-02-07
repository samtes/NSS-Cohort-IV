/* global test:false, Person:false, deepEqual:false, ok:false, Product:false */

'use strict';

test('Product', function(){
  var p1 = new Product('DVD', 5);

  ok( p1 instanceof Product, 'p1 should an instance of Product');
  deepEqual(p1.name, 'DVD', 'p1 name should be DVD');
  deepEqual(p1.price, 5, 'p1 price should be 5');
});

test('Person', function(){
  var pr1 = new Person('Bob', 500);

  ok( pr1 instanceof Person, 'pr1 should an instance of Person');
  deepEqual(pr1.name, 'Bob', 'pr1 name should be Bob');
  deepEqual(pr1.cash, 500, 'pr1 price should be 500');
});


test('Cart#addProduct', function(){
  var p1 = new Product('DVD', 5);
  var p2 = new Product('Pen', 1);
  var p3 = new Product('Rasor', 2);
  var pr1 = new Person('Bob', 500);
  pr1.cart.add(p1, 2);
  pr1.cart.add(p2, 5);
  pr1.cart.add(p3, 1);

  ok(pr1.cart.products.length === 8, 'cart product length should be two');
});


test('Cart#removeProduct', function(){
  var p1 = new Product('DVD', 5);
  var p2 = new Product('Pen', 1);
  var p3 = new Product('Rasor', 2);
  var pr1 = new Person('Bob', 500);
  pr1.cart.add(p1, 2);
  pr1.cart.add(p2, 5);
  pr1.cart.add(p3, 1);

  pr1.cart.remove('Pen', 2);

  ok(pr1.cart.products.length === 6, 'cart product length should be three');
  ok(pr1.cart.Total === 15, 'the total amount should be 12');
});

test('Person#CheckOut', function(){
  var p1 = new Product('DVD', 5);
  var p2 = new Product('Pen', 1);
  var p3 = new Product('Rasor', 2);
  var pr1 = new Person('Bob', 500);
  pr1.cart.add(p1, 2);
  pr1.cart.add(p2, 5);
  pr1.cart.add(p3, 1);

  pr1.cart.remove('Pen', 5);
  pr1.checkOut();

  ok(pr1.cash === 488, 'pr1 cash should be 488');
  ok(pr1.cart.products.length === 0, 'cart product length should be 0');
});
