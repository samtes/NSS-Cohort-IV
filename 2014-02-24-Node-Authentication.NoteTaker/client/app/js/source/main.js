(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('h1').click(hideShow);
    $('#register').click(register);
    $('#login').click(login);
  }

  function hideShow(){
    $('#user').toggleClass('hide');
  }

  function register(event){
    var data = $('#user').serialize();
    var url = window.location.origin.replace(/[0-9]{4}/g, 4000)+'/users';
    var type = 'POST';
    var success = displayMessage;

    $.ajax({url:url, data:data, type:type, success:success});
    event.preventDefault();
  }

  function displayMessage(status){
    if(status.isSuccess){
      alert('Thank you for registering');
    } else {
      alert('Registration Failed');
    }
    console.log(status);
  }

  function login(event){
    var data = $('#user').serialize();
    var url = window.location.origin.replace(/[0-9]{4}/g, 4000)+'/users/login';
    var type = 'PUT';
    var success = displayLoginMessage;

    $.ajax({url:url, data:data, type:type, success:success});
    event.preventDefault();
  }

  function displayLoginMessage(status){
    console.log(status);
  }




})();

