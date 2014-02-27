(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#add').click(add);
    $('#mult').click(multply);
  }

  function multply(){
    var nums = $('#nums').val();
    var url = 'calc/mult?nums=' + nums;
    console.log(url);
    $.getJSON(url, function(data){
      console.log(data);
      $('#result').text(data.result);
    });
  }

  function add(){
    var x = $('#num1').val();
    var y = $('#num2').val();
    var url = 'calc/add?x=' + x + '&y=' + y;
    console.log(url);
    $.getJSON(url, function(data){
      console.log(data);
      $('#result').text(data.result);
    });
  }

})();

