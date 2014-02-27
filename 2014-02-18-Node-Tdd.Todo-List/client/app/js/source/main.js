(function(){

  'use strict';

  var priorities = [];
  var row;
  var globalName;
  var preGlobalName;
  var globalValue;

  $(document).ready(initialize);

  function initialize(){
    $(document).foundation();
    populateTable();
    $('.addPriority').click(addToTable);
    $('#priorities').on('click', '.savePriority', updatePriority);
    $('#priorities').on('click', '.edit', replaceEdit);
    $('#priorities').on('click', '.remove', deletePriority);
    $('#addTask').click(addTaskToDb);
  }

  function addTaskToDb(event){
    debugger;
    var task = $('#task').serialize();
    var date = $('#date').serialize();
    var priority = 'priority=' + $('#priority').val();
    var tags = $('#tags').serialize();

    var data = task+'&'+date+'&'+priority+'&'+tags;
    var url = window.location.origin.replace(/[0-9]{4}/g, 4000)+'/tasks';
    var type = 'POST';
    var success = addtoTaskTable;

    $.ajax({url:url, type:type, data:data, success:success});
    event.preventDefault();
  }

  function addtoTaskTable(data){
    console.log(data);
  }

  function populateTable(){
    var url = window.location.origin.replace(/[0-9]{4}/g, 4000)+'/priorities';
    var type = 'GET';
    var success = sendDataToTable;

    $.ajax({url:url, type:type, success:success});

  }

  function updatePriority(event){
    var id = $(this).parent().parent().attr('data-id');
    var name = $(this).parent().parent().children().children('input:nth-child(1)').val();
    if (globalName !== name){
      var value = $(this).parent().parent().children('td:nth-child(2)').children('input').val();
      globalValue = value;
      var data = 'name='+name+'&value='+value+'&_id='+id;
      var url = window.location.origin.replace(/[0-9]{4}/g, 4000)+'/priorities/';
      url += id;
      var type = 'PUT';
      var success = replaceOnTable;
      globalName = name;

      $.ajax({url:url, data:data, type:type, success:success});
      event.preventDefault();
    } else {
      alert('Update name to proceed');
    }
  }
  
  function replaceOnTable(data){
    debugger;
    $('#priorities > tbody > tr[data-id='+row+']').children('td:nth-child(1)').children().remove();
    $('#priorities > tbody > tr[data-id='+row+']').children('td:nth-child(1)').text(data.name);

    $('#priorities > tbody > tr[data-id='+row+']').children('td:nth-child(2)').children().remove();
    $('#priorities > tbody > tr[data-id='+row+']').children('td:nth-child(2)').text(data.value);
    
    $('#priorities > tbody > tr[data-id='+row+']').children().find('.hide').removeClass('hide');
    $('#priorities > tbody > tr[data-id='+row+']').children().find('.show').addClass('hide');
    
    $('select').find('.'+preGlobalName+'').val(globalName);
    $('select').find('.'+preGlobalName+'').text(globalName);
  }

  function sendDataToTable(data){
    for (var i = 0; i < data.priorities.length; i++){
      addPriorityToTable(data.priorities[i]);
    }
  }

  function deletePriority(event){
    debugger;
    var id = $(this).parent().parent().parent().attr('data-id');
    var name = $(this).parent().parent().parent().children('td:nth-child(1)').text();
    globalName = name;
    var url = window.location.origin.replace(/[0-9]{4}/g, 4000)+'/priorities/';
    url += id;
    var type = 'DELETE';
    var success= deleteRow;
    row = id;

    $.ajax({url:url, type:type, success:success});
    event.preventDefault();
  }

  function deleteRow(){
    debugger;
    $('tr[data-id='+row+']').remove();
    $('select').find('.'+globalName+'').remove();
  }

  function replaceEdit(){
    var id = $(this).parent().parent().parent().attr('data-id');
    var name = $(this).parent().parent().parent().children('td:nth-child(1)').text();
    globalName = name;
    preGlobalName = name;
    var value = $(this).parent().parent().parent().children('td:nth-child(2)').text();

    $(this).parent().parent().parent().children('td:nth-child(1)').empty();
    $(this).parent().parent().parent().children('td:nth-child(2)').empty();

    var $name = $('<input>');
    $name.val(name);
    $name.addClass('input');
    var $value = $('<input>');
    $value.val(value);
    $value.addClass('input');

    $(this).parent().parent().parent().children('td:nth-child(1)').append($name);
    $(this).parent().parent().parent().children('td:nth-child(2)').append($value);
    $(this).parent().children('div:nth-child(1)').addClass('hide');
    $(this).parent().children('div:nth-child(2)').addClass('hide');
    $(this).parent().siblings().removeClass('hide');


    row = id;
  }


  function addToTable(event){
    var name = $('#name').val();
    var value = $('#value').val();
    var data = 'name='+name+'&value='+value;
    var url = window.location.origin.replace(/[0-9]{4}/g, 4000);
    url += '/priorities';
    var type = 'POST';
    var success = sendDataToTablein;

    $.ajax({url:url, data:data, type:type, success:success});
    event.preventDefault();
  }
  
  function sendDataToTablein(data){
    for (var i = 0; i < 1; i++){
      addPriorityToTable(data);
    }
  }

  function addPriorityToTable(data){
    priorities.push(data);
    $('#name').val('');
    $('#value').val('');
    if (data._id){
      var $level = $('<td>');
      var $value = $('<td>');
      var $save = $('<td>');
      var $links = $('<div>');
      var $edit = $('<div>');
      var $remove = $('<div>');
      $edit.text('Edit');
      $edit.addClass('edit');
      $remove.text('Remove');
      $remove.addClass('remove');
      $links.append($edit, $remove);

      var $button = $('<button>');
      $button.addClass('show hide savePriority tiny radius');
      $button.text('Save');
      $button.css('background-color', 'green');

      $save.append($links, $button);

      var $opt = $('<option value='+data.name+'>'+data.name+'</option>');
      $opt.addClass(data.name);
      $('select').append($opt);
      $level.text(data.name);
      $value.text(data.value);

      var $row = $('<tr>');
      $row.attr('data-id', data._id);
      $row.append($level, $value, $save);

      $('#priorities > tbody').prepend($row);
    }
  }

})();

