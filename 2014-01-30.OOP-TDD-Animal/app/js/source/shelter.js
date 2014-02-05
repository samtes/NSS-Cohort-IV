/* jshint unused:false */

var Shelter = (function(){

  'use strict';
  var hours;
  var animals = [];

  function Shelter(name){
    this.name = name;
    this.location = 'Not Defined';
    this.capacity = 0;
    this.placedAnimals = [];
  }

  Shelter.prototype.placeAnimal = function(name){
    var tempAnimals = _.remove(animals, function(animal){
      return animal.name === name;
    });
    return tempAnimals[0];
  };

  Shelter.prototype.addAnimal = function(animal){
    animals.push(animal);
  };


  Shelter.prototype.setHours = function(times){
      var tempHours = _.map(times, function(time){
        return time.day +' '+time.open+'-'+time.close;
      });

      hours = tempHours.join(', ');
    };
  
  Shelter.prototype.getHours = function(){
    return hours;
  };

  return Shelter;

})();

