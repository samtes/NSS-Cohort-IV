(function(){

  'use strict';
  $(document).ready(init);

  function init(){
    $('#go').click(go);

  }


  function go(){
    var data = $('#data').val();
    data = data.split(';');
    var start = data[0];
    var stop = data[1];
    var incriment = data[2];

    var array = _.range(start, stop, incriment);
    var sample = _.sample(array);
    var shuffled = _.shuffle(array);
    var fillter3and4 = _.filter(array, function(x){
      return (x%3 === 0) && (x%4 ===0);
    });
    var rejectEven = _.reject(array, function(x){
      return x%2 === 0;
    });
    var map = _.map(array, function(x){
      var z = Math.sqrt(x).toFixed(2);
      return z;
    });
    var arrAllEven = _.all(array, function(x){
      return x%2 === 0;
    });

    console.log(array);
    console.log(sample);
    console.log(shuffled);
    console.log(fillter3and4);
    console.log(rejectEven);
    console.log(map);
    console.log(arrAllEven);
  }


})();
