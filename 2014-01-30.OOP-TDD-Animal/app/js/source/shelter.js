/* jshint unused:false */
/* global Animal: false */

var Shelter = (function(){

  'use strict';


  function Shelter(name){
    this.name = name;
    this.location = 'Not Defined';
    this.capacity = 0;
    this.animals = [];
  }

  Shelter.prototype.placeAnimal = function(name){
    debugger;
    for (var i = 0; i < this.animals.length; i++){
      if (this.animals[i].name === name){
        var x =  this.animals[i];
        var remove = _.reject(this.animals, x);
        this.animals = remove;
        return x;
      }
    }
  };

  Shelter.prototype.addAnimal = function(animal){
    this.animals.push(animal);
  };


  Shelter.prototype.setHours = function(times){
      var hours = _.map(times, function(time){
        return time.day +' '+time.open+'-'+time.close;
      });

      this.hours = hours.join(', ');
    };

  return Shelter;

})();

