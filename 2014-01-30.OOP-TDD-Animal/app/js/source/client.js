/* jshint unused:false */
/* global Animal:false, Shelter:false */

var Client = (function(){

  'use strict';

  function Client(name){
    this.name = name;
    this.adoptedAnimals = [];
  }


  Client.prototype.adoptAnimal = function(name){
    debugger;
    return Shelter.prototype.placeAnimal(name);
  };


  return Client;
})();
