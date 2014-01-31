/* global test:false, ok:false, Animal:false, Client:false,  Shelter:false, deepEqual:false */

'use strict';

test('Shelter', function(){
  var shelter = new Shelter();
  var s1 = new Shelter();
  var string = 'my string';

  ok(shelter instanceof Shelter, 'shelter should be an instance of Shelter');
  ok(s1 instanceof Shelter, 'shelter should be an instance of Shelter');
  ok(!(string instanceof Shelter), 'shelter should not be an instance of Shelter');
});


test('Shelter#name', function(){
  var s1 = new Shelter( 'Green Hills Shelter');

  deepEqual(s1.name, 'Green Hills Shelter', 's1 should have a name');
});


test('Shelter#location', function(){
  var s1 = new Shelter('Green Hills Shelter');
  var s2 = new Shelter('GHS');
  s1.location = 'Main Street';

  deepEqual(s1.location, 'Main Street', 's1 should have a location');
  deepEqual(s2.location, 'Not Defined', 's2 should have a default location');
});

test('Shelter#capacity', function(){
  var s1 = new Shelter('Green Hills Shelter');

  deepEqual(s1.capacity, 0,  's1 should have zero capacity');
});

test('Shelter#setHours()', function(){
  var s1 = new Shelter('Green Hills Shelter');
  s1.setHours([
    {day: 'Mon', open: '8am', close: '5pm'},
    {day: 'Wed', open: '11am', close: '2pm'},
    {day: 'Fri', open: '9am', close: '4pm'}
  ]);

  deepEqual(s1.hours, 'Mon 8am-5pm, Wed 11am-2pm, Fri 9am-4pm', 's1 should have an hour of Mon');
});

test('Shelter#addAnimals()', function(){
  var s1 = new Shelter('Green Hill Shlter');
  var a1 = new Animal('king', 'dog', 'male', 9);
  s1.addAnimal(a1);

  ok(s1.animals.length === 1, 's1 should have a length of 1');
  ok(s1.animals[0] instanceof Animal, 's1 should be an instance of Animal');
  deepEqual(s1.animals[0].name, 'king', 'si name should be King');
});

test('Shelter#placeAnimal()', function(){
  var s1 = new Shelter('Green Hill Shlter');
  var a1 = new Animal('king', 'dog', 'male', 9);
  var a2 = new Animal('Bartania', 'dog', 'male', 9);
  var a3 = new Animal('Reemus', 'dog', 'male', 9);
  s1.addAnimal(a1);
  s1.addAnimal(a2);
  s1.addAnimal(a3);
  var x = s1.placeAnimal('king');

  ok(s1.animals.length === 2, 's1 should have a length of 2');
  deepEqual(x.name, 'king', 'a1 name should be King');
});





///////////////////////////////////////////////////////////////



test('Animal', function(){
  var a1 = new Animal();

  ok(a1 instanceof Animal, 'a1 should be an instance of Animal');
});

test('Animal#name', function(){
  var a1 = new Animal( 'fido');

  deepEqual(a1.name, 'fido', 's1 should have a name');
});


test('Animal#species', function(){
  var a1 = new Animal( 'fido', 'dog');
  var a2 = new Animal('Jambo');

  deepEqual(a1.species, 'dog', 'a1 should have a species');
  deepEqual(a2.species, 'Not Defined', 'a2 should have a species of "Not Defined"');

});

test('Animal#gender', function(){
  var a1 = new Animal( 'fido', 'dog','male');
  var a2 = new Animal( 'fido');

  deepEqual(a1.gender, 'male', 'a1 should have a Gender');
  deepEqual(a2.gender, 'Not Defined', 'a3 should have a Gender');

});


test('Animal#age', function(){
  var a1 = new Animal( 'fido', 'dog','male', 4);
  var a2 = new Animal( 'fido');

  deepEqual(a1.age, 4, 'a1 should have an age');
  deepEqual(a2.age, 0, 'a2 should have an age of 0');

});


//////////////////////////////////////////////////////




test('Client', function(){
  var c1 = new Client();

  ok(c1 instanceof Client, 'c1 should be an instance of Client');
});

test('Client#name', function(){
  var c1 = new Client('Mike');

  deepEqual(c1.name, 'Mike', 'c1.name should be "Mike"');
});


test('Client#adoptanimal()', function(){
  var c1 = new Client('Jimmy');
  var a1 = new Animal('king', 'dog', 'male', 9);
  var a2 = new Animal('Bartania', 'cat', 'female', 3);
  var a3 = new Animal('Reemus', 'lino', 'male', 5);
  var s1 = new Shelter('Green Hill Shlter');
  s1.addAnimal(a1);
  s1.addAnimal(a2);
  s1.addAnimal(a3);
  s1.placeAnimal(a1);
  s1.placeAnimal(a2);
  s1.placeAnimal(a3);
  var j = c1.adoptAnimal('Reemus');
  var k = c1.adoptAnimal('king');
  var h = c1.adoptAnimal('Bartania');

  ok(c1.animals.length === 3, 'c1 should have 3 animals');
  ok(s1.animals.length === 0, 's1 should have 0 animals');
  deepEqual(k.name, 'king', 'a1 name should be King');
  deepEqual(k.species, 'dog', 'a1 name should be dog');
  deepEqual(k.name, 'male', 'a1 name should be male');
  deepEqual(k.age, 9, 'a1 name should be 9');
  deepEqual(h.name, 'Bartania', 'a2 name should be Bartania');
  deepEqual(h.species, 'cat', 'a2 name should be cat');
  deepEqual(h.name, 'female', 'a2 name should be female');
  deepEqual(h.age, 3, 'a2 name should be 3');
  deepEqual(j.name, 'Reemus', 'a3 name should be Reemus');
  deepEqual(j.species, 'lion', 'a3 name should be lion');
  deepEqual(j.gender, 'male', 'a3 name should be male');
  deepEqual(j.age, 5, 'a3 name should be 5');
});
