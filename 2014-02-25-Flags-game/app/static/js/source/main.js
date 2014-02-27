(function(){

  'use strict';
  var username = [];
  var scores = [];
  var code;
  var cou;
  var count = 30;
  var counter;
  var endTime = $('#game').children('div').children('div:nth-child(1)').children('p').length;

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#toggle').click(startGame);
    $('body').on('click', '.country', savenCheckCountry);
    $('body').on('click', '.flag', savenCheckFlag);
  }

  function startGame(){
    var name = prompt('Enter player Name');
    username.push(name);
    $('#game').toggleClass('hide');
    $('#score').hide();
    counter = setInterval(timer, 1000);
  }

  function timer(){
    $('#timer').text(count);
    count--;
    if (count <= -1){
      clearInterval(counter);
      setTimeout(function() {alert('Game Over');},1250);
      return;
    }
  }

  function savenCheckCountry(){
    debugger;
    $(this).addClass('highlight');
    var country = $(this).text();
    var url = '/countries?country=' + country;
    $.getJSON(url, function(data){
      console.log(data);
      code = data.country.flag;
      cou = data.country.country;
    });
  }

  function savenCheckFlag(){
    debugger;
    if ($(this).attr('value') === code){
      $(this).parent().addClass('fly');
      $('#game').find('.country-'+ cou).css('text-decoration', 'line-through');
      $('#game').find('.country-'+ cou).css('background-color', 'tomato');
      alert('you got it!');
      endTime--;
      runCheck(endTime);
    } else {
      alert('Nope, try again!');
    }
  }

  function runCheck(num){
    if(num === 0){
      clearInterval(counter);
      setTimeout(function() {alert('Congrats you won at '+ ((count*1)+1) +' seconds!');},1250, addRecord());
      return;
    }
  }

  function addRecord(){
    scores.push((count*1)+1);
    $('#score').show();

    for (var i = 0; i < scores.length; i++){
      var $row = $('<tr>');
      var $user = $('<td>');
      var $time= $('<td>');

      $user.text(username);
      $time.text((count*1)+1+' seconds');

      $row.append($user, $time);

      $('#score tbody').prepend($row);
    }
  }


})();

