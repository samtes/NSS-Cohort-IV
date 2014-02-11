(function(){

  'use strict';

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    $('#get-quote').click(getQuote);
  }

  function getQuote(){
    var symbol = $('#symbol').val();
    var url = window.location.origin.replace(/[0-9]{4}/,'4000');
    url +='/quote/'+symbol+'?callback=?';
    $.getJSON(url, function(data){
      console.log(data);
      $('#result').text(data.quote.quote);
    });
  }

})();

