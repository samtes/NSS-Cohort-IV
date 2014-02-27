(function(){

  'use strict';
  var movies = [];
  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    getMovies();

    $('#movie').submit(submitMovie);
    $('#update').click(updateData);
    $('tbody').on('click', '.remove', removeMovie);
    $('tbody').on('click', '.edit', editMovie);
    $('#toggel').click(toggle);
  }
   
  function toggle(){
    $('#movie').toggleClass('hide');
  }

  function updateData(event){
    debugger;
    var data = $('#movie').serialize();
    var id = $('#movie').find('.id').data('id');
    var url = window.location.origin.replace(/[0-9]{4}/g, '4000') + '/movies/'+ id;
    var type = 'PUT';
    var success = updateMovieData;

    console.log({url:url, type:type, data:data, success:success});
    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function updateMovieData(data){
    alert('I WILL BE DAMN!');
    if(data.updated === 1){
      _.remove(movies, function(movie){return movie._id === data.id;});
      data.movie._id = data.id;
      movies.push(data.movie);
    }
    $('#update').remove();
    $('#add-movies').show();
    console.log(data);
  }

  function editMovie(){
    var data = $(this).closest('.id').data('id');
    var url = window.location.origin.replace(/[0-9]{4}/g, '4000') + '/movies/' + data;
    $.getJSON(url, returnData);
  }

  function returnData(data){
    var name = data.movie[0].name;
    var year = data.movie[0].year;
    var studio = data.movie[0].studio;
    var rating = data.movie[0].rating;
    var length = data.movie[0].length;
    var director = data.movie[0].director;
    var actors = data.movie[0].actors;
    var poster = data.movie[0].poster;
    var id = data.movie[0]._id;

    $('body').scrollTop(0);
    $('#name').val(name);
    $('#year').val(year);
    $('#studio').val(studio);
    $('#rating').val(rating);
    $('#length').val(length);
    $('#director').val(director);
    $('#actors').val(actors);
    $('#poster').val(poster);
    $('#id').val(id);
    $('#update').show();
    $('#add-movies').remove();
  }


  function removeMovie(event){
    var data = $(this).closest('.id').data('id');
    var url = window.location.origin.replace(/[0-9]{4}/g, '4000') + '/movies/' + data;
    var type = 'DELETE';
    var success = removeMovieNow;

    $.ajax({url:url, type:type, success:success});
    event.preventDefault();
  }

  function removeMovieNow(data){
    if (data.deleted === 1){
      $('.id[data-id="'+data.id+'"]').remove();
    }
  }

  function getMovies(){
    var url = window.location.origin.replace(/[0-9]{4}/g, 4000) + '/movies';
    $.getJSON(url, addMovies);

  }

  function submitMovie(event){
    var data = $(this).serialize();
    var url = window.location.origin.replace(/3000/, '4000') + '/movies';
    var type = 'POST';
    var success = newMovie;

    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function newMovie(){
    $('#result > table > tbody').empty();
    getMovies();
    $(this).empty();
  }

  function addMovies(data){
    for (var i = 0; i < data.movies.length; i++){
      movies.push(data.movies[i]);

      var $name =$('<td>');
      $name.text(data.movies[i].name);
      var $rating = $('<td>');
      $rating.text(data.movies[i].rating);
      var $length = $('<td>');
      $length.text(data.movies[i].length);
      var $year = $('<td>');
      $year.text(data.movies[i].year);
      var $studio = $('<td>');
      $studio.text(data.movies[i].studio);
      var $actors = $('<td>');
      $actors.text(data.movies[i].actors);
      var $director = $('<td>');
      $director.text(data.movies[i].director);
      var $poster = $('<td>');
      var $img = $('<img>');
      $img.addClass('style');
      $img.attr('src', data.movies[i].poster);
      $poster.append($img);
      var $remove = $('<td>');
      $remove.addClass('edit-remove');
      var $rmv = $('<div>');
      var $edt = $('<div>');
      $rmv.text('Remove');
      $edt.text('Edit');
      $rmv.addClass('remove');
      $edt.addClass('edit');
      $remove.append($edt, $rmv);


      var $row = $('<tr>');

      $row.prepend($poster, $name, $rating, $length, $year, $studio, $actors, $director, $remove);
      $row.addClass('id');
      $row.attr('data-id', data.movies[i]._id);
      $('#result > table > tbody').append($row);
    }
  }





})();

