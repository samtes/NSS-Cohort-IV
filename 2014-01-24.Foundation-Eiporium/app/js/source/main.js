(function(){

  'use strict';

  $(document).ready(init);

  function init(){
    $('#add-item').click(addItem);
  }

  function addItem(event){
    if ($('#item').val() && $('#quantity').val() && $('#price').val() !== ''){
      var item = $('#item').val();
      var quantity =$('#quantity').val();
      var price = $('#price').val();
      var total = quantity * price;
      addItemToTable(item, quantity, price, total);
      updateTotals();
      event.preventDefault();
      $('#item').val('');
      $('#quantity').val('');
      $('#price').val('');
    } else {
      alert('All fields are required!');
    }
  }

  function updateTotals(){
    var $amounts = $('table > tbody > tr > td:nth-child(3)');
    var numbers = transformTdsToNumbers($amounts);
    var theSum = sum(numbers);
    $('table > tfoot > tr > td:nth-child(3)').text(numberToCurr(theSum));

    var $totals =  $('table > tbody > tr > td:nth-child(4)');
    debugger;
    numbers = transformTdsToNumbers($totals);
    theSum = sum(numbers);
    $('table > tfoot > tr > td:nth-child(4)').text(numberToCurr(theSum));
  }

  function sum(numbers){
    var total =  0;
    for (var i=0; i<numbers.length; i++){
      total += numbers[i];
    }
    return total;
  }


  function transformTdsToNumbers($tds){
    return $.map($tds, function(td){
      return td.textContent.slice(1) * 1;
    });
  }

  function  addItemToTable(item, quantity, price, total){
      var $tr = $('<tr>');
      var $item = $('<td>');
      $item.text(item);
      var $quantity = $('<td>');
      $quantity.text(quantity);
      var $amount = $('<td>');
      $amount.text(price);
      $amount.text(numberToCurr(price * 1));
      var $total = $('<td>');
      $total.text(numberToCurr(total * 1));

      $tr.append($item, $quantity, $amount, $total);
      $('table tbody').append($tr);
    }

  function numberToCurr(number){
    return '$' + number.toFixed(2);
  }

}());
