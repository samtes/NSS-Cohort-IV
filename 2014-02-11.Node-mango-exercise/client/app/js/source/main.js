(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getExercises();
    $('#create-exercise').click(createExercise);
    $('#filter').click(filter);
    $('#reset').click(reset);
  }

  function reset(){
    getExercises();
  }

  function filter(){
    var url = window.location.origin.replace(/[0-9]{4}/g, 4000);
    url += '/exercises';
    console.log(url);
    $.getJSON(url, filterResult);
  }


  function filterResult(data){
    var name = $('#names').val();
    $('#body').empty();
    for (var i = 0; i < data.exercises.length; i++){
      if (data.exercises[i].name === name){
        var $name = $('<td>');
        var $time = $('<td>');
        var $cals = $('<td>');
        var $date = $('<td>');

        $name.text(data.exercises[i].name);
        $time.text(data.exercises[i].time);
        $cals.text(data.exercises[i].calories);
        $date.text(data.exercises[i].date);

        var $row = $('<tr>');

        $row.append($name, $time, $cals, $date);
        $('#exercises > tbody').append($row);
      }
    }
  }

  function createExercise(){
    var name = $('#name').val();
    var time = $('#time').val();
    var cals = $('#cals').val();
    var date = $('#date').val();

    var url = window.location.origin.replace(/[0-9]{4}/g, 4000);
    url += '/exercises';
    var options = {};
    if (name.length !==0 && time.length !== 0 && cals.length !== 0 && date.length !== 0){
      options.url = url;
      options.type = 'POST';
      options.data = {name:name, time:time, calories: cals, date:date};
      options.success = exerciseCreated;

      $.ajax(options);
    } else {
      alert('All fields are required :-))!');
    }
  }

  function exerciseCreated(){
    $('#body').empty();
    getExercises();
  }

  function getExercises(){
    var url = window.location.origin.replace(/[0-9]{4}/g, 4000);
    url += '/exercises';
    console.log(url);
    $.getJSON(url, displayExercise);
  }

  function displayExercise(data){
    var arr = [];
    for (var i = 0; i < data.exercises.length; i++){
      var $name = $('<td>');
      var $time = $('<td>');
      var $cals = $('<td>');
      var $date = $('<td>');

      $name.text(data.exercises[i].name);
      $time.text(data.exercises[i].time);
      $cals.text(data.exercises[i].calories);
      $date.text(data.exercises[i].date);

      arr.push(data.exercises[i].name);
      var $row = $('<tr>');

      $row.append($name, $time, $cals, $date);
      $('#exercises > tbody').append($row);
    }
    populateNames(arr);
  }

  function populateNames(data){
    var result = _.uniq(data);
    for (var x = 0; x < result.length; x++){
      var $opt = $('<option>');
      $opt.text(result[x]);
      $('#names').append($opt);
    }
  }

})();

