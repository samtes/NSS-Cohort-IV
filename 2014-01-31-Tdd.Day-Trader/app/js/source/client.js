/* jshint unused: false */

var Client = (function(){

  'use strict';

  function Client(name){
    this.name = name;
    this._portfolios = [];


  }

  Object.defineProperty(Client.prototype, 'portfolioCount', {
    get: function(){
      return this._portfolios.length;
    }
  });

  Client.prototype.addPortfolio = function(name){
    var nameArr = [].concat(name);
    for (var i = 0; i < nameArr.length; i++){
      this._portfolios.push(nameArr[i]);
    }
  };

  Client.prototype.getPortfolio = function(input){
    for (var i = 0; i < this.portfolioCount; i++){
      if (input === this._portfolios[i].name){
      }
      return this._portfolios[i];
    }
  };

  Client.prototype.deletePortfolio = function(name){
    var nameArr = [].concat(name);
    debugger;
    var output = _.remove(this._portfolios, function(portfolio){
      return _.contains(nameArr, portfolio.name);
    });

    if (typeof name === 'string'){
      output = output[0];
    }
    return output;
  };

  return Client;


})();
