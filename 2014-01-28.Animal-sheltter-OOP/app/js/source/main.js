/* global Animal, animalFactory :false */
(function(){

  'use strict';

  $(document).ready(initialize);

  var animals = [];
  var counter = 0;


  function initialize(){
    $('input, textarea').focusin(focusInput);
    $('input, textarea').blur(blurInput);
    $('#addPhoto').click(addPhoto);
    $('#addAnimal').click(addAnimal);

    animals = animalFactory();
    addToTable();
  }

  function addToTable(){
    debugger;
    for (var i = 0; i < animals.length; i++){
      var name = animals[i].name;
      var species = animals[i].species;
      var age = animals[i].age;
      var gender = animals[i].gender;
      var color = animals[i].color;
      var description = animals[i].description;
      //var photo = animals[i].photos;

      var $aName = $('<a>');
      $aName.attr('dataSearch','name');
      $aName.attr('dataValue', name);
      $aName.attr('href', '#');
      var $aSpecies = $('<a>');
      $aSpecies.attr('dataSearch', 'species');
      $aSpecies.attr('dataValue', species);
      $aSpecies.attr('href', '#');
      var $aAge = $('<a>');
      $aAge.attr('dataSearch', 'age');
      $aAge.attr('dataValue', age);
      $aAge.attr('href', '#');
      var $aGender = $('<a>');
      $aGender.attr('dataSearch', 'gender');
      $aGender.attr('dataValue', gender);
      $aGender.attr('href', '#');
      var $aColor = $('<a>');
      $aColor.attr('dataSearch', 'color');
      $aColor.attr('dataValue', color);
      $aColor.attr('href', '#');
      var $aDesc = $('<a>');
      $aDesc.attr('dataSearch', 'description');
      $aDesc.attr('dataValue', description);
      $aDesc.attr('href', '#');


      //var photo = animals[i].photos;
      //var $aPhoto = $('<a>');
      //$aPhoto.attr('dataSearch', 'photo');
      //$aPhoto.attr('dataValue', photo);
      //$aPhoto.attr('href', '#');

      var $tdName = $('<td>');
      var $tdSpecies = $('<td>');
      var $tdAge = $('<td>');
      var $tdGender = $('<td>');
      var $tdColor = $('<td>');
      var $tdDesc = $('<td>');
      var $tdPhoto = $('<td>');
      //var $divImg = $('<img>');


      $aName.text(name);
      $tdName.append($aName);
      $aSpecies.text(species);
      $tdSpecies.append($aSpecies);
      $aAge.text(age);
      $tdAge.append($aAge);
      $aGender.text(gender);
      $tdGender.append($aGender);
      $aColor.text(color);
      $tdColor.append($aColor);
      $aDesc.text(description);
      $tdDesc.append($aDesc);
      //$tdPhoto.append($divImg);
      //$divImg.attr('src', photo);
      //$aPhoto.append($tdPhoto);

      var photo = spitImages(animals[i].photos);
      $tdPhoto.append(photo);

      var $tr = $('<tr>');
      $tr.append($tdName, $tdSpecies, $tdAge, $tdGender, $tdColor, $tdDesc, $tdPhoto);
      $('tbody').append($tr);
    }
  }

  function spitImages(obj){
    debugger;
    for (var i = counter; i < obj.length; i++){
      var $aPhoto = $('<a>');
      $aPhoto.attr('dataSearch', 'photo');
      $aPhoto.attr('dataValue', 'img'+[i]);
      $aPhoto.attr('href', '#');
      var $divImg = $('<img>');
      $divImg.css('width', '35px');
      $divImg.attr('src', obj[i]);
      $aPhoto.append($divImg);
      var $parDiv = $('<div>');
      $parDiv.append($aPhoto);
      counter++;
      return $parDiv;
    }
  }
  function addAnimal(){
    var species = $('#species').val();
    var desc = $('#desc').val();
    var age = $('#age').val() * 1;
    var color = $('#color').val();
    var name = $('#name').val();
    var gender = $('#gender').val();
    var photo = getAnimalPhotos();

    console.log(species, desc, age, color, name, gender, photo);
    var animal = new Animal(name, age, gender, photo, desc, color, species);
    animals.push(animal);
    $('#species').val('');
    $('#desc').val('');
    $('#age').val('');
    $('#color').val('');
    $('#name').val('');
    $('#gender').val('');
    $('#photo').val('');
    event.preventDefault();
  }


  function getAnimalPhotos(){
    var $img = $('#container > div > img');
    return _.map($img, function(img){return $(img).attr('src');});
  }

  function addPhoto(){
    var url = $('#photo').val();
    var $div = $('<div>');
    var $img = $('<img>');
    $img.attr('src', url);
    $img.attr('th radius');
    $div.attr('style');
    $div.append($img);
    $('#container').append($div);
    $('#photo').val('');
    event.preventDefault();
  }

  function focusInput(){
    $(this).css('background-color', '#fff888');
  }

  function blurInput(){
    $(this).css('background-color', 'white');
  }


})();

