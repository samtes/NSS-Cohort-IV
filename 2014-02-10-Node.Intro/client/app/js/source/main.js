(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#one').click(one);
    $('#two').click(two);
    $('#add').click(add);
    $('#drink').click(canDrink);
    $('#product').click(product);
    $('#calculate').click(dance);
  }
  
  function dance(){
    var names = $('#numbers').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/dance?names='+names+'&callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#dance').text(data.products);
    });
  }
  
  function product(){
    var numbers = $('#numbers').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/product?numbers='+numbers+'&callback=?';
    $.getJSON(url, function(data){
      console.log('The Answer is: '+data.products);
      $('#resultPrp').text(data.products);
    });
  }

  function canDrink(){
    var name = $('#name').val();
    var age = $('#age').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/can_drink/'+name+'/'+age+'?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#result').text(data.result);
    });
  }


  function add(){
    var num1 = $('#input1').val();
    var num2 = $('#input2').val();
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/sum/'+num1+'/'+num2+'?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      var result = data.sum;
      $('#sum').text('Result is: '+result);
    });
  }

  function one(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/name?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }
  
  function two(){
    var url = window.location.origin.replace(/(\d){4}/g, '4000');
    url += '/color?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
    });
  }

})();

